// Write your code here.

import {Component} from 'react'

import Navbar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLossCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {status: true, clickedEmojiList: [], topScore: 0}

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  fixTopScoreAndGameEnd = () => {
    this.setState(prevState => ({
      status: !prevState.status,
    }))
  }

  updateCards = id => {
    const {clickedEmojiList} = this.state
    const emojisStatus = clickedEmojiList.includes(id)
    const clickedEmojisLength = clickedEmojiList.length

    if (emojisStatus) {
      this.fixTopScoreAndGameEnd(clickedEmojisLength)
    } else {
      this.setState(prevState => ({
        clickedEmojiList: [...prevState.clickedEmojiList, id],
      }))
    }
  }

  emojiCardCode = () => {
    const shuffledEmojisList = this.shuffledEmojisList()

    return (
      <ul className="ul-list">
        {shuffledEmojisList.map(each => (
          <EmojiCard
            updateCards={this.updateCards}
            emojisList={each}
            key={each.id}
          />
        ))}
      </ul>
    )
  }

  resetGame = () => {
    const {clickedEmojiList} = this.state
    this.setState({clickedEmojiList: [], status: true})

    const {topScore} = this.state
    let newTopScore = topScore

    if (clickedEmojiList.length > topScore) {
      newTopScore = clickedEmojiList.length
    }

    this.setState({topScore: newTopScore})
  }

  winOrLossCard = () => {
    const {emojisList} = this.props
    const {clickedEmojiList, topScore} = this.state
    const isWon = clickedEmojiList.length === emojisList.length

    return (
      <div className="result-card">
        <WinOrLossCard
          isWon={isWon}
          topScore={topScore}
          score={clickedEmojiList.length}
          onCLickPlayAgain={this.resetGame}
        />
      </div>
    )
  }

  render() {
    const {status, clickedEmojiList, topScore} = this.state

    return (
      <div className="bg-container">
        <div>
          <Navbar
            status={status}
            currentScore={clickedEmojiList.length}
            topScore={topScore}
          />
        </div>
        <div className="bottom-card">
          {status ? this.emojiCardCode() : this.winOrLossCard()}
        </div>
      </div>
    )
  }
}

export default EmojiGame
