import React from "react";
import GridItem from "../components/Grid";
const Board = ({
  board = [],
  end = false,
  addSymbol = f => f,
  player = "",
  endGame = f => f
}) => {
  return !end ? (
    <div className="Board">
      {board.map((board_grid, index) => (
        <GridItem
          index={index}
          board={board_grid}
          addSymbol={addSymbol}
          player={player}
          endGame={endGame}
        />
      ))}
    </div>
  ) : (
    <div> game over PLayer .. {end} won </div>
  );
};

export default Board;
