import React from 'react';
import './App.css';

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

        <div className="row"><div className="cell apple"></div><div className="cell cake"></div><div className="cell pizza"></div><div className="cell coffee"></div></div>
        <div className="row"><div className="cell cake"></div><div className="cell cheese"></div><div className="cell chicken"></div><div className="cell cheese"></div></div>
        <div className="row"><div className="cell coffee"></div><div className="cell spaghetti"></div><div className="cell apple"></div><div className="cell orange-juice"></div></div>
        <div className="row"><div className="cell chicken"></div><div className="cell orange-juice"></div><div className="cell spaghetti"></div><div className="cell pizza"></div></div>


      </div>

    );

  }

}

export default App;