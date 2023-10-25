import ItemCount from "../ItemCount/ItemCount"
import './ItemDetail.css'

const ItemDetail = ({id, name, price, category, img, stock, description}) => {
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
                <ItemCount initial={1} stock={stock} onAdd={(count) => console.log("Cantidad agregada: " ,count)}/>
            </article>
        </article>
    )
}

export default ItemDetail