const MyTest = ({ pokemon }) => {
    return (
        <>
        <div onClick={console.log}>{pokemon.name}</div>
        <a href={`/demo/pokemon?articleId=${pokemon.name}`}>{pokemon.name}</a>
        </>
    )
}

export default MyTest
