export const BOARD_BASIS_SELECTED = "BOARD_BASIS_SELECTED";

export const boardBasisSelected = (id) => {
    return ({
        type: BOARD_BASIS_SELECTED,
        id
    })
};