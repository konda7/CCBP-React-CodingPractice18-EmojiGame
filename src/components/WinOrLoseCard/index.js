// Write your code here.

import './index.css'

const WinOrLoseCard = () => (
  <div className="win-or-lose-container">
    <div className="game-result-container">
      <h1 className="result">You Won</h1>
      <p className="remarks">Best Score</p>
      <p className="points">12/12</p>
      <button type="button" className="play-again-btn">
        Play Again
      </button>
    </div>
    <img
      src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
      alt="win or lose"
      className="win-or-lose-img"
    />
  </div>
)

export default WinOrLoseCard
