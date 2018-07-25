export const SET_SYMBOL = "SET_SYMBOL";
export const CREATE_BOARD = "CREATE_BOARD";
export const END_GAME = "END_GAME";
export function setSymbol(index, symbol) {
  return {
    type: SET_SYMBOL,
    payload: {
      index,
      symbol
    }
  };
}

export function createBoard() {
  return {
    type: CREATE_BOARD
  };
}
export function endGame() {
  return {
    type: END_GAME
  };
}
