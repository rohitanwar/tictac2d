import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Board from 'components/Board/Board.jsx'

function App() {
  const [board, setBoard] = useState(Array(9).fill().map(
                                    () =>
                                        Array(9).fill(null)
                                    ));

  const [pseudoBoard, setPseudoBoard] = useState(Array(9).fill(null))

  const [playable, setPlayable] = useState([0,1,2,3,4,5,6,7,8]);

  const [player, setPlayer] = useState(1);
  const [firstPlayer, setFirstPlayer] = useState("X");


  return (
    <div className="game">
      <Board handleClick={handleClick(board,setBoard,pseudoBoard,setPseudoBoard,player,setPlayer, playable, setPlayable)}
            pseudoBoard={pseudoBoard}
            board={board}
            playable={playable}
            firstPlayer = {firstPlayer}
      />
    </div>
  )
}

let handleClick = (board,setBoard,pseudoBoard,setPseudoBoard,player,setPlayer,playable, setPlayable) => i => j => {
  if (board[i][j] == null && pseudoBoard[i] == null && playable.includes(i)) {
    updateBoard(board,setBoard,player)(i)(j);
    updatePseudoBoard(board,setPseudoBoard);
    setPlayer(player*-1);
    setPlayable([j]);

  }

}

let updateBoard = (board,setBoard,player) => i => j => {
  let newBoard = board.map((el,id) => i != id ? [...el] : el.map((op,ids) => ids != j ? op : player))
  setBoard(newBoard);
}

function checkWin(board, player) {
  let win = false;
  for (let i = 0; i < 3; i++){
    // Columns
    if(board[i] == player && board[i+3] == player && board[i+6] == player) win = true;
    // Rows
    if(board[3*i] == player && board[3*i+1] == player && board[3*i+2] == player) win = true;
  }
  // Major Diagonal
  if(board[0] == player && board[4] == player && board[8] == player) win = true;
  // Minor Diagonal
  if(board[6] == player && board[4] == player && board[2] == player) win = true;

  return win;
}

let updatePseudoBoard = (boardS,setPseudoBoard) => {
  let newPseudoBoardState = boardS.map((board,i) => checkWin(board, -1) ? -1 : checkWin(board, 1) ? 1 : null);
  setPseudoBoard(newPseudoBoardState);
}

export default App
