import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addNavigationHelpers, DrawerNavigator} from 'react-navigation';

import {
  MainFormScreen, ResultScreen, WelcomeScreen
} from '../screens';

export const AppNavigator = DrawerNavigator({
  WELCOME_SCREEN: {screen: WelcomeScreen},
  MAIN_FORM_SCREEN: {screen: MainFormScreen},
  RESULT_SCREEN: {screen: ResultScreen}
});

const AppWithNavigationState = ({dispatch, nav}) => (
  <AppNavigator navigation={addNavigationHelpers({dispatch, state: nav})}/>
);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
