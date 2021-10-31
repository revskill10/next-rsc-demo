import { StaticRouter } from 'react-router'

const App = ({ router }) => {
    console.log('router', router)
    if (!router) return <div>Loading</div>
    const context = {}
    return (
        <StaticRouter location={router.asPath} context={context}>
        <div>{JSON.stringify(router, null, 2)}</div>
        </StaticRouter>
    )
}

export default App
