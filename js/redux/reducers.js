import { NavigationReducer } from "@expo/ex-navigation";
import { combineReducers } from "redux";
import aboutReducer from "./modules/about";
import scheduleReducer from "./modules/schedule";
import speakerReducer from "./modules/speaker";
import favesReducer from "./modules/faves";

const rootReducer =
  /* combineReducers and your normal create store things here! */
  combineReducers({
    navigation: NavigationReducer,
    about: aboutReducer,
    schedule: scheduleReducer,
    speaker: speakerReducer,
    faves: favesReducer
  });

export default rootReducer;
