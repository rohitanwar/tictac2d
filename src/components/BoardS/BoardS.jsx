import Square from 'components/Square/Square.jsx'
import './BoardS.css'
function BoardS({playable, xIsNext, squares}) {
  return (
    <div className="boardS">
        {squares.map((square,i) =>
          <Square value = {square} onSquareClick = {null} key = {i} />
         )}
    </div>
  )
}

export default BoardS;
