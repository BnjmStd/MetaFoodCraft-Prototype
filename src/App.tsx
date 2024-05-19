import { BrowserRouter, Route, Routes } from "react-router-dom"

/* components */
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/footer"
import FoodList from "./components/foodList/foodList"

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={ <FoodList/> } />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
