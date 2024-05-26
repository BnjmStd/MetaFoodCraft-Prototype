import './Home.css'
import { Link } from "react-router-dom"

export default function Home() {

    return (
        <main className="Hero">
            <section>
                <header>
                    <h1>Rastreando <strong>Ingredientes</strong>, 
                        <br /> Construyendo Confianza
                    </h1>
                    <img src="https://github.com/BnjmStd.png" alt="Logo" />
                </header>
                <footer>
                    <p> ~ Grid & Code ~ </p><Link to={'/sections'}> Leer más </Link>
                </footer>
            </section>
        </main>
    ) 
}