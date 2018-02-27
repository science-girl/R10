import { NavigationReducer } from "@expo/ex-navigation";
import { combineReducers } from "redux";
import aboutReducer from "./modules/about";

const rootReducer =
  /* combineReducers and your normal create store things here! */
  combineReducers({
    navigation: NavigationReducer,
    about: aboutReducer
    // other reducers
  });

export default rootReducer;
