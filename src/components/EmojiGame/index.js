import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {
    score: 0,
    topScore: 0,
    clickedEmojisList: [],
    isGameOver: false,
    isWon: false,
  }

  playAgain = () => {
    const {score, topScore} = this.state
    const highestScore = score > topScore ? score : topScore
    this.setState({
      score: 0,
      clickedEmojisList: [],
      isGameOver: false,
      isWon: false,
      topScore: highestScore,
    })
  }

  //   this method gets called whenever website is reloaded or whenever state is updated by onClickEmoji method
  getShuffledEmojisList = () => {
    const {emojisList} = this.props
    const randomNumber = Math.random() - 0.5
    return emojisList.sort(() => randomNumber)
  }

  onClickEmoji = id => {
    const {clickedEmojisList, score} = this.state
    const {emojisList} = this.props

    if (clickedEmojisList.includes(id)) {
      this.setState({isGameOver: true, isWon: false})
    } else {
      const newScore = score + 1
      if (newScore === emojisList.length) {
        this.setState({isGameOver: true, isWon: true, score: newScore})
      } else {
        this.setState(prevState => ({
          clickedEmojisList: [...prevState.clickedEmojisList, id],
          score: newScore,
        }))
      }
    }
  }

  renderEmojiCard = () => {
    const shuffledEmojiList = this.getShuffledEmojisList()

    return (
      <ul className="emojis-container">
        {shuffledEmojiList.map(eachEmoji => (
          <EmojiCard
            emojiDetails={eachEmoji}
            key={eachEmoji.id}
            onClickEmoji={this.onClickEmoji}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {score, topScore, isGameOver, isWon} = this.state

    return (
      <>
        <NavBar score={score} topScore={topScore} isWon={isWon} />
        <div className="game-bg-container">
          <div className="responsive-container">
            {isGameOver ? (
              <WinOrLoseCard
                isWon={isWon}
                score={score}
                playAgain={this.playAgain}
              />
            ) : (
              this.renderEmojiCard()
            )}
          </div>
        </div>
      </>
    )
  }
}

export default EmojiGame
