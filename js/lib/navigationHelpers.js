import Store from "../redux/store";
import { Router } from "../navigation/routes";
import { NavigationActions } from "@expo/ex-navigation";

// @params: string navigatorUID of the current page and object event
// @returns: none
export const goToSession = (navigatorUID, event) => {
  Store.dispatch(
    NavigationActions.push(navigatorUID, Router.getRoute("session", { event }))
  );
};

// @params: object speakerData
// @returns: none
export const goToSpeaker = speakerData => {
  Store.dispatch(
    NavigationActions.push("root", Router.getRoute("speaker", { speakerData }))
  );
};

// @params: none
// @returns: none
export const closeSpeakerScene = () => {
  Store.dispatch(NavigationActions.pop("root"));
};
