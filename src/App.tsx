import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css'

/* components */
import Navbar from "./components/navbar/Navbar"
import Home from './components/Home/Home'
import Footer from "./components/footer/footer"

function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default App
