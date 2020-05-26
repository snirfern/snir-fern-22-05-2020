import { createStore } from "redux";
import reducer from "../redux/reducer";

const initialState = {
  data: [],
};

const store = createStore(reducer);

export default store;
