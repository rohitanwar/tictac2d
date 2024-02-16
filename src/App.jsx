import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Board from 'components/Board/Board.jsx'

function App() {
  const [board, setBoard] = useState(Array(9).fill().map(
                                    () =>
                                        Array(9).fill("x")
                                    ));
  const [playable, setPlayable] = useState(-1);

  return (
    <div className="game">
      <Board xIsNext={true} board={board} playable={playable} />
    </div>
  )
}

export default App
