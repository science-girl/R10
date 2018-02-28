import { NavigationReducer } from "@expo/ex-navigation";
import { combineReducers } from "redux";
import aboutReducer from "./modules/about";
import scheduleReducer from "./modules/schedule";

const rootReducer =
  /* combineReducers and your normal create store things here! */
  combineReducers({
    navigation: NavigationReducer,
    about: aboutReducer,
    schedule: scheduleReducer
    // other reducers
  });

export default rootReducer;
