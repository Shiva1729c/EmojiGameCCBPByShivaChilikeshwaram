// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, onClickEmoji} = props
  const {emojiName, emojiUrl, id} = emojiDetails

  const onEmojiButtonClick = () => {
    onClickEmoji(id)
  }

  return (
    <li className="emoji-card-item">
      <button
        type="button"
        className="emoji-button"
        onClick={onEmojiButtonClick}
      >
        <img src={emojiUrl} alt={emojiName} className="emoji" />
      </button>
    </li>
  )
}

export default EmojiCard
