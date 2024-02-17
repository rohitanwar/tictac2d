import './Sqaure.css'

function Square({value, playable, onSquareClick, firstPlayer}) {
  return (
    <button className="square" onClick = {onSquareClick}>
      {value == 1 ? firstPlayer : value == -1 ? (firstPlayer == "X" ? "O" : "X") : null}
    </button>
  )
}

export default Square;
