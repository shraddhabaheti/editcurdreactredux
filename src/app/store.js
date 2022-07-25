import { legacy_createStore } from "redux";
import { rootReducer } from "../reducer/rootReducers";

const Store=legacy_createStore(rootReducer)
export default Store;