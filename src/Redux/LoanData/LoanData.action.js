import {
  FETCH_LOAN_SUMMARY,
  SAVE_LOAN_AMOUNT_AND_DURATION,
} from "./LoanData.type";

export const saveLoanAmountAndDuration = (data) => (dispatch) => {
  try {
    dispatch({ type: SAVE_LOAN_AMOUNT_AND_DURATION, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getLoanSummary = (data) => (dispatch) => {
  try {
    dispatch({ type: FETCH_LOAN_SUMMARY, payload: data });
  } catch (error) {
    console.log(error);
  }
};
