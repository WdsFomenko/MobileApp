import {combineReducers} from 'redux';
import nav from './navReducer';
import auth from './authReducer';
import form from './formReducer';

const AppReducer = combineReducers({
  nav,
  auth,
  form
});

export default AppReducer;