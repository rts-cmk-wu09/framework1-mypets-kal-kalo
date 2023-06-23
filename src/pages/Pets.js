import useAxios from './useAxios'
import { Link } from 'react-router-dom'
export default function Pets() {
    const [data, error, loading] = useAxios()
    return (
        <div className='pets'>
            {error && 
            <div>{error}</div>}
            {loading && 
            <div>Loading...</div>}

            {data && 
            <div>
                {data.animals.map(pet => (
                <Link to={pet.id.toString()} key={pet.id}>
                <h3>{pet.name}</h3>
                </Link>
                ))}
            </div>}
        </div>
    )
}


