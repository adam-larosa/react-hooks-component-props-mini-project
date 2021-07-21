export default function TotalEmojis({ minutes }) {
    const emoji = minutes < 30 ? "☕️" : "🍱"
    let totalEmojis = ""

    if (minutes < 30) {
        for(let i = 0; i < minutes; i += 5) {
            totalEmojis += emoji
        }
    } else {
        for(let i = 0; i < minutes; i += 10) {
            totalEmojis += emoji
        }
    }
    return <>{totalEmojis}</>
}