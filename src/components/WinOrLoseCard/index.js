// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {score, isWon, playAgain} = props

  const resultImage = isWon
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const resultText = isWon ? 'Won' : 'Lose'

  const onClickPlayAgain = () => {
    playAgain()
  }

  return (
    <div className="game-result-container">
      <div className="game-details-container">
        <h1 className="result-heading">You {resultText}</h1>
        <p className="result-description">Best Score</p>
        <p className="result-score">{score}/12</p>
        <button
          type="button"
          className="play-button"
          onClick={onClickPlayAgain}
        >
          Play Again
        </button>
      </div>
      <img src={resultImage} alt="win or lose" className="result-emoji-img" />
    </div>
  )
}

export default WinOrLoseCard
