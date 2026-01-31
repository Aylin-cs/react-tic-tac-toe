import { useState } from "react";
function App() {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [isXTurn, setIsXTurn] = useState(true);
  const handleClick = (i) => {
    if (board[i] !== "") return;

    const newBoard = [...board];
    newBoard[i] = isXTurn ? "X" : "O";
    setBoard(newBoard);
    setIsXTurn(!isXTurn);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Tic Tac Toe</h1>
      <p>Next turn: {isXTurn ? "X" : "O"}</p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 100px)",
          gap: "10px",
          justifyContent: "center",
          marginTop: "30px",
        }}
      >
        <button
          style={{ width: "100px", height: "100px", fontSize: "32px" }}
          onClick={() => handleClick(0)}
        >
          {board[0]}
        </button>
        <button
          style={{ width: "100px", height: "100px", fontSize: "32px" }}
          onClick={() => handleClick(1)}
        >
          {board[1]}
        </button>
        <button
          style={{ width: "100px", height: "100px", fontSize: "32px" }}
          onClick={() => handleClick(2)}
        >
          {board[2]}
        </button>

        <button
          style={{ width: "100px", height: "100px", fontSize: "32px" }}
          onClick={() => handleClick(3)}
        >
          {board[3]}
        </button>
        <button
          style={{ width: "100px", height: "100px", fontSize: "32px" }}
          onClick={() => handleClick(4)}
        >
          {board[4]}
        </button>
        <button
          style={{ width: "100px", height: "100px", fontSize: "32px" }}
          onClick={() => handleClick(5)}
        >
          {board[5]}
        </button>

        <button
          style={{ width: "100px", height: "100px", fontSize: "32px" }}
          onClick={() => handleClick(6)}
        >
          {board[6]}
        </button>
        <button
          style={{ width: "100px", height: "100px", fontSize: "32px" }}
          onClick={() => handleClick(7)}
        >
          {board[7]}
        </button>
        <button
          style={{ width: "100px", height: "100px", fontSize: "32px" }}
          onClick={() => handleClick(8)}
        >
          {board[8]}
        </button>
      </div>
    </div>
  );
}
export default App;
