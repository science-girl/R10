import AboutContainer from "../scenes/About/AboutContainer";
import { createRouter } from "@expo/ex-navigation";
/**
 * This is where we map route names to route components. Any React
 * component can be a route, it only needs to have a static `route`
 * property defined on it, as in HomeScreen below
 */
export const Router = createRouter(() => ({
  about: () => AboutContainer
}));
