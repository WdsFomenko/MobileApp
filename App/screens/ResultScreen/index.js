import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, Text, View} from 'react-native';
import I18n from '../../i18n';
import TabView from 'react-native-scrollable-tab-view';
import Button from 'apsl-react-native-button';
import LinearGradient from 'react-native-linear-gradient';

import {ResultData, ResultMap} from '../../containers';

import {recalculateFormAction} from '../../actions/formActions';
import {AuthService} from '../../services';
import styles from './styles'

class ResultScreen extends PureComponent {

  constructor(props) {
    super(props);
    this.navigation = props.navigation;

    this.authSrv = new AuthService();

    this.state = {
      activeTab: 0
    }

    this.onGetResultMap = this.onGetResultMap.bind(this);
  }

  onGetResultMap() {
    this.navigation.dispatch(recalculateFormAction());
  }

  handleTabChange = ({i}) => {
    this.setState({activeTab: i});
  }

  render() {
    return (
      <LinearGradient
        colors={['#ffffff', '#add8f4']}
        style={styles.container}>
        <TabView
          tabBarUnderlineStyle={styles.tabBarStyle}
          tabBarTextStyle={styles.tabBarTextStyle}
          tabBarPosition="overlayTop"
          onChangeTab={this.handleTabChange}
        >
          <View style={styles.container} tabLabel='data'>
            <ResultData />
          </View>
          <View style={styles.container} tabLabel='map'>
            <ResultMap />
          </View>
        </TabView>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.submitBtn}>
            <Button
              style={styles.submitBtn}
              onPressOut={this.onGetResultMap}>
              <View style={styles.nestedTextStyle}>
                <Text style={styles.submitBtnInner}>
                  {I18n.t('RECALCULATE')}
                </Text>
              </View>
            </Button>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    );
  }
}

ResultScreen.propTypes = {
  navigation: PropTypes.object.isRequired
};

ResultScreen.navigationOptions = {
  title: I18n.t('RESULT_DATA_SCREEN_TITLE')
};

export {ResultScreen};
