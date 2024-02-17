import Square from 'components/Square/Square.jsx'
import './BoardS.css'
function BoardS({handleClick, playable, squares, firstPlayer, pseudoBoard}) {
  return (
    <div className={`boardS ${playable ? 'playable' : 'nonplayable'}`}>
        {squares.map((square,i) =>
          <Square value = {square} playable = {playable} onSquareClick = { () => handleClick(i)} key = {i} firstPlayer={firstPlayer}/>
         )}
    </div>
  )
}

export default BoardS;
