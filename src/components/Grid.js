import React from 'react'
import Card from './Card'
import './styles/Grid.css'

const Grid = (props) => {
    return (
        <div className="grid-wrapper">

            <div className="row">{props.foods1.map((food, i) => <Card food={food} handleClick={props.handleClick} key={`row1-cell${i}`} />)}</div>
            <div className="row">{props.foods2.map((food, i) => <Card food={food} handleClick={props.handleClick} key={`row2-cell${i}`} />)}</div>
            <div className="row">{props.foods3.map((food, i) => <Card food={food} handleClick={props.handleClick} key={`row3-cell${i}`} />)}</div>
            <div className="row">{props.foods4.map((food, i) => <Card food={food} handleClick={props.handleClick} key={`row4-cell${i}`} />)}</div>

        </div>
    )
}

export default Grid