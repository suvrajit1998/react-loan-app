import { SAVE_LOAN_SUBMIT_SUMMARY } from "./LoanSubmitSummary.type";

export const saveLoanSubmitSummary = (data) => (dispatch) => {
  try {
    dispatch({ type: SAVE_LOAN_SUBMIT_SUMMARY, payload: data });
  } catch (error) {
    console.log(error);
  }
};
