import React from 'react'
import Game from './component/game';

import './App.css';

function App() {
  
  return (
    <div className="App">
      < Game />
    </div>
  );
};



export default App;
  //1 Componente Sqaure (figlio di Board)
  // function Square(props) {

    // const [click,setClick] = useState(null);
    // console.log(click);

  //   return (
  //     <div>
  //         <button className='square' 
  //                 onClick={props.toogleClick}>
  //                   {props.value}
  //         </button> {/*una volta passato il dato "i" lo faccio visualizare*/}
  //       </div>
  //   )
  // };
   //2 Componente Board (Genitore)
  // function Board() {

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
    
    // const renderSquare= (i) => {   // i = props

    //  return <Square value={props.squars[i]} toogleClick={()=> props.handleClick(i)}/>   //passo al componente Square il dato "i"
    // //  <Square value={squareBox[i]} toogleClick={()=>handleClick(i)}/>
    // };

    // const winner = 
    //   calculateWinner(squareBox);
    //   let status;
    //   if (winner) {
    //     status = 'Winner : ' + winner;
    //   } else {
    //     status = 'Next Player : ' + 
    //     (next ? 'X' : 'O');
    //   }
    

  

  //   return (
  //     <div>
  //       <div className="status">{status}</div>
  //       <div className="board-row">
  //         {renderSquare(0)}
  //         {renderSquare(1)}
  //         {renderSquare(2)}
  //       </div>
  //       <div className="board-row">
  //         {renderSquare(3)}
  //         {renderSquare(4)}
  //         {renderSquare(5)}
  //       </div>
  //       <div className="board-row">
  //         {renderSquare(6)}
  //         {renderSquare(7)}
  //         {renderSquare(8)}
  //       </div>
  //     </div>
  //   )
    
  // };
  // 3 componente Game
//   function Game(props) {
//     // const [squares, setSquares] = useState(Array(9).fill());
//     const [next, setNext] = useState(true);
//     const [history, setHistory] = useState([{squares:Array(9).fill(null)}]);

//     const handleClick = (i) => {
//       const history = history;
//       const current = history[history.length - 1];
//       const squares = current.squareBox.slice();
//         if (calculateWinner(squares) || squares[i]) {
//           return;
//         } 
//         squares[i] = next ? 'X' : 'O';
//           setHistory(history.concat([{squares:squares}]));
//           setNext(!next);
        
      
//     };
    
//     function calculateWinner(squareBox) {
//         const lines = [
//           [0, 1, 2],
//           [3, 4, 5],
//           [6, 7, 8],
//           [0, 3, 6],
//           [1, 4, 7],
//           [2, 5, 8],
//           [0, 4, 8],
//           [2, 4, 6],
//         ];
//         for (let i = 0; i < lines.length; i++) {
//           const [a, b, c] = lines[i];
//           if (squareBox[a] && squareBox[a] === squareBox[b] && squareBox[a] === squareBox[c]) {
//             return squareBox[a];
//           }
//         }
//         return null;
//       }

//     const current = history[history.length - 1];
//     const winner = calculateWinner(current.squares);
//       let status;
//       if ( winner ) {
//         status = 'Winner' + winner;
//       } else {
//         status = 'Next player: ' + (next ? 'X' : 'O');
//       }
    
    

//     return (
//       <div className="game">
//         <div className="game-board">
//           <Board squares={current.squares} toogleClick={ (i) => handleClick(i)}/>
//         </div>
//         <div className="game-info">
//           <div>{status}</div>
//           <ol>{/* TODO */}</ol>
//         </div>
//       </div>
//     );
//   }



