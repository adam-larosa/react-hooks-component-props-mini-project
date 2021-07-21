import Article from './Article'

export default function ArticleList({ posts }) {
    return (
        <main>
            {posts.map( post => <Article key={post.id} title={post.title} 
                minutes={post.minutes} date={post.date} 
                preview={post.preview} /> )}
        </main>
    )
}