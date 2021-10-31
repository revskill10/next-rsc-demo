import useData from '../lib/use-data'
import React from 'react'
import MyTest from './MyTest.client';
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
export default List
