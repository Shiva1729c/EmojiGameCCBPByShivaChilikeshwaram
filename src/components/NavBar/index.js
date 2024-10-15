// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore, isWon} = props

  return (
    <div className="app-header">
      <div className="header-content">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
            className="emoji-logo"
          />
          <h1 className="header-name">Emoji Game</h1>
        </div>
        {!isWon ? (
          <div className="header-score-container">
            <p className="header-score">Score: {score}</p>
            <p className="header-score">Top Score: {topScore}</p>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default NavBar
