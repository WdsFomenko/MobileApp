import {NavigationActions} from 'react-navigation';
import {AppNavigator} from '../../navigators/AppNavigator';
import {
  MAIN_FORM, RESULT_DATA, RESULT_MAP,
  WELCOME
} from '../../constants/formConstants';
import {
  MAIN_FORM_SCREEN, RESULT_SCREEN, WELCOME_SCREEN
} from "../../constants/navConstants";

import {initialNavState} from "../../store";

export default function nav(state = initialNavState, action) {
  let nextState;
  switch (action.type) {
    case WELCOME:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({routeName: WELCOME_SCREEN}),
        state
      );
      break;
    case MAIN_FORM:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({routeName: MAIN_FORM_SCREEN}),
        state
      );
      // nextState = AppNavigator.router.getStateForAction(
      //   NavigationActions.back(),
      //   state
      // );
      break;
    case RESULT_DATA:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({routeName: RESULT_SCREEN}),
        state
      );
      break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}
