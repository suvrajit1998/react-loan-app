import {
  FETCH_CITY,
  FETCH_CITY_FAILURE,
  FETCH_CITY_SUCCESS,
  FETCH_STATES,
  FETCH_STATES_FAILURE,
  FETCH_STATES_SUCCESS,
} from "./StateCity.type";

const initialState = {
  states: null,
  stateLoading: false,
  cities: null,
  citiesLoading: false,
};

export default function stateCityReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CITY:
      return {
        ...state,
        citiesLoading: true,
      };
    case FETCH_CITY_SUCCESS:
      return {
        ...state,
        citiesLoading: false,
        cities: action.payload,
      };
    case FETCH_CITY_FAILURE:
      return {
        ...state,
        citiesLoading: false,
        error: action.payload,
      };
    case FETCH_STATES:
      return {
        ...state,
        stateLoading: true,
      };
    case FETCH_STATES_SUCCESS:
      return {
        ...state,
        stateLoading: false,
        states: action.payload,
      };
    case FETCH_STATES_FAILURE:
      return {
        ...state,
        stateLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
