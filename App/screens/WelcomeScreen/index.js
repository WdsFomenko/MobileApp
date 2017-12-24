import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import I18n from '../../i18n';

import styles from './styles'
import {recalculateFormAction} from '../../actions/formActions';

import {Text, Image, View, TouchableOpacity} from 'react-native';
import Button from 'apsl-react-native-button';
import LinearGradient from 'react-native-linear-gradient';


class WelcomeScreen extends PureComponent {

  constructor(props) {
    super(props);
    this.navigation = props.navigation;

    this.onRecalculateForm = this.onRecalculateForm.bind(this);
  }

  onRecalculateForm() {
    this.navigation.dispatch(recalculateFormAction());
  }

  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={['#006699', '#0099ff']}
          style={styles.header}>
          <View style={styles.headerSlogan}>
            <Text style={styles.sloganLabel}>
              {I18n.t('WELCOME_PAGE_SLOGAN')}
            </Text>
          </View>
          <View style={styles.headerSubSlogan}>
            <Text style={styles.subSloganLabel}>
              {I18n.t('WELCOME_PAGE_SUB_SLOGAN')}
            </Text>
          </View>
        </LinearGradient>
        <View style={styles.main}>
          <Image
            style={styles.welcomeImage}
            source={require('../../assets/images/bus_get_started.jpg')}/>
        </View>
        <LinearGradient
          colors={['#006699', '#0099ff']}
          style={styles.footer}>
          <TouchableOpacity>
            <Button
              style={styles.submitBtn}
              onPress={this.onRecalculateForm}>
              <View style={styles.nestedTextStyle}>
                <Text style={styles.submitBtnInner}>
                  {I18n.t('GET_STARTED')}
                </Text>
              </View>
            </Button>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    );
  }

}

WelcomeScreen.propTypes = {
  navigation: PropTypes.object.isRequired
};

WelcomeScreen.navigationOptions = {
  title: I18n.t('WELCOME_SCREEN_TITLE')
};

export {WelcomeScreen};
