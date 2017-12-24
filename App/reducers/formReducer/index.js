import {
  SET_TRIP_TYPE, SET_PASSENGERS_NUMBER, SET_LUGGAGE, SET_COMFORT
} from '../../constants/formConstants';

import {initialFormState} from '../../store';

export default function form(state = initialFormState, action) {
  switch (action.type) {
    case SET_TRIP_TYPE:
      return state.set('tripType', action.payload.tripType);
    case SET_PASSENGERS_NUMBER:
      return state.set('passengersNumber', action.payload.passengersNumber);
    case SET_LUGGAGE:
      return state.set('luggage', action.payload.luggage);
    case SET_COMFORT:
      return state.set('comfort', action.payload.comfort);
    default:
      return state;
  }
}
