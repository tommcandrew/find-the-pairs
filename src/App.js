import React from 'react';
import './App.css';
import Modal from './components/Modal'
import Stats from './components/Stats'
import Grid from './components/Grid'
import MainMenu from './components/MainMenu'
import UIFx from 'uifx'
import levelUpSound from './sounds/levelup.mp3'
import gameOverSound from './sounds/gameover.wav'

const foods = ['apple', 'cookies', 'pizza', 'coffee', 'cheese', 'chicken', 'spaghetti', 'juice']

const levelUp = new UIFx(
  levelUpSound,
  {
    volume: 0.5,
    throttleMs: 100
  }
)

const gameOver = new UIFx(
  gameOverSound,
  {
    volume: 0.2,
    throttleMs: 100
  }
)

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
    bestScore: undefined,
    players: [],
    playerName: undefined,
    newBestScore: undefined
  }

  componentDidMount() {
    if (localStorage.getItem('players')) {
      const playersArray = JSON.parse(localStorage.getItem('players'))
      this.setState(() => ({players: [...playersArray]}))
    }
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
            this.playLevelUp()
            for (let i = 1; i >= 0; i--) {
              checkedCards[i].classList.add('turned')
              checkedCards[i].classList.remove('checking')
            }
            if (document.getElementsByClassName('turned').length === 16) {
              const currentScore = this.state.clicks
              debugger
              if (currentScore < this.state.bestScore || this.state.bestScore === undefined) {
                const playersArray = JSON.parse(localStorage.getItem('players'))
                for (let player of playersArray) {
                  if (player.name === this.state.playerName) {
                    player.bestScore = currentScore
                  }
                }
                localStorage.setItem('players', JSON.stringify(playersArray))
                this.setState(() => ({bestScore: currentScore, newBestScore: true}))

                console.log('updated best score')
              }
              setTimeout(() => {
                this.setState(() => ({showModal: true}))
                this.playGameOver()
              }, 1000);

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

  playLevelUp = () => {
    levelUp.play()
  }

  playGameOver = () => {
    gameOver.play()
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
    this.setState(() => ({playerName, showMenu: false, bestScore: undefined}))
    const newPlayerObj = {
      name: playerName,
      bestScore: undefined
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
    this.setState(() => ({playerName: playerObj.name, bestScore: playerObj.bestScore}))
  }

  render() {

    return (

      <div className="app-wrapper">

        {this.state.showMenu && <MainMenu handleChoose={this.handleChoose} saveNewPlayer={this.saveNewPlayer} setPlayer={this.setPlayer} players={this.state.players} />}

        {!this.state.showMenu &&

          <div>

            <Stats clicks={this.state.clicks} bestScore={this.state.bestScore} playerName={this.state.playerName} />

            <Grid
              foods1={this.state.foods1}
              foods2={this.state.foods2}
              foods3={this.state.foods3}
              foods4={this.state.foods4}
              handleClick={this.handleClick}
            />
          </div>
        }

        {this.state.showModal && <Modal clicks={this.state.clicks} playAgain={this.playAgain} newBestScore={this.state.newBestScore} />}

      </div>

    );

  }

}

export default App;


//add sound on click, match, game over and game start, hover
//add button for toggling sound