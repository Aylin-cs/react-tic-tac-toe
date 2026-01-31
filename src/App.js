import React, { useMemo, useState } from "react";
import "./App.css";

const WIN_LINES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function calculateWinner(board) {
  for (const [a, b, c] of WIN_LINES) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return { winner: board[a], line: [a, b, c] };
    }
  }
  return null;
}

export default function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const result = useMemo(() => calculateWinner(board), [board]);
  const winner = result?.winner ?? null;
  const winningLine = result?.line ?? [];

  const isDraw = !winner && board.every((cell) => cell !== null);

  const status = winner
    ? `Winner: ${winner}`
    : isDraw
    ? "Draw!"
    : `Next turn: ${xIsNext ? "X" : "O"}`;

  function handleClick(i) {
    if (board[i] || winner || isDraw) return;

    const next = board.slice();
    next[i] = xIsNext ? "X" : "O";
    setBoard(next);
    setXIsNext((prev) => !prev);
  }

  function restart() {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  }

  return (
    <div className="page">
      <h1 className="title">Tic-Tac-Toe</h1>

      <div className="status">{status}</div>

      <div className="board" role="grid" aria-label="tic tac toe board">
        {board.map((cell, i) => (
          <button
            key={i}
            className={`cell ${winningLine.includes(i) ? "winning" : ""}`}
            onClick={() => handleClick(i)}
            aria-label={`cell ${i + 1}`}
          >
            {cell}
          </button>
        ))}
      </div>

      <button className="restart" onClick={restart}>
        Restart / New Game
      </button>
    </div>
  );
}

