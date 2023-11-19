import { useCart } from "../../context/CartContext"
import '../assets/delete.svg'
import './CartItem.css'

const CartItem = ({id,name,img,price,count}) =>{
    const {removeItem} = useCart()

    return(
        <div className="itemCart">
            <h3>{name}</h3>
            <h3>Cantidad: {count}</h3>
            <h3>Precio por unidad: ${price}</h3>
            <h3>Subtotal: ${price * count}</h3>
            <button onClick={() => removeItem(id)}>X</button>
        </div>
    )
}

export default CartItem