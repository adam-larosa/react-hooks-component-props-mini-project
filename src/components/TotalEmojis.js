export default function TotalEmojis({ m }) {
    const belowThirty = m < 30
    const emoji = belowThirty ? "☕️" : "🍱"
    const iSize = belowThirty ? 5 : 10
    let totalEmojis = ""

    for(let i = 0; i < m; i += iSize) {
        totalEmojis += emoji
    }

    return <>{totalEmojis}</>
}
