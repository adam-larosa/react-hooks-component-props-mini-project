import Emojis from './Emojis'
function Article({ title, date = "January 1, 1970", preview, minutes:mins }) {
    //make emoji array (empty)
    //use conditional logic to set emoji type
    //push appropiate number of emojis into array
    //smack into small element

    //made an empty variable
    //use conditional to set emoji type
    //count number of times needed
    //make the element
    //set content of element
    //RENDER STUFF!!!
    
    //start off with logic in JSX!
    //ternery in JSX?
    // <small>{date} {condition ? oneFunction() : otherFunction()}</small>

    return (
        <article>
            <h3>{title}</h3>
            <small>{date} {mins} min read <Emojis m={mins} /></small>
            <p>{preview}</p>
        </article>
    )
}

export default Article
