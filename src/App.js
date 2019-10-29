import React from 'react';
import Card from './Card'
import './App.css';
import Modal from './Modal'

const foods = ['apple', 'cookies', 'pizza', 'coffee', 'cheese', 'chicken', 'spaghetti', 'juice']

class App extends React.Component {

  state = {
    prevCard: '',
    foods1: [],
    foods2: [],
    foods3: [],
    foods4: [],
    clicks: 0,
    showModal: false,
    highScore: undefined
  }

  componentDidMount() {
    this.randomiseFoods()
    this.retrieveHighScore()
  }

  handleClick = (e) => {
    if (this.state.showModal) {
      return
    }
    this.setState((prevState) => ({clicks: prevState.clicks + 1}))
    const parentCard = e.currentTarget
    if (parentCard.classList.contains('checking') === false && parentCard.classList.contains('turned') === false) {
      parentCard.classList.add('checking')
      const symbol = parentCard.classList[1]
      if (this.state.prevCard === '') {
        this.setState(() => ({prevCard: symbol}))
      } else {
        if (symbol === this.state.prevCard) {
          const checkedCards = document.getElementsByClassName('checking')
          setTimeout(() => {
            for (let i = 1; i >= 0; i--) {
              checkedCards[i].classList.add('turned')
              checkedCards[i].classList.remove('checking')
            }
            if (document.getElementsByClassName('turned').length === 16) {
              const currentScore = this.state.clicks
              if (this.state.highScore && currentScore < this.state.highScore) {
                localStorage.setItem('highScore', JSON.stringify(currentScore))
                console.log('updated high score')
              } else if (!this.state.highScore) {
                localStorage.setItem('highScore', JSON.stringify(currentScore))
                console.log('new high score')
              }
              this.setState(() => ({showModal: true}))
            }
          }, 500);
        } else {
          const checkedCards = document.getElementsByClassName('checking')
          setTimeout(() => {
            for (let i = 1; i >= 0; i--) {
              checkedCards[i].classList.remove('checking')
            }
          }, 500);
        }
        this.setState(() => ({prevCard: ''}))
      }
    }
  }

  playAgain = () => {
    this.setState(() => ({showModal: false, clicks: 0}))
    const turnedCards = document.getElementsByClassName('turned')
    while (turnedCards[0]) {
      turnedCards[0].classList.remove('turned')
    }
    this.randomiseFoods()
    this.retrieveHighScore()
  }

  randomiseFoods = () => {
    let mixedArray = [...foods, ...foods]
    for (let i = mixedArray.length - 1; i > 0; i--) {
      const randomItem = Math.floor(Math.random() * (i + 1));
      [mixedArray[i], mixedArray[randomItem]] = [mixedArray[randomItem], mixedArray[i]];
    }
    const foods1 = mixedArray.slice(0, 4)
    const foods2 = mixedArray.slice(4, 8)
    const foods3 = mixedArray.slice(8, 12)
    const foods4 = mixedArray.slice(12)
    this.setState(() => ({foods1, foods2, foods3, foods4}))
  }

  retrieveHighScore = () => {
    if (localStorage.getItem('highScore')) {
      this.setState(() => ({highScore: JSON.parse(localStorage.getItem('highScore'))}))
    }
  }

  render() {

    return (

      <div className="app-wrapper">

        <h1>MEMORY GAME</h1>

        <div className="stats-wrapper">
          <span className="counter">Clicks: {this.state.clicks}</span>
          {this.state.highScore && <span className="high-score">High Score: {this.state.highScore}</span>}
        </div>

        <div className="grid-wrapper">

          <div className="row">{this.state.foods1.map((food, i) => <Card food={food} handleClick={this.handleClick} key={`row1-cell${i}`} />)}</div>
          <div className="row">{this.state.foods2.map((food, i) => <Card food={food} handleClick={this.handleClick} key={`row2-cell${i}`} />)}</div>
          <div className="row">{this.state.foods3.map((food, i) => <Card food={food} handleClick={this.handleClick} key={`row3-cell${i}`} />)}</div>
          <div className="row">{this.state.foods4.map((food, i) => <Card food={food} handleClick={this.handleClick} key={`row4-cell${i}`} />)}</div>

        </div>

        {this.state.showModal && <Modal clicks={this.state.clicks} playAgain={this.playAgain} />}

      </div>

    );

  }

}

export default App;

//save high score in local storage
//display high score on screen 
//update high score
//create main menu with username input
//save username to local storage
//display saved usernames on main menu with high scores
//allow user to choose saved profile
//add sound on click, match, game over and game start, hover
//add button for toggling sound