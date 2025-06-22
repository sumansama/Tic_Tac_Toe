import React from 'react';

const Board = ({ board, onClick }) => {
  return (
    <div className="board">
      {board.map((val, idx) => (
        <div key={idx} className="cell" onClick={() => onClick(idx)}>
          {val}
        </div>
      ))}
    </div>
  );
};

export default Board;
