import { useStore } from '../../store/theme'
import './ListSections.css'

export default function ListSections() {
    
    const sections = useStore(state => state.sections)

    return (
        <div>
            <p>{sections}</p>
        </div>
    )
}