import { createStore } from "redux";
import reducer from "../reducers";

const init ={ tech :"React "};
export const store = createStore(reducer, init);