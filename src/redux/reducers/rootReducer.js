import { combineReducers } from "redux";
import BurgerReducer from "./BurgerReducer";

//Store tổng

export const rootReducer = combineReducers({
    //Nơi chứa các reducer con
    BurgerReducer: BurgerReducer,
});
