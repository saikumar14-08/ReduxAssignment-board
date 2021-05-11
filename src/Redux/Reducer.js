import { BOARD_BASIS_SELECTED } from "./Action";

export const boardbasisReducer = (state, action) => {
  if (action.type === BOARD_BASIS_SELECTED) {
    const toBeSelectedIndex = state.boardBasis.findIndex(
      (board) => board.id === action.id
    );
    const selectedIndex = state.boardBasis.findIndex(
      (board) => board.selected === true
    );
    const outputArray = [...state.boardBasis];
    outputArray[selectedIndex].selected = false;
    outputArray[toBeSelectedIndex].selected = true;
    return { ...state, boardBasis: outputArray };
  }
  return state;
};
