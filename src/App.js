import React from 'react';
import './App.css';
import pizza from './pizza.png'
import apple from './apple.png'
import coffee from './coffee.png'
import chicken from './chicken.png'
import spaghetti from './spaghetti.png'
import juice from './juice.png'
import cheese from './cheese.png'
import cookies from './cookies.png'

class App extends React.Component {

  state = {
    prevCard: ''
  }

  componentDidMount() {
    const cards = document.getElementsByClassName('card')
    for (let i = 0; i < cards.length; i++) {
      cards[i].addEventListener('click', this.handleClick)
    }
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

        <div className="row">

          <div className="card apple">
            <div className="card-inner">
              <div className="card-front">
              </div>
              <div className="card-back">
                <img src={apple} />
              </div>
            </div>
          </div>

          <div className="card cookies">
            <div className="card-inner">
              <div className="card-front">
              </div>
              <div className="card-back">
                <img src={cookies} />
              </div>
            </div>
          </div>

          <div className="card pizza">
            <div className="card-inner">
              <div className="card-front">
              </div>
              <div className="card-back">
                <img src={pizza} />
              </div>
            </div>
          </div>

          <div className="card coffee">
            <div className="card-inner">
              <div className="card-front">
              </div>
              <div className="card-back">
                <img src={coffee} />
              </div>
            </div>
          </div>

        </div>

        <div className="row">

          <div className="card cookies">
            <div className="card-inner">
              <div className="card-front">
              </div>
              <div className="card-back">
                <img src={cookies} />
              </div>
            </div>
          </div>

          <div className="card cheese">
            <div className="card-inner">
              <div className="card-front">
              </div>
              <div className="card-back">
                <img src={cheese} />
              </div>
            </div>
          </div>

          <div className="card chicken">
            <div className="card-inner">
              <div className="card-front">
              </div>
              <div className="card-back">
                <img src={chicken} />
              </div>
            </div>
          </div>

          <div className="card cheese">
            <div className="card-inner">
              <div className="card-front">
              </div>
              <div className="card-back">
                <img src={cheese} />
              </div>
            </div>
          </div>

        </div>

        <div className="row">

          <div className="card coffee">
            <div className="card-inner">
              <div className="card-front">
              </div>
              <div className="card-back">
                <img src={coffee} />
              </div>
            </div>
          </div>

          <div className="card spaghetti">
            <div className="card-inner">
              <div className="card-front">
              </div>
              <div className="card-back">
                <img src={spaghetti} />
              </div>
            </div>
          </div>

          <div className="card apple">
            <div className="card-inner">
              <div className="card-front">
              </div>
              <div className="card-back">
                <img src={apple} />
              </div>
            </div>
          </div>

          <div className="card juice">
            <div className="card-inner">
              <div className="card-front">
              </div>
              <div className="card-back">
                <img src={juice} />
              </div>
            </div>
          </div>

        </div>

        <div className="row">

          <div className="card chicken">
            <div className="card-inner">
              <div className="card-front">
              </div>
              <div className="card-back">
                <img src={chicken} />
              </div>
            </div>
          </div>

          <div className="card juice">
            <div className="card-inner">
              <div className="card-front">
              </div>
              <div className="card-back">
                <img src={juice} />
              </div>
            </div>
          </div>

          <div className="card spaghetti">
            <div className="card-inner">
              <div className="card-front">
              </div>
              <div className="card-back">
                <img src={spaghetti} />
              </div>
            </div>
          </div>

          <div className="card pizza">
            <div className="card-inner">
              <div className="card-front">
              </div>
              <div className="card-back">
                <img src={pizza} />
              </div>
            </div>
          </div>

        </div>

      </div>

    );

  }

}

export default App;
