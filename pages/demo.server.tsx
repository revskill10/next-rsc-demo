import { createClient } from '@supabase/supabase-js'
import { Suspense } from 'react'
import useData from '../lib/use-data'
import { Switch, Case, Default } from 'react-if';
import moment from 'moment'
import React from 'react'
const supabaseUrl = 'https://roalneftzccdyalmjdfw.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNTUyNjY3NywiZXhwIjoxOTUxMTAyNjc3fQ.RTDs1APcLbg3VrHYcrcyao0ocYU8OyU6yPzg0rkLygg'
console.log('supabaseUrl', supabaseUrl)
const supabase = createClient(supabaseUrl, supabaseAnonKey)
const List = () => {
    const { data } = useData('test', async () => {
        const result = await supabase.from('articles').select('*')
        console.log('result', result)
        return result
    })
    const nodes = data?.map((ar, idx) => {
        return (
            <div key={ar.id}>{JSON.stringify(data, null, 2)}</div>
        )
    })
    return nodes
}
const Test = (props) => {
    const articleId = props.articleId
    const { data } = useData(`test-${articleId}`, () => {
        return supabase.from('articles').select('*').eq('id', articleId).single()
    })
    if (data) {
        return (
            <div>{JSON.stringify(data, null, 2)}</div>
        )
    } else {
        return null
    }
    
}
const Main = ({ router }) => {
    console.log('router', JSON.stringify(router, null, 2))
    if (router) {
        return (
            <>             
            <Suspense fallback={<div>Loading</div>}>
            <a href={'/demo'}>All {moment().toDate().toUTCString()}</a>
            <Switch>
              <Case condition={router?.query?.articleId}><Test articleId={router?.query?.articleId} /></Case>
              <Default><List /></Default>
              </Switch>
            </Suspense>
            </>
        )
    } else {
        return null
    }
    
}

export default Main
