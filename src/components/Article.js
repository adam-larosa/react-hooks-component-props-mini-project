import Emojis from './Emojis'
function Article({ title, date = "January 1, 1970", preview, minutes:mins }) {

    return (
        <article>
            <h3>{title}</h3>
            <small>{date} {mins} min read <Emojis m={mins} /></small>
            <p>{preview}</p>
        </article>
    )
}

export default Article
