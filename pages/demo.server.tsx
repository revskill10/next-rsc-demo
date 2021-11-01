import { Suspense } from 'react'
import { format } from 'date-fns'
import React from 'react'
import List from '../components/List.server'

export const config = {
    unstable_runtimeJS: false
}

const Main = () => {
    const today = format(new Date(), 'yyyy-mm-dd')
    return (
        <>             
        <Suspense fallback={<div>Loading</div>}>
        <a href={'/demo'}>All {today}</a>
           <List />
        </Suspense>
        </>
    )
}

export default Main
