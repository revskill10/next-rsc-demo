import { useRouter } from "next/dist/client/router"
import { useState, useEffect } from "react"
const Pokemon = ({ pokemon }: any) => {
    const router = useRouter()
    const { query } = router
    const [st, setSt] = useState(pokemon)
    const articleId = query.articleId
    useEffect(() => {
        if (articleId) {
            fetch('https://pokeapi.co/api/v2/pokemon/' + articleId)
            .then(response => response.json())
            .then(d => setSt(d))
        }        
    }, [articleId])
    
    return (
        <div onClick={() => alert('dung')}>Hello {st.name}</div>
    )
}
export default Pokemon