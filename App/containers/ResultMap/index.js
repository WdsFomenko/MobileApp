import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {TouchableOpacity, Text, View} from 'react-native';
import I18n from '../../i18n';
import TabView from 'react-native-scrollable-tab-view';
import Button from 'apsl-react-native-button';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles'

class ResultMap extends PureComponent {

  constructor(props) {
    super(props);
    this.navigation = props.navigation;
  }

  render() {
    return (
      <View
        style={styles.container}
       >
        <View style={styles.main}>

        </View>
      </View>
    );
  }

}


ResultMap.propTypes = {

};

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(null, null)(ResultMap);
