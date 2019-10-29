import React from 'react';
import Card from './Card'
import './App.css';

const foods = ['apple', 'cookies', 'pizza', 'coffee', 'cheese', 'chicken', 'spaghetti', 'juice']

class App extends React.Component {

  state = {
    prevCard: '',
    foods1: [],
    foods2: [],
    foods3: [],
    foods4: []
  }

  componentDidMount() {
    const mixedArray = this.randomiseFoods()
    const foods1 = mixedArray.slice(0, 4)
    const foods2 = mixedArray.slice(4, 8)
    const foods3 = mixedArray.slice(8, 12)
    const foods4 = mixedArray.slice(12)
    this.setState(() => ({foods1, foods2, foods3, foods4}))
  }

  randomiseFoods = () => {
    let mixedArray = [...foods, ...foods]
    for (let i = mixedArray.length - 1; i > 0; i--) {
      const randomItem = Math.floor(Math.random() * (i + 1));
      [mixedArray[i], mixedArray[randomItem]] = [mixedArray[randomItem], mixedArray[i]];
    }
    return mixedArray
  }

  handleClick = (e) => {
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
              alert('game over')
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

  render() {

    return (

      <div className="app-wrapper">

        <h1>MEMORY GAME</h1>

        <div className="grid-wrapper">

          <div className="row">{this.state.foods1.map((food, i) => <Card food={food} handleClick={this.handleClick} key={`row1-cell${i}`} />)}</div>
          <div className="row">{this.state.foods2.map((food, i) => <Card food={food} handleClick={this.handleClick} key={`row2-cell${i}`} />)}</div>
          <div className="row">{this.state.foods3.map((food, i) => <Card food={food} handleClick={this.handleClick} key={`row3-cell${i}`} />)}</div>
          <div className="row">{this.state.foods4.map((food, i) => <Card food={food} handleClick={this.handleClick} key={`row4-cell${i}`} />)}</div>

        </div>

      </div>

    );

  }

}

export default App;

//add move counter
//add game over modal with score
//add sound on click, match, game over and game start, hover
//add button for toggling sound
//