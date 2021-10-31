import marked from 'marked'
import sanitizeHtml from 'sanitize-html'
const Main = (props) => {
    const html = sanitizeHtml(marked(props.content));

    return (
        <>           
            <a href={`/demo?articleId=${props.id}`}><h1>{props.title}</h1></a>
            <p dangerouslySetInnerHTML={{ __html: html }} />
        </>
    )
}

export default Main