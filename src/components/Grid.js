import React from "react";

const GridItem = ({ board, index, addSymbol, endGame }) => {
  const valid = (index, board) => {
    if (board[index].symbol == "") {
      return true;
    }
    return false;
  };

  return (
    <div
      className="grid"
      onClick={e => {
        if (board.symbol === "") addSymbol(index, "X");
        endGame();
      }}
    >
      {board.symbol}
    </div>
  );
};

export default GridItem;
