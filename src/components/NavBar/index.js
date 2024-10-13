// Write your code here.
import './index.css'

const NavBar = () => (
  <div className="app-header">
    <div className="logo-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
        alt="emoji logo"
        className="emoji-logo"
      />
      <p className="header-content">Emoji Game</p>
    </div>
    <div className="header-score-container">
      <p className="header-score">Score: 0</p>
      <p className="header-score">Top Score: 0</p>
    </div>
  </div>
)

export default NavBar
