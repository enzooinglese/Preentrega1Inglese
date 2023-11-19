import { useCart } from '../../context/CartContext'
import cart from '../assets/cart.svg'
import './CartWidget.css'
import { Link } from 'react-router-dom'

const CartWidget = () => {
const { totalQuantity } = useCart()

    return(
        <div>
            <Link to='/Cart' style={{display: totalQuantity > 0 ? 'block' : 'none'}}>
                <img src={cart} alt='cartwidget'/>
                {totalQuantity}
            </Link>
        </div>
    )
}

export default CartWidget