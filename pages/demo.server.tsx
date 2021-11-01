import { Suspense } from 'react'
import useData from '../lib/use-data'
import { Switch, Case, Default } from 'react-if';
import { format } from 'date-fns'
import React from 'react'

const List = () => {
    const { results } = useData('test', () => {
        return fetch('https://pokeapi.co/api/v2/pokemon?limit=500')
        .then(response => response.json())
    })
    const nodes = results.map((ar, idx) => {
        return (
            <div key={ar.name}><a href={`/demo?articleId=${ar.name}`}>{ar.name}</a></div>
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
        <div>{JSON.stringify(data, null, 2)}</div>
    )
}
const Main = ({ initialRouter, router = initialRouter }) => {
    const today = format(new Date(), 'yyyy-mm-dd')
    return (
        <>             
        <Suspense fallback={<div>Loading</div>}>
        <a href={'/demo'}>All {today}</a>
        <Switch>
            <Case condition={router?.query?.articleId}><Test articleId={router?.query?.articleId} /></Case>
            <Default><List /></Default>
            </Switch>
        </Suspense>
        </>
    )
}

export default Main

export const getServerSideProps = async (ctx) => {
    return {
        props: {
            initialRouter: {
                route: ctx.req.url,
                asPath: ctx.req.url,
                pathName: ctx.req.url,
                query: ctx.query 
            }
        }
    }
}