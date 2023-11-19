import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { getProducts } from "../../services/firebase/products"

const ItemListContainer =({greeting}) => {

    const [products, setProducts] = useState([])

    const {categoryId} = useParams()

    const [loading,setLoading] = useState(true)

    useEffect(() => {
        const asyncFunc = () => getProducts(categoryId)
        setLoading(true)

        asyncFunc(categoryId)
            .then(result => {
               setProducts(result)
               
            })
            .catch(error=>{
                return(
                    <h1>Hubo un error al cargar los productos</h1>
                )
            })
            .finally(()=>{
                setLoading(false)
            })
    }, [categoryId])

    if(loading) {
        return <h1>Loading...</h1>
    }
    
    return(
        <div>
            <h2>{greeting}</h2>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer