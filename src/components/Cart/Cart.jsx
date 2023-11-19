import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import './Cart.css'

const Cart = () => {
    const {cart, clearCart, totalQuantity, totalPrice} = useCart()

    if(totalQuantity === 0){
        return(
            <div>
                <h1>No hay items en el carrito</h1>
                <Link to='/'>Productos</Link>
            </div>
        )
    }
    return(
        <div className="contenedorCart">
            {cart.map(p => <CartItem key={p.id}{...p}/>)}
            <h3 className="totalUnity">Total de Unidades: {totalQuantity}</h3>
            <h3 className="totalPrice">Total: ${totalPrice}</h3>
            <button onClick={() => clearCart()}>Limpiar Carrito</button>
            <div style={{margin:20}}>
                <Link to='/checkout'>Checkout</Link>
            </div>
        </div>
    )
}

export default Cart