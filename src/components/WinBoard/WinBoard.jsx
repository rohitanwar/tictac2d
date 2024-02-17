import "./WinBoard.css";
import {CircleIcon, XIcon} from '@primer/octicons-react';

function WinBoard({player}) {
  return (
    <div className="winBoard">
    <div className="icon">
    {player == "X" ? <XIcon className="X"/> : <CircleIcon/> } </div>
    </div>
  )
}

export default WinBoard;
