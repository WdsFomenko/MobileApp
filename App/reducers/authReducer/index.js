import {LOG_IN, LOG_OUT} from '../../constants/authConstants';

import {initialAuthState} from '../../store';

export default function auth(state = initialAuthState, action) {
  switch (action.type) {
    case LOG_IN:
      return {...state, isLoggedIn: true};
    case LOG_OUT:
      return {...state, isLoggedIn: false};
    default:
      return state;
  }
}