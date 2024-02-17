import './Sqaure.css'
import {CircleIcon, XIcon} from '@primer/octicons-react';

function Square({value, playable, onSquareClick, firstPlayer}) {
  return (
    <button className="square" onClick = {onSquareClick}>
      {value == 1 ? (firstPlayer == "X" ? <XIcon /> : <CircleIcon />) : value == -1 ? (firstPlayer == "X" ? <CircleIcon /> : <XIcon />) : null}
    </button>
  )
}

export default Square;
