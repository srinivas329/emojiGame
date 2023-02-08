// Write your code here.
import './index.css'

const WinOrLossCard = props => {
  const {onCLickPlayAgain, isWon, score, topScore} = props

  const scoreCard = score > topScore

  const result = score === 12 ? 'You Won' : 'You lose'
  const imageStat = isWon
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const scoreStat = scoreCard ? 'Best Score' : 'Score'

  return (
    <div className="result-container">
      <div>
        <h1 className="play-result-text">{result}</h1>
        <p className="best-score">{scoreStat}</p>
        <p className="score-text">{score}/12</p>
        <button
          onClick={onCLickPlayAgain}
          className="btn-play-again"
          type="button"
        >
          Play Again
        </button>
      </div>
      <div>
        <img src={imageStat} alt="win or lose" className="result-img" />
      </div>
    </div>
  )
}

export default WinOrLossCard
