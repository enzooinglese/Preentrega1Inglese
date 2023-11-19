import { useCart } from "../../context/CartContext"
import './CheckoutItem.css'

const CheckoutItem = ({id,name,price,count}) =>{

    return(
        <div className="checkoutItem">
            <h3>{name}</h3>
            <h3>Cantidad: {count}</h3>
        </div>
    )
}

export default CheckoutItem