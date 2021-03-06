import { Suspense } from 'react'
import useData from '../../lib/use-data'
import { format } from 'date-fns'
import React from 'react'
import Pokemon from '../../components/Test';
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
    if (!router?.query?.articleId) return <div>NOt found</div>
    return (
        <>             
        <div><a href={`/demo`}>{today}</a></div>
        <Suspense fallback={<div>Loading</div>}>
            <Test articleId={router?.query?.articleId} />
        </Suspense>
        </>
    )
}

export default Main
