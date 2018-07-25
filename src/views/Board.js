import { connect } from "react-redux";

import { createBoard, setSymbol, endGame } from "../actions/game";

import BoardUI from "./BoardUI";

const mapStateToProps = state => {
  return {
    board: state.board,
    player: state.player,
    end: state.gameEnd
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addSymbol: (index, symbol) => dispatch(setSymbol(index, symbol)),
    endGame: () => dispatch(endGame())
  };
};

const EnhancedBoard = connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardUI);

export default EnhancedBoard;
