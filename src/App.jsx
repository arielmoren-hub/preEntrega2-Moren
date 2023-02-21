import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import ItemDetail from './components/ItemDetail'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route exact path='/catalog' element={<ItemListContainer />}/>
          <Route exact path='/detail' element={<ItemDetail />}/>
        </Routes>

      </BrowserRouter>

    </div>
  )
}

export default App
