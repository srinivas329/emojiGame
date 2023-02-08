// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojisList, updateCards} = props
  const {emojiUrl, emojiName, id} = emojisList

  const onclickEvent = () => {
    updateCards(id)
  }

  return (
    <li className="emoji-card">
      <button type="button" onClick={onclickEvent} className="emoji-btn">
        <img className="emoji" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
