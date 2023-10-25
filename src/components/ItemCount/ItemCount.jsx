import { useState, useEffect } from "react"

const ItemCount = ({stock,initial,onAdd}) => {
    const [count, setCount] = useState(initial)
    useEffect(() => {
    }, [count])

const increment = () =>{
    if(count<stock)
    setCount(count => count + 1)
}
const decrement = () =>{
    if(count >0)
    setCount(count => count -1)
}


return(
    <div >
        <button onClick={decrement}>-</button>
        <p style={{display:"contents"}}>{count}</p>
        <button onClick={increment}>+</button>
        <div>
            <button onClick={()=> onAdd(count)} disabled={!stock}>Agregar al carrito</button>
        </div>
    </div>
)
}

export default ItemCount