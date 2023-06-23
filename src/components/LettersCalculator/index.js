import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {searchInput: ''}

  phraseEntered = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state

    const count = searchInput.length
    return (
      <div className="bg-container">
        <div className="text-container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label htmlFor="input-id" className="text">
            Enter the phrase
          </label>
          <input
            className="input"
            placeholder="Enter the phrase"
            id="input-id"
            onChange={this.phraseEntered}
          />
          <div className="count-container">
            <p className="count-text">No.of letters: {count}</p>
          </div>
        </div>
        <div className="image-container">
          <img
            className="image"
            alt="letters calculator"
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          />
        </div>
      </div>
    )
  }
}
export default LettersCalculator
