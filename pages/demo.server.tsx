import { Suspense } from 'react'
import useData from '../lib/use-data'
import { Switch, Case, Default } from 'react-if';
import { format } from 'date-fns'
import React from 'react'
import Pokemon from '../components/Test.client';
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
const Test = (props) => {
    const articleId = props.articleId
    const data = useData(`test-${articleId}`, () => {
        return fetch('https://pokeapi.co/api/v2/pokemon/' + articleId)
        .then(response => response.json())
    })
    return (
       <Pokemon pokemon={data} />
    )
}
const Main = ({ router }) => {
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
