import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './components/navbar/navbar'
import ItemListContainer from './components/itemListContainer/itemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

function App() {
  // const [show,setShow] = useState(false)

  return (
    <div>
      <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={'Todos los productos'}/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Productos filtrados por categoria'}/>}/>
            <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
            <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
          </Routes>
      </BrowserRouter>
    </div>
    
    
  )
}

//  {/* <button onClick={() => setShow(prev => !prev)}>Agregar/Quitar</button> */}
//  {show ? <ItemCount stock={5} initial={1} onAdd={(count) => console.log("Canitdad agregada : ", count)}/> : null}

export default App
