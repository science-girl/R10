import AboutContainer from "../scenes/About/AboutContainer";
// import FavesContainer from "../scenes/About/FavesContainer";
import ScheduleContainer from "../scenes/Schedule/ScheduleContainer";
// import SessionContainer from "../scenes/About/SessionContainer";
// import SpeakerContainer from "../scenes/About/SpeakerContainer";
import NavigationLayout from "./NavigationLayout";
import { createRouter } from "@expo/ex-navigation";
/**
 * This is where we map route names to route components. Any React
 * component can be a route, it only needs to have a static `route`
 * property defined on it, as in HomeScreen below
 */
export const Router = createRouter(() => ({
  about: () => AboutContainer,
  layout: () => NavigationLayout,
  // faves: () => FavesContainer,
  schedule: () => ScheduleContainer
  // session: () => SessionContainer,
  // speaker: () => SpeakerContainer
}));
