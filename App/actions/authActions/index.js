import {createAction} from 'redux-actions';

import {LOG_IN, LOG_OUT} from "../../constants/authConstants";

export const loginAction = () => (
  createAction(LOG_IN)(null)
);

export const logoutAction = () => (
  createAction(LOG_OUT)(null)
);
