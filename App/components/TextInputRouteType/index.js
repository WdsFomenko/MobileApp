import React from 'react';
import PropTypes from 'prop-types';
import {Text, View, Picker} from 'react-native';
import I18n from '../../i18n';
import Icon from 'react-native-fa-icons';

import {FormModelClass} from '../../models';

import styles from './styles';

const TextInputRouteType = (props) => (
  <View style={styles.routeType}>
    <View style={styles.routeTypeIcon}>
      <Text style={styles.routeIcon}>
        <Icon name='bus' allowFontScaling/>
      </Text>
    </View>
    <View style={styles.routeTypeWrapper}>
      <Text style={styles.routeTypeLabel}>
        {I18n.t('CHOOSE_YOUR_TYPE_OF_ROUTE')}
      </Text>
      <View style={styles.routeTypeContainer}>
        <Picker
          style={styles.routeTypeInput}
          selectedValue={props.tripType}
          onValueChange={(tripType) => props.setTripType(tripType)}>
          <Picker.Item
            style={styles.routeTypeOption}
            label={I18n.t('ONE_WAY')}
            value={FormModelClass.TYPE_ONE_WAY}
          />
          <Picker.Item
            style={styles.routeTypeOption}
            label={I18n.t('RETURN_TRIP')}
            value={FormModelClass.TYPE_SAME}
          />
          <Picker.Item
            style={styles.routeTypeOption}
            label={I18n.t('ROUND_TRIP')}
            value={FormModelClass.TYPE_ANOTHER}
          />
          <Picker.Item
            style={styles.routeTypeOption}
            label={I18n.t('SEVERAL_DAYS_TRIP')}
            value={FormModelClass.TYPE_SEVERAL}
          />
        </Picker>
      </View>
    </View>
  </View>
);

TextInputRouteType.propTypes = {
  tripType: PropTypes.string.isRequired,
  setTripType: PropTypes.func.isRequired,
};

export default TextInputRouteType;
