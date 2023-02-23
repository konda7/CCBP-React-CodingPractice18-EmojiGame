import './index.css'

const NavBar = () => (
  <nav className="navbar">
    <div className="logo-heading-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
        alt="emoji logo"
        className="game-img"
      />
      <h1 className="game-heading">Emoji Game</h1>
    </div>
    <div className="score-container">
      <p className="score">Score: 0</p>
      <p className="score">Top Score: 0</p>
    </div>
  </nav>
)

export default NavBar
