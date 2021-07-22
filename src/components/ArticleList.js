import Article from './Article'

const renderArticle = post => {
    const {id, title, minutes, date, preview} = post
    const articleProps = {key: id, title, minutes, date, preview}
    return <Article {...articleProps} />
}

const ArticleList = ({ posts }) => <main>{ posts.map(renderArticle) }</main>

export default ArticleList
