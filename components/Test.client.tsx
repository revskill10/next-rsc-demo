import { useRouter } from "next/dist/client/router"
import useData from '../lib/use-data'

const Pokemon = ({ pokemon }: any) => {
    const router = useRouter()
    const { isReady, query } = router

    if (pokemon) return <div>{JSON.stringify(pokemon, null, 2)}</div>
    if (!pokemon || !isReady) return <div>...</div> 

    const articleId = query.articleId
    const data = useData(`test-${articleId}`, () => {
        return fetch('https://pokeapi.co/api/v2/pokemon/' + articleId)
        .then(response => response.json())
    })
    return (
        <div>{JSON.stringify(data, null, 2)}</div>
    )
}
export default Pokemon