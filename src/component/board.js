import React from 'react';
import Square from './square';
import '../App.css';



export const Board = (props) => {

    // const [squareBox, setSquareBox] = useState(Array(9).fill());
    // const [next, setNext] = useState(true);

    // const handleClick = (i) => {
    //   const squares = squareBox.slice();
    //   if (calculateWinner(squares) || squares[i]) {
    //     return;
    //   } else {
    //     squares[i] = next ? 'X' : 'O';
    //   setSquareBox(squares);
    //   setNext(!next);
    //   }
      
    // };
    // const handleClick = () => {
    //   alert('Hello')
    // }
    
    // function calculateWinner(squareBox) {
    //   const lines = [
    //     [0, 1, 2],
    //     [3, 4, 5],
    //     [6, 7, 8],
    //     [0, 3, 6],
    //     [1, 4, 7],
    //     [2, 5, 8],
    //     [0, 4, 8],
    //     [2, 4, 6],
    //   ];
    //   for (let i = 0; i < lines.length; i++) {
    //     const [a, b, c] = lines[i];
    //     if (squareBox[a] && squareBox[a] === squareBox[b] && squareBox[a] === squareBox[c]) {
    //       return squareBox[a];
    //     }
    //   }
    //   return null;
    // }
    
    const renderSquare= (i) => {   
      
     return <Square  value={props.value[i]} toogleClick={() => props.toogleClick(i)}/>   //passo al componente Square il dato "i"
    //  <Square value={squareBox[i]} toogleClick={()=>handleClick(i)}/>
    };

    // const winner = 
    //   calculateWinner(squareBox);
    //   let status;
    //   if (winner) {
    //     status = 'Winner : ' + winner;
    //   } else {
    //     status = 'Next Player : ' + 
    //     (next ? 'X' : 'O');
    //   }
    

  

    return (
      <div>
        <div className="status"></div>
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
    )
    
  };

  export default Board;