import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import {Text, View, Button, TouchableOpacity} from 'react-native';

import styles from './styles'

export default class NumericInput extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      step: !!this.props.stepValue ? this.props.stepValue : 1,
      maxValue: !!this.props.maxValue ? this.props.maxValue : null,
      minValue: !!this.props.minValue ? this.props.minValue : null
    };


    this.onIncNumeric = this.onIncNumeric.bind(this);
    this.onDecNumeric = this.onDecNumeric.bind(this);
  }

  onIncNumeric(){
    if(this.state.maxValue && (this.props.value >= this.state.maxValue)) return;
    let result = this.props.value + this.state.step;
    this.props.onValueChange(result);
  }

  onDecNumeric(){
    if(this.state.minValue && (this.props.value <= this.state.minValue)) return;
    let result = this.props.value - this.state.step;
    this.props.onValueChange(result);
  }

  render() {
    return (
      <View style={styles.numericInputContainer}>
        <View  style={styles.decNumericBox}>
        <TouchableOpacity>
          <Button
            title='-'
            color='#006699'
            onPress={this.onDecNumeric}
          />
        </TouchableOpacity>
        </View>
        <View  style={styles.labelNumericBox}>
          <Text style={styles.labelNumericText}>
            {this.props.value}
          </Text>
        </View>
        <View  style={styles.incNumericBox}>
        <TouchableOpacity>
          <Button
            title='+'
            color='#006699'
            onPress={this.onIncNumeric}
          />
        </TouchableOpacity>
        </View>
      </View>
    );
  }

}


NumericInput.propTypes = {
  value: PropTypes.number.isRequired,
  stepValue: PropTypes.number,
  minValue: PropTypes.number,
  maxValue: PropTypes.number,
  onValueChange: PropTypes.func.isRequired
};
