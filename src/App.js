import { Link } from "react-router-dom";
import useAxios from './useAxios'
function App() {
  const [data, error, loading] = useAxios();
  return (
    <>
      {error && (<p>There was an error</p>)}
      {loading && (<p>Loading...</p>)}
      {data && (<>
        {data.animals.map((animal) => (
          <Link to={`/detailview/${animal.id}`} key={animal.id}>
            <h3>{animal.name}</h3>
          </Link>
        ))}
      </>
      )
      }
    </>
  )
}

export default App;
