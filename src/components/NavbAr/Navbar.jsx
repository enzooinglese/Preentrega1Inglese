import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return(
    <nav>   
        <h2>CueroAl100</h2>
        <div>
            <button>Zapatillas Hombre</button>
            <button>Zapatillas Mujer</button>
            <button>Zapatos Hombre</button>
        </div>
        <CartWidget />
    </nav>
    )
    
}

export default NavBar