import "./WinBoard.css";
import {CircleIcon, XIcon} from '@primer/octicons-react';

function WinBoard({player}) {
  return (
    <div className="winBoard">
    <div className="icon">
    {player == "X" ? <XIcon size={128} /> : <CircleIcon size={128}/> } </div>
    </div>
  )
}

export default WinBoard;
