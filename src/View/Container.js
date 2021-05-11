import { connect } from "react-redux";
import { BoardView } from "./BoardBasisView";
import { boardBasisSelected } from "../Redux/Action";

const mapStateToProps = (state) => {
  return {
    boardBasis: state.boardBasis,
  };
};
const mapDispatchToProps = {
  boardBasisSelected,
};
export const BoardBasisContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardView);
