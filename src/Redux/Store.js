import { createStore } from "redux";
import { boardbasisReducer } from "./Reducer";
import { initialData } from "../Assets/BoardData";
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(boardbasisReducer, { boardBasis : initialData},composeWithDevTools());
