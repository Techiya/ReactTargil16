import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import { reset } from 'yargs';

const divStyle = {
    width: "20px",
    height: "20px",
    background: "gray",
    margin: "10px",
    display: "inline-block",
    verticalAlign: "top"
}

const redDivStyle = {
    ...divStyle,
    background: "red"
}

function Game (props) {
    const { reset, setScore } = props;
    const [ redIndex, setRedIndex ] = useState(0);

    function playASquare(e, index) {
        const squareScore = index === redIndex ? 10 : -5 ;
        setScore(old => old+squareScore)
        setRedIndex(_.random(9));
    }

    function newGame() {
        reset();
        setRedIndex(_.random(9));
    }

    return (
    <div>
        <p>Red Square Game</p>
        <button onClick={newGame}>New Game</button>
        {_.range(10).map((item, index) => 
            (<div style={index === redIndex ? redDivStyle : divStyle} onClick={e => playASquare(e, index)}/>))
        }
    </div>);
}

function ScoreDisplay (props) {
    const {score} = props;
    return (
        <div>
            <p>The score is {score}</p>
        </div>
    );
}

const App = () => {
    const [ score, setScore ] = useState(0);

    function clear() {
        setScore(0);
    }

    return (
        <div className="App">
            <Game reset={clear} setScore={setScore}/>
            <ScoreDisplay score={score} />
        </div>
    )
}

// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
