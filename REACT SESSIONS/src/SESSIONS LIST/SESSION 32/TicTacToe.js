import { useState } from "react";
import React from "react";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

export function TicTacToe() {
  const [board, setBoard] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  const [isXTurn, setIsXTurn] = useState(true);
  const handleClick = (index) => {
    if (!board[index] &&
      !winner /* untill game is not finished we recieve null here */) {
      //  as "!null" is true. it will only allow if it is null
      const boardCopy = [...board];
      boardCopy[index] = isXTurn ? "X" : "O";
      setBoard(boardCopy);
      setIsXTurn(!isXTurn);
    }
  };

  const decideWinner = (board) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];

      if (board[a] !==
        null /* to avoid winner at the start (as everything will be null so it become equal) */ &&
        board[a] === board[b] &&
        board[b] === board[c]) {
        return board[a];
      }
    }
    return null; /* returns null when game is not finished */
  };

  const winner = decideWinner(board);
  // ADDING CONFETTI
  const { width, height } = useWindowSize();

  return (
    <div className="fullBoard">
      {winner ? <Confetti width={width} height={height} /> : ""}
      <div className="board">
        {board.map((val, index) => (
          <GameBox val={val} onPlayerClick={() => handleClick(index)} />
        ))}
      </div>
      {winner ? <h2>WINNER IS {winner}</h2> : ""}
    </div>
  );
}
function GameBox({ onPlayerClick, val }) {
  const styles = { color: val === "O" ? "green" : "red" };
  return (
    <div onClick={onPlayerClick} className="gameBox">
      <span style={styles}>{val}</span>
    </div>
  );
}
