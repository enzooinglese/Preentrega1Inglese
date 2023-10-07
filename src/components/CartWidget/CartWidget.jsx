import cart from '../assets/cart.svg'

const CartWidget = () => {
    return(
        <div>
            <button><img src={cart} alt="cart-widget" />
            0
            </button>
        </div>
    )
}

export default CartWidget