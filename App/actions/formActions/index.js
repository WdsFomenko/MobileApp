import {createAction} from 'redux-actions';

import {
  MAIN_FORM, RESULT_DATA, RESULT_MAP, SET_TRIP_TYPE, SET_PASSENGERS_NUMBER,
  SET_LUGGAGE, SET_COMFORT
} from "../../constants/formConstants";

export const getResultDataAction = () => (
  createAction(RESULT_DATA)(null)
);

export const recalculateFormAction = () => (
  createAction(MAIN_FORM)(null)
);

export const setTripTypeAction = (tripType) => (
  createAction(SET_TRIP_TYPE)({tripType})
);

export const setPassengersNumberAction = (passengersNumber) => (
  createAction(SET_PASSENGERS_NUMBER)({passengersNumber})
);

export const setLuggageAction = (luggage) => (
  createAction(SET_LUGGAGE)({luggage})
);

export const setComfortAction = (comfort) => (
  createAction(SET_COMFORT)({comfort})
);
