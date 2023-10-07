import './App.css'
import NavBar from './components/navbar/navbar'
import ItemListContainer from './components/itemListContainer/itemListContainer'

function App() {
  

  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={"Bienvenidos"}/>
    </div>
    
  )
}

export default App
