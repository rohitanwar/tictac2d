import BoardS from 'components/BoardS/BoardS.jsx'
import './Board.css'
function Board({xIsNext, board, playable}) {
  return (
    <div className="board">
        {board.map((square,i) =>
          <BoardS squares = {square} xIsNext = {xIsNext} playable = {playable == i || playable == -1}/>
         )}
    </div>
  )
}

export default Board;
