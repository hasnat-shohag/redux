import { createStore } from "redux";
import CounterReducer from "./services/reducers/CounterReducer";

const store = createStore(CounterReducer);

export default store;
