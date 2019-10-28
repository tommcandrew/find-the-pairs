import React from 'react';
import Card from './Card'
import './App.css';

const foods = ['apple', 'cookies', 'pizza', 'coffee', 'cookies', 'cheese', 'chicken', 'cheese', 'coffee', 'spaghetti', 'apple', 'juice', 'chicken', 'juice', 'spaghetti', 'pizza']
const mixedFoods = []

class App extends React.Component {

  state = {
    prevCard: '',
    mixedFoods: [],
    foods1: [],
    foods2: [],
    foods3: [],
    foods4: []
  }

  componentDidMount() {
    this.randomiseFoods()
    this.setState(() => ({mixedFoods}))

    const foods1 = mixedFoods.slice(0, 4)
    const foods2 = mixedFoods.slice(4, 8)
    const foods3 = mixedFoods.slice(8, 12)
    const foods4 = mixedFoods.slice(12)

    this.setState(() => ({foods1, foods2, foods3, foods4}))
  }

  randomiseFoods = () => {
    if (foods.length === 0) {
      return
    }
    const randomNum = Math.floor(Math.random() * foods.length)
    const randomFood = foods.splice(randomNum, 1)[0]
    mixedFoods.push(randomFood)
    this.randomiseFoods()
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
          console.log('same')
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
          console.log('different')
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

      <div className="grid-wrapper">

        <div className="row">{this.state.foods1.map(food => <Card food={food} handleClick={this.handleClick} />)}</div>
        <div className="row">{this.state.foods2.map(food => <Card food={food} handleClick={this.handleClick} />)}</div>
        <div className="row">{this.state.foods3.map(food => <Card food={food} handleClick={this.handleClick} />)}</div>
        <div className="row">{this.state.foods4.map(food => <Card food={food} handleClick={this.handleClick} />)}</div>

      </div>

    );

  }

}

export default App;