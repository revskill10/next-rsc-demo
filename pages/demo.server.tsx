import { Suspense } from 'react'
import { format } from 'date-fns'
import useData from '../lib/use-data'
import MyTest from '../components/MyTest.client';
const PokmonList = () => {
    const { results } = useData('test', () => {
        return fetch('https://pokeapi.co/api/v2/pokemon?limit=500')
        .then(response => response.json())
    })
    const nodes = results.map((ar, idx) => {
        return (
            <MyTest pokemon={ar} key={ar.name} />
        )
    })
    return nodes
}
const Main = () => {
    const today = format(new Date(), 'yyyy-mm-dd')
    return (
        <>             
        <div><a href={`/demo`}>{today}</a></div>
        <Suspense fallback={<div>Loading</div>}>
            <PokmonList />
        </Suspense>
        </>
    )
}

export default Main
