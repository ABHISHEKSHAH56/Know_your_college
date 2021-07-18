import { combineReducers } from "redux";
import post from "./posts";
const rootReducers = combineReducers({
        shop: post
});
export default rootReducers;