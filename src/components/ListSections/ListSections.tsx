import { useEffect, useState } from 'react'
import { useStore } from '../../store/theme'
import './ListSections.css'
import { Link } from 'react-router-dom'

export default function ListSections() {
    
    const {
        sections, 
        handleSections

    } = useStore(state => ({
        sections: state.sections,
        handleSections: state.handleSections
    }))

    useEffect(() => {
        handleSections(1)
    }, [])

    const uniqueCategories = [...new Set(sections.map(item => item.categoria))]
    
    const [search, setSearch] = useState<string>('')

    const handleSearch = (e:  React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value.toLowerCase())
    }

    const filteredCategories = uniqueCategories.filter((item) =>
        search.toLowerCase() === '' ? item : item.toLowerCase().includes(search.toLowerCase())
      );

    return (
        <div className='container-sections'>
            <h1> <strong> Food </strong> sections </h1>
            <label className='container-input'>
                <input className='input-value'
                    type="text"
                    placeholder=' '
                    onChange={ handleSearch } 
                    value={ search }
                />

                <span 
                     
                    className='container-placeholder'
                >
                    Search sections: 
                </span>
            </label>
            <ul className="sections">
            
            {
                sections && filteredCategories.length > 0 
                ? (
                    filteredCategories.map((categoria, index) => (
                    <li key={index}>
                        <Link className="secc" to={"/"}>{categoria}</Link>
                    </li>
                    ))
                ) : (
                    <div className='loading'>
                        <span className='spinner'></span>
                    </div>   
                )}
            </ul>
        </div>
    )
}