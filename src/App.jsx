import React, { useState } from 'react';
import Board from './components/Board';

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const [winner, setWinner] = useState(null);

  const checkWinner = (b) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6],
    ];
    for (let [a, b1, c] of lines) {
      if (b[a] && b[a] === b[b1] && b[b1] === b[c]) return b[a];
    }
    return b.every(Boolean) ? 'Tie' : null;
  };

  const handleClick = (i) => {
    if (board[i] || winner) return;
    const newBoard = [...board];
    newBoard[i] = isXTurn ? 'X' : 'O';
    const result = checkWinner(newBoard);
    setBoard(newBoard);
    setIsXTurn(!isXTurn);
    setWinner(result);
  };

  const reset = () => {
    setBoard(Array(9).fill(null));
    setIsXTurn(true);
    setWinner(null);
  };

  return (
    <div className="game-container">
      <h1 className="title">Tic Tac Toe</h1>
      <div className="status">
        {winner ? (winner === 'Tie' ? "It's a Tie!" : `${winner} Wins!`) : `Turn: ${isXTurn ? 'X' : 'O'}`}
      </div>
      <Board board={board} onClick={handleClick} />
      <button onClick={reset} className="reset-button">Play Again</button>
    </div>
  );
};

export default App;
