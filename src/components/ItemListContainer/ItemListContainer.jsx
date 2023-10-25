import { useState, useEffect } from "react"
import { getProducts, getProductsByCategory } from "../AsyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer =({greeting}) => {

    const [products, setProducts] = useState([])

    const {categoryId} = useParams()

    useEffect(() => {
        const asyncFunc = categoryId ? getProductsByCategory : getProducts
        
        asyncFunc(categoryId)
            .then(result => {
               setProducts(result)
               
            })
    }, [categoryId])

    return(
        <div>
            <h2>{greeting}</h2>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer