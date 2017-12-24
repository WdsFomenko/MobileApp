import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import I18n from '../../i18n';

import {Text, View, Picker, TextInput} from 'react-native';

import {setPassengersNumberAction} from '../../actions/formActions';
import {NumericInput} from '../../containers';

import styles from './styles'

class Passengers extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {number: 50};
  }

  render() {
    return (
      <View style={styles.passengersContainer}>
        <View>
          <Text style={styles.passengersLabel}>
            {I18n.t('PASSENGERS')}
          </Text>
        </View>
        <View>
          <NumericInput
            value={this.props.passengersNumber}
            stepValue={1}
            minValue={10}
            maxValue={61}
            onValueChange={this.props.setPassengersNumber}
           />
        </View>
      </View>
    );
  }

}


Passengers.propTypes = {
  passengersNumber: PropTypes.number.isRequired,
  setPassengersNumber: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  passengersNumber: state.form.get('passengersNumber')
});

const mapDispatchToProps = dispatch => ({
  setPassengersNumber: (passengersNumber) => dispatch(setPassengersNumberAction(passengersNumber))
});

export default connect(mapStateToProps, mapDispatchToProps)(Passengers);
