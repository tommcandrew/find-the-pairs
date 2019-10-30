import React from 'react';
import './App.css';
import Modal from './components/Modal'
import Stats from './components/Stats'
import Grid from './components/Grid'
import MainMenu from './components/MainMenu'

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
    showMenu: true,
    highScore: undefined,
    players: [],
    playerName: undefined
  }

  componentDidMount() {
    const playersArray = JSON.parse(localStorage.getItem('players'))
    this.setState(() => ({players: [...playersArray]}))
    this.randomiseFoods()
  }

  handleChoose = () => {
    this.setState(() => ({showMenu: false}))
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
              if (currentScore < this.state.highScore || this.state.highScore === '') {
                const playersArray = JSON.parse(localStorage.getItem('players'))
                for (let player of playersArray) {
                  if (player.name === this.state.playerName) {
                    player.highScore = currentScore
                  }
                }
                localStorage.setItem('players', JSON.stringify(playersArray))
                this.setState(() => ({highScore: currentScore}))
                console.log('updated high score')
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

  saveNewPlayer = (e) => {
    e.preventDefault()
    const playerName = e.target.elements.nameInput.value
    this.setState(() => ({playerName, showMenu: false, highScore: ''}))
    const newPlayerObj = {
      name: playerName,
      highScore: ''
    }
    let playersArray
    if (localStorage.getItem('players') && localStorage.getItem('players').length > 0) {
      playersArray = JSON.parse(localStorage.getItem('players'))
    } else {
      playersArray = []
    }
    playersArray.push(newPlayerObj)
    localStorage.setItem('players', JSON.stringify(playersArray))
  }

  setPlayer = (playerObj) => {
    this.setState(() => ({playerName: playerObj.name, highScore: playerObj.highScore}))
  }

  render() {

    return (

      <div className="app-wrapper">

        {this.state.showMenu && <MainMenu handleChoose={this.handleChoose} saveNewPlayer={this.saveNewPlayer} setPlayer={this.setPlayer} players={this.state.players} />}

        {!this.state.showMenu &&

          <div>

            <Stats clicks={this.state.clicks} highScore={this.state.highScore} playerName={this.state.playerName} />

            <Grid
              foods1={this.state.foods1}
              foods2={this.state.foods2}
              foods3={this.state.foods3}
              foods4={this.state.foods4}
              handleClick={this.handleClick}
            />
          </div>
        }

        {this.state.showModal && <Modal clicks={this.state.clicks} playAgain={this.playAgain} />}

      </div>

    );

  }

}

export default App;

//create main menu with username input
//save username to local storage
//display saved usernames on main menu with high scores
//allow user to choose saved profile
//add sound on click, match, game over and game start, hover
//add button for toggling sound