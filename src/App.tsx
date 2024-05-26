import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css'

/* components */
import Navbar from "./components/navbar/Navbar"
import Home from './components/Home/Home'
import Footer from "./components/footer/footer"
import ListSections from "./components/ListSections/ListSections"
import { useEffect } from "react"
import { useStore } from "./store/theme"

function App() {

    const currentTheme =  useStore(state => state.currentTheme)

    useEffect(() => {
      document.documentElement.style.setProperty('--theme', currentTheme);
    }, [currentTheme])
    
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/sections' element={<ListSections />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default App