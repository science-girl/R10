import Store from "../redux/store";
import { Router } from "../navigation/routes";
import { NavigationActions } from "@expo/ex-navigation";

// @params: string navigatorUID of the current page and object event
// @returns: none
export const goToSession = event => {
  let currentNavigatorUID = Store.getState().navigation.currentNavigatorUID;
  Store.dispatch(
    NavigationActions.push(
      currentNavigatorUID,
      Router.getRoute("session", { event })
    )
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
