import {
  FETCH_CITY,
  FETCH_CITY_FAILURE,
  FETCH_CITY_SUCCESS,
  FETCH_STATES,
  FETCH_STATES_FAILURE,
  FETCH_STATES_SUCCESS,
} from "./StateCity.type";

import { states, cities } from "../../Api/api";

export const getStates = () => (dispatch) => {
  try {
    dispatch({ type: FETCH_STATES });
    states()
      .then((res) => {
        dispatch({ type: FETCH_STATES_SUCCESS, payload: res.data });
      })
      .catch((error) => {
        dispatch({ type: FETCH_STATES_FAILURE, payload: error.message });
      });
  } catch (error) {
    console.log(error);
    dispatch({ type: FETCH_STATES_FAILURE, payload: error.message });
  }
};

export const getCities = (id) => (dispatch) => {
  try {
    const variable = {
      state_id: id,
    };
    dispatch({ type: FETCH_CITY });
    cities(variable)
      .then((res) => {
        dispatch({ type: FETCH_CITY_SUCCESS, payload: res.data });
      })
      .catch((error) => {
        dispatch({ type: FETCH_CITY_FAILURE, payload: error.message });
      });
  } catch (error) {
    console.log(error);
    dispatch({ type: FETCH_CITY_FAILURE, payload: error.message });
  }
};
