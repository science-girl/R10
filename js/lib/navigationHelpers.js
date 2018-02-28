export const goToSession = (navigatorUID, event) => {
  let navigatorUID = "schedule"; //Store.getState().navigation.currentNavigatorUID;
  Store.dispatch(
    NavigationActions.push(navigatorUID, Router.getRoute("session", { event }))
  );
};
