import {
  FETCH_LOAN_AMOUNT,
  FETCH_LOAN_AMOUNT_FAILURE,
  FETCH_LOAN_AMOUNT_SUCCESS,
} from "./LoanAmount.type";

import { fetchLoanAmount } from "../../Api/api";

export const getLoanAmount = () => (dispatch) => {
  try {
    dispatch({ type: FETCH_LOAN_AMOUNT });
    fetchLoanAmount()
      .then((res) => {
        dispatch({ type: FETCH_LOAN_AMOUNT_SUCCESS, payload: res.data });
      })
      .catch((error) => {
        dispatch({ type: FETCH_LOAN_AMOUNT_FAILURE, payload: error.message });
      });
  } catch (error) {
    console.log(error);
  }
};
