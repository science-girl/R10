import { NavigationReducer } from "@expo/ex-navigation";
import { combineReducers } from "redux";

const rootReducer =
  /* combineReducers and your normal create store things here! */
  combineReducers({
    navigation: NavigationReducer
    // other reducers
  });

export default rootReducer;
