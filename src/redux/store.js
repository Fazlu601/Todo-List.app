import { createStore } from "redux";
import rootReducer from "./rootReducer";

//Set store variabel, assign createStore and send reducer to argument store
const store = createStore(rootReducer);

export default store;
