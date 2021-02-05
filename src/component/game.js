import React, { useState } from 'react';
import Board from './board';
import {calculateWinner} from '../functionGame';
import '../App.css';

export const Game = () => {
    const [square, setSquare] = useState(0);
    const [next, setNext] = useState(true);
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const winner = calculateWinner(history[square]);
     console.log('SQUARE-->',square);
     console.log('history-->',history); 
     console.log('winner-->',winner);
    
    
    const handleClick = (i) => {
      const historyPoint = history.slice(0, square + 1);
      const current = historyPoint[square];
      const squares = [...current]
      if ( winner || squares[i]) return;
      squares[i] = next ? 'X' : 'O';
        console.log('HISTORYPOINT-->',historyPoint);
        setHistory([...historyPoint, squares]);
        setSquare(historyPoint.length );
        setNext(!next);
    };

    const moves = history.map((step, move)  => {
        const desc = move ? 'Go to move #' + move : 'Go to game start';
        return (
          <li key={move}>
            <button onClick={ () => jumpTo(move)}>{desc}</button>
          </li>
        )
    });

    const jumpTo = (step) => {
      setSquare(step);
      setNext(step % 2 === 0);
    }
    
    let status;
      if ( winner ) {
        status = 'Winner :  '  + winner;
      } else {
        status = 'Next player :  ' + (next ? 'X' : 'O');
      }
    

    return (
      <div className="game">
        <div className="game-board">
          
        </div>
        <div className="game-info">
          <div>{status}</div>
          <Board  value={history[square]} toogleClick={(i) => handleClick(i)}/>
          <ol>{moves}</ol>
        </div>
      </div>
    );

};



export default Game;



