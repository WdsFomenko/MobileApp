import {AppNavigator} from '../../navigators/AppNavigator';
import {WELCOME_SCREEN} from "../../constants/navConstants";

const firstAction = AppNavigator.router.getActionForPathAndParams(WELCOME_SCREEN);
const tempNavState = AppNavigator.router.getStateForAction(firstAction);
const initialNavState = AppNavigator.router.getStateForAction(
  tempNavState
);

export {initialNavState};