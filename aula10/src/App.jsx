import { useQuery } from "@tanstack/react-query"
import { getCaracters } from "./requests/request"

function App() {

  const { data, isFetching, isError } = useQuery(["@character"], getCaracters(1))

  console.log(data)

  if (isFetching) {
    return <h3>Carregando....</h3>
  }

  if (isError) {
    return <h3>Erro ao buscar a página!</h3>
  }

  return (
    <>
      <h1>{data.results.name}</h1>

    </>
  )
}

export default App
