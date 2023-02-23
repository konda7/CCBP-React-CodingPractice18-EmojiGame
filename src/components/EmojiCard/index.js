import './index.css'

const emojiCard = props => {
  const {emojiDetails} = props

  return (
    <li className="emoji-conatiner">
      <img
        src={emojiDetails.emojiUrl}
        alt={emojiDetails.emojiName}
        className="emoji"
      />
    </li>
  )
}

export default emojiCard
