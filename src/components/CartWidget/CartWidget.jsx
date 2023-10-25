import cart from '../assets/cart.svg'
import './CartWidget.css'

const CartWidget = () => {
    return(
        <div>
            <button className='btn'><img src={cart} alt="cart-widget" />
            0
            </button>
        </div>
    )
}

export default CartWidget