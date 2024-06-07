import './index.css'

const Navbar = props => {
  const {score, time} = props
  return (
    <div className="navbar-container">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png "
          alt="website logo"
          className="logo"
        />
      </div>
      <ul className="score-container">
        <li className="score">
          <p>Score: {score}</p>
        </li>
        <li className="timer-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer-logo"
          />
          <p className="timer-count">{time} sec</p>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
