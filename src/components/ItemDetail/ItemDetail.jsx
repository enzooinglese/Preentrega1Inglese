import ItemCount from "../ItemCount/ItemCount"
import './ItemDetail.css'
import { useCart } from "../../context/CartContext"
import { Link } from "react-router-dom"

const ItemDetail = ({id, name, price, category, img, stock, description}) => {
    
    const {addItem, isInCart} = useCart()

    const handleOnAdd = (count) => {
        console.log(`se agregaron ${count} ${name}`)
        const productToAdd = {
            id, name, price, count
        }
        addItem(productToAdd)
    }
    
    return(
        <article className="item">
            <h2>
                {name}
            </h2>
            <picture>
                <img src={img} style={{width:300}}/>
            </picture>
            <article>
                <p>
                    Categoria: {category}
                </p>
                <p>
                    {description}
                </p>
                <p>
                    ${price}
                </p>
            </article>
            <article>
                {
                    isInCart(id) ? (
                        <Link to='/cart'>Finalizar Compra</Link>
                    ) : (
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                    )
                }
                
            </article>
        </article>
    )
}

export default ItemDetail