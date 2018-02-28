import Store from "../redux/store";
import { Router } from "../navigation/routes";
import { NavigationActions } from "@expo/ex-navigation";

// @params: string navigatorUID of the current page and object event
// @returns: none
export const goToSession = (navigatorUID, event) => {
  //let navigatorUID = "schedule"; //Store.getState().navigation.currentNavigatorUID;
  Store.dispatch(
    NavigationActions.push(navigatorUID, Router.getRoute("session", { event }))
  );
};
