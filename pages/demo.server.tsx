import { Suspense } from 'react'
import useData from '../lib/use-data'
import { format } from 'date-fns'
import React from 'react'
import MyTest from '../components/MyTest.client';
const List = () => {
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
        <Suspense fallback={<div>Loading</div>}>
            <List />
        </Suspense>
        </>
    )
}

export default Main
