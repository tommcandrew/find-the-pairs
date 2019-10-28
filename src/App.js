import React from 'react';
import './App.css';
import pizza from './pizza.jpg'
import apple from './apple.png'
import coffee from './coffee.png'
import chicken from './chicken.png'
import spaghetti from './spaghetti.png'
import juice from './juice.png'
import cheese from './cheese.png'
import cookies from './cookies.png'

class App extends React.Component {

  state = {
    prevCell: ''
  }

  handleClick = (e) => {
    if (e.target.classList.contains('cell') && e.target.classList.contains('checking') === false && e.target.classList.contains('turned') === false) {
      e.target.classList.add('checking')
      const symbol = e.target.classList[1]
      if (this.state.prevCell === '') {
        this.setState(() => ({prevCell: symbol}))
      } else {
        if (symbol === this.state.prevCell) {
          console.log('same')
          const checkedCells = document.getElementsByClassName('checking')
          for (let i = 1; i >= 0; i--) {
            checkedCells[i].classList.add('turned')
            checkedCells[i].classList.remove('checking')
          }
          if (document.getElementsByClassName('turned').length === 16) {
            alert('game over')
          }
        } else {
          console.log('different')
          const checkedCells = document.getElementsByClassName('checking')
          setTimeout(() => {

            for (let i = 1; i >= 0; i--) {
              checkedCells[i].classList.remove('checking')
            }

          }, 1000);

        }
        this.setState(() => ({prevCell: ''}))
      }
    }
  }

  render() {

    return (

      <div className="grid-wrapper" onClick={this.handleClick}>

        <div className="row"><div className="cell apple"><img src={apple} /></div><div className="cell cookies"><img src={cookies} /></div><div className="cell pizza"><img src={pizza} /></div><div className="cell coffee"><img src={coffee} /></div></div>
        <div className="row"><div className="cell cookies"><img src={cookies} /></div><div className="cell cheese"><img src={cheese} /></div><div className="cell chicken"><img src={chicken} /></div><div className="cell cheese"><img src={cheese} /></div></div>
        <div className="row"><div className="cell coffee"><img src={coffee} /></div><div className="cell spaghetti"><img src={spaghetti} /></div><div className="cell apple"><img src={apple} /></div><div className="cell orange-juice"><img src={juice} /></div></div>
        <div className="row"><div className="cell chicken"><img src={chicken} /></div><div className="cell orange-juice"><img src={juice} /></div><div className="cell spaghetti"><img src={spaghetti} /></div><div className="cell pizza"><img src={pizza} /></div></div>


      </div>

    );

  }

}

export default App;