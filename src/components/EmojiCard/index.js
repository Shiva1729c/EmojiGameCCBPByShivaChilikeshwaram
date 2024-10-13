// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails} = props
  const {emojiName, emojiUrl} = emojiDetails

  return (
    <li className="emoji-card-item">
      <img src={emojiUrl} alt={emojiName} className="emoji" />
    </li>
  )
}

export default EmojiCard
