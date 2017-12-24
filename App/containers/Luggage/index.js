import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import I18n from '../../i18n';

import {View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {CheckBox} from 'react-native-elements';
import {setLuggageAction} from '../../actions/formActions';

import styles from './styles'

class Luggage extends PureComponent {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.luggageInputContainer}>
        <CheckBox
          center
          containerStyle={styles.checkboxContainer}
          textStyle={styles.checkboxLabel}
          title={I18n.t('WITH_LUGGAGE')}
          checkedColor='#006699'
          checked={this.props.luggage}
          onPress={() => this.props.setLuggage(this.props.luggage)}
        />
      </View>
    );
  }

}


Luggage.propTypes = {
  luggage: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  luggage: state.form.get('luggage')
});

const mapDispatchToProps = dispatch => ({
  setLuggage: (luggage) => dispatch(setLuggageAction(!luggage))
});

export default connect(mapStateToProps, mapDispatchToProps)(Luggage);
