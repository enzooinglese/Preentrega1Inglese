import CartWidget from "../CartWidget/CartWidget"
import { NavLink, Link } from "react-router-dom"
import './NavBar.css'
import { Component } from "react"

const NavBar = () => {
    return(
    <nav className="NavBar">
        <li className="List">
            <ul>
                <Link to='/'>
                    <h2>CueroAl100</h2>
                </Link>
            </ul>
            <ul>
                <NavLink to='/category/Zapatilla-Hombre'>Zapatillas Hombre</NavLink>
            </ul>
                <ul>
                    <NavLink to='/category/Zapatilla-Mujer'>Zapatillas Mujer</NavLink>
                </ul>
                <ul>
                    <NavLink to='/category/Zapatos-Hombre'>Zapatos Hombre</NavLink>
                </ul>
                <ul>
                    <CartWidget />
                </ul>
            
        </li>
    </nav>
    )
    
}

export default NavBar