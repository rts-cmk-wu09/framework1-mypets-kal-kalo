import useAxios from './useAxios'
import { useParams } from 'react-router-dom'

export default function Pets() {
    const { id } = useParams()
    const [data, error, loading] = useAxios(id)
    data && console.log('--------------------', data.animal.name)
    return (
        <div className='pets'>
            {error && 
            <div>{error}</div>}
            {loading && 
            <div>Loading...</div>}

            {data && 
            <div>
                {data.animal.name}
            </div>}
        </div>
    )
}


