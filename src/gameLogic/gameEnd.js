const checkgameEnd = board => {
  let winner = null;
  let flag = false;
  let tieFlag = true;
  var moves = [
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
  ];

  for (let i = 0; i < moves.length; i++) {
    if (
      board[moves[i][0]].symbol === board[moves[i][1]].symbol &&
      board[moves[i][1]].symbol === board[moves[i][2]].symbol &&
      board[moves[i][0]].symbol !== ""
    ) {
      winner = board[moves[i][0]].symbol;
      flag = true;
      break;
    }
  }

  if (!flag) {
    for (let j = 0; j < board.length; j++) {
      if (board[j].symbol == "") {
        tieFlag = false;
      }
    }
    if (tieFlag) {
      winner = "tie";
    }
  }

  return winner;
};

export default checkgameEnd;
