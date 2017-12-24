import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import I18n from '../../i18n';

import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {CheckBox} from 'react-native-elements';
import {setComfortAction} from '../../actions/formActions';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button';

import {FormModelClass} from '../../models';

import styles from './styles'

class Comfort extends PureComponent {

  constructor(props) {
    super(props);
  }

  getSelectedIndex(comfort){
    switch (comfort) {
      case FormModelClass.COMFORT_STANDART:
        return 0;
      case FormModelClass.COMFORT_EXCURSION:
        return 1;
      case FormModelClass.COMFORT_TOURIST:
        return 2;
      default:
        return 0;
    }
  }

  render() {
    return (
      <View style={styles.comfortContainer}>
        <View style={styles.comfortTop}>
          <View style={styles.comfortTitle}>
              <Text>
                {I18n.t('COMFORT')}
              </Text>
          </View>
          <View style={styles.comfortTitleIcon}>
            <TouchableOpacity>
              <Icon
                name='info-circle'
                color='#006699'
                size={22}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.comfortButtom}>
        <RadioGroup
          selectedIndex={this.getSelectedIndex(this.props.comfort)}
          onSelect = {(index, value) => this.props.setComfort(value)}
          >
          <RadioButton
            value={FormModelClass.COMFORT_STANDART}
            color='#006699'
           >
            <Text>
              {I18n.t('STANDART')}
            </Text>
          </RadioButton>

          <RadioButton
            value={FormModelClass.COMFORT_EXCURSION}
            color='#006699'
          >
            <Text>
              {I18n.t('EXCURSION')}
            </Text>
          </RadioButton>

          <RadioButton
            value={FormModelClass.COMFORT_TOURIST}
            color='#006699'
          >
            <Text>
              {I18n.t('TOURIST')}
            </Text>
          </RadioButton>
        </RadioGroup>
        </View>
      </View>
    );
  }

}


Comfort.propTypes = {
  comfort: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  comfort: state.form.get('comfort')
});

const mapDispatchToProps = dispatch => ({
  setComfort: (comfort) => dispatch(setComfortAction(comfort))
});

export default connect(mapStateToProps, mapDispatchToProps)(Comfort);
