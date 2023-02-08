// Write your code here.
import './index.css'

const Navbar = props => {
  const {currentScore, topScore} = props
  return (
    <nav className="navbar-bg">
      <div className="score-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="logo"
        />
        <h1 className="emoji-heading"> Emoji Game</h1>
      </div>

      <div className="score-card">
        <p className="score">Score: {currentScore}</p>
        <p className="top-score">Top Score: {topScore}</p>
      </div>
    </nav>
  )
}

export default Navbar
