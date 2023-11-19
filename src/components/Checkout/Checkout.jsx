
import { useCart } from "../../context/CartContext"
import { getDocs, collection, query, where, documentId, writeBatch, addDoc } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"
import { useState } from "react"
import CheckoutForm from "../CheckoutForm/CheckoutForm"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"
import CheckoutItem from "../CheckoutItem/CheckoutItem"

const Checkout = () => {
    const [Loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')

    const {cart, totalPrice, clearCart, totalQuantity} = useCart()

    const createOrder = async ({name, phone, email}) => {
        
        try{
            setLoading(true)
            
            const objOrder = {
                buyer: {
                    name,
                    phone,
                    email
                },
                items: cart,
                total: totalPrice
            }
    
            const batch = writeBatch(db)
            const outOfStock = []
    
            const ids = cart.map(prod => prod.id)
    
            const productsRef = query(collection(db , 'products'), where(documentId(),'in' ,ids))
    
            const {docs} = await getDocs(productsRef)
    
            docs.forEach(async documentSnapshot => {
                const fields = documentSnapshot.data()
                const stockDb = fields.stock
    
                const productAddedToCart = cart.find(prod => prod.id === documentSnapshot.id)
                const prodQuantity = productAddedToCart.count
    
                if(stockDb >= prodQuantity){

                    batch.update(documentSnapshot.ref, {stock: stockDb - prodQuantity})
                }else{
                    outOfStock.push({id: documentSnapshot.id, ...fields})
                }
                if(outOfStock.length === 0){
                    const ordersRef = collection(db , 'orders')
    
                    const {id} = await addDoc(ordersRef, objOrder)
                    batch.commit()
                    clearCart()
                    setOrderId(id)
                    console.log(`El id de su orden es ${id}`)
                }else{
                    console.log('no hay stock de algun producto')
                }
            })
        }   catch(error) {
            console.error('Hubo un error generando la orden')
        }   finally{
            setLoading(false)
        }
        
        
    }

    if(Loading){
        return <h1>Se esta generando su orden...</h1>
    }
    if(orderId){
        return <h1>El id de su orden es : {orderId}</h1>
    }

    return(
        <div>
            <h1>Checkout</h1>
            <h2>Detalle de la compra</h2>
            {cart.map(p=> <CheckoutItem key={p.id}{...p} />)}
            <h3>Total de Unidades: {totalQuantity}</h3>
            <h3>Total: ${totalPrice}</h3>
            <CheckoutForm onConfirm={createOrder}/>
            <Link to={'/cart'}>Atras</Link>
        </div>
    )
}


export default Checkout