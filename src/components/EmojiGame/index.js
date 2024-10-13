/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'

import './index.css'

class EmojiGame extends Component {
  renderEmojiCard = () => {
    const {emojisList} = this.props
    return (
      <ul>
        {emojisList.map(eachEmoji => (
          <EmojiCard emojiDetails={eachEmoji} key={eachEmoji.id} />
        ))}
      </ul>
    )
  }

  render() {
    return (
      <>
        <NavBar />
        <div className="game-bg-container">
          <h1>hi</h1>
        </div>
      </>
    )
  }
}

export default EmojiGame
