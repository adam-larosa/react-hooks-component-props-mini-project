/*
    Possible bonus strategies?


    make emoji array (empty)
    use conditional logic to set emoji type
    push appropiate number of emojis into array
    smack into small element

    made an empty variable
    use conditional to set emoji type
    count number of times needed
    make the element
    set content of element
    RENDER STUFF!!!

    start off with logic in JSX!
    ternery in JSX?
    <small>{date} {condition ? oneFunction() : otherFunction()}</small>
*/
export default function Emojis({ m }) {
    const belowThirty = m < 30
    const emoji = belowThirty ? "☕️" : "🍱"
    const iSize = belowThirty ? 5 : 10
    const totalEmojis = Math.ceil(m / iSize)

    return <>{ emoji.repeat(totalEmojis) }</>
}
