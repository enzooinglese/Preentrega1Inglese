import { Link } from "react-router-dom"
import './Item.css'

const Item = ({id, name, img, price, description}) => {
    return(
        
        <div className="cajaproducto">
            <h2>{name}</h2>
            <img src={img} alt={description} style={{width: 200}} />
            <h3>${price}</h3>
            <Link to={`/item/${id}`}>Detalle</Link>
        </div>
    )
}

export default Item