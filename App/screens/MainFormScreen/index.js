import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import I18n from '../../i18n';

import {AuthService} from '../../services';
import styles from './styles'
import {getResultDataAction} from '../../actions/formActions';

import {
  Text, View, TouchableOpacity,
  ScrollView, TextInput, Picker
} from 'react-native';
import Button from 'apsl-react-native-button';
import LinearGradient from 'react-native-linear-gradient';

import {
  RouteType, Passengers, Luggage, Comfort
} from '../../containers';

class MainFormScreen extends PureComponent {

  constructor(props) {
    super(props);
    this.navigation = props.navigation;

    this.authSrv = new AuthService();

    this.state = {language: 'one'};

    this.onGetResultData = this.onGetResultData.bind(this);
  }

  onGetResultData() {
    this.navigation.dispatch(getResultDataAction());
  }

  render() {
    return (
      <LinearGradient
        colors={['#ffffff', '#add8f4']}
        style={styles.container}
       >
        <View style={styles.main}>
          <View style={styles.mainRouteTypeSection}>
            <RouteType/>
          </View>
          <View style={styles.mainRouteOptionsSection}>
            <View style={styles.routeOptionsLeft}>
              <View style={styles.routeOptionsLeftTop}>
                <Passengers />
              </View>
              <View style={styles.routeOptionsLeftButtom}>
                <Luggage />
              </View>
            </View>
            <View style={styles.routeOptionsRight}>
              <Comfort />
            </View>
          </View>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.submitBtn}>
            <Button
              style={styles.submitBtn}
              onPressOut={this.onGetResultData}>
              <View style={styles.nestedTextStyle}>
                <Text style={styles.submitBtnInner}>
                  {I18n.t('GET_MY_QUOTE')}
                </Text>
              </View>
            </Button>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    );
  }

}

MainFormScreen.propTypes = {
  navigation: PropTypes.object.isRequired
};

MainFormScreen.navigationOptions = {
  title: I18n.t('MAIN_FORM_SCREEN_TITLE'),
};

export {MainFormScreen};
