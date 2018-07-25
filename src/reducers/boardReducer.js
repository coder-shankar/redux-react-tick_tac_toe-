import { CREATE_BOARD } from "../actions/game";
import { SET_SYMBOL } from "../actions/game";
import { END_GAME } from "../actions/game";
import checkgameEnd from "../gameLogic/gameEnd";

const INITIAL_STATE_BOARD = {
  board: Array(9).fill({ index: "", symbol: "" }),
  player: "X",
  gameEnd: false
};

function setGrid(arr, index, symbol) {
  return arr.map((value, i) => {
    if (i === index) {
      return { ...value, index: i, symbol: symbol };
    }
    return value;
  });
}

const boardReducer = (state = INITIAL_STATE_BOARD, action) => {
  switch (action.type) {
    case CREATE_BOARD:
      return { ...state };

    case SET_SYMBOL:
      return {
        ...state,
        board: setGrid(state.board, action.payload.index, state.player),
        player: state.player == "X" ? "O" : "X"
      };

      break;
    case END_GAME:
      return {
        ...state,
        gameEnd: checkgameEnd(state.board)
      };
      break;

    default:
      return state;
  }
};

export default boardReducer;
