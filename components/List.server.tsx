import useData from '../lib/use-data'
import React from 'react'

const List = () => {
    const { results } = useData('test', () => {
        return fetch('https://pokeapi.co/api/v2/pokemon?limit=500')
        .then(response => response.json())
    })
    const nodes = results.map((ar, idx) => {
        return (
            <div key={ar.name}><a href={`/demo/pokemon?articleId=${ar.name}`}>{ar.name}</a></div>
        )
    })
    return nodes
}

export default List