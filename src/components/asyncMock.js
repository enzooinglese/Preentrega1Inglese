const products = [
    {
        id: "1",
        name: "Labil Black",
        price: 24000,
        category: "Zapatilla-Hombre",
        img: "https://static.wixstatic.com/media/a36d31_c355bb72c89c48fbbb0507acc9d9b424~mv2.jpg/v1/fill/w_720,h_720,al_c,lg_1,q_85/a36d31_c355bb72c89c48fbbb0507acc9d9b424~mv2.jpg",
        stock: 5,
        description: "descripcion labil black"
    },
    {
        id: "2",
        name: "Yiyo",
        price: 24000,
        category: "Zapatilla-Hombre",
        img: 'https://static.wixstatic.com/media/a36d31_cc5747eafa7d448b8b85795376e2eb01~mv2.jpg/v1/fill/w_918,h_918,al_c,q_85,usm_0.66_1.00_0.01/a36d31_cc5747eafa7d448b8b85795376e2eb01~mv2.jpg', 
        stock: 4,
        description: "descripcion yiyo"
    },
    {
        id: "3",
        name: "CabBlack",
        price: 24000,
        category: "Zapatilla-Hombre",
        img: "https://static.wixstatic.com/media/a36d31_4295f770914342bd9204e27faa41f9fa~mv2.jpg/v1/fill/w_918,h_918,al_c,q_85,usm_0.66_1.00_0.01/a36d31_4295f770914342bd9204e27faa41f9fa~mv2.jpg",
        stock: 8,
        description: "descripcion cab black"
    },
    {
        id: "4",
        name: "Delvis",
        price: 45100,
        category: "Zapatilla-Mujer",
        img: "https://images.ib2c.com.ar/repository/273/productsList/3273648.jpg?width=1380&height=1380&format=webp&rmode=pad&rcolor=white",
        stock: 6,
        description: "descripcion Delvis"
    },
    {
        id: "5",
        name: "Marisa",
        price: 46990,
        category: "Zapatilla-Mujer",
        img: "https://images.ib2c.com.ar/repository/273/productsList/3275679.jpg?width=1380&height=1380&format=webp&rmode=pad&rcolor=white",
        stock: 7,
        description: "descripcion Marisa"
    },
    {
        id: "6",
        name: "Marco",
        price: 46990,
        category: "Zapatos-Hombre",
        img: "https://images.ib2c.com.ar/repository/273/productsList/3981843.jpg?width=1380&height=1380&format=webp&rmode=pad&rcolor=white",
        stock: 2,
        description: "descripcion Marco"
    }
]
export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 700 )
    } )
}
export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 700)
    })
}
export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 700)
    })
}