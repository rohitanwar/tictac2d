import BoardS from 'components/BoardS/BoardS.jsx'
import WinBoard from 'components/WinBoard/WinBoard.jsx'
import './Board.css'
function Board({handleClick, board, playable, firstPlayer, pseudoBoard}) {
  return (
    <div className="board">
        {board.map((square,i) =>
          pseudoBoard[i] == null ?
          <BoardS squares = {square} playable={playable.includes(i)} handleClick = {handleClick(i)} key={i} firstPlayer={firstPlayer}/>
          : <WinBoard player = {pseudoBoard[i] == 1 ? firstPlayer : firstPlayer == "X" ? "O" : "X"} key={i}/>
         )}
    </div>
  )
}

export default Board;
