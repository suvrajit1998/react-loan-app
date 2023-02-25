import {
  FETCH_LOAN_SUMMARY,
  SAVE_LOAN_AMOUNT_AND_DURATION,
} from "./LoanData.type";

const initialState = {
  amountAndDuration: null,
  loanSummary: null,
};

export default function loanDataReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_LOAN_AMOUNT_AND_DURATION:
      return {
        ...state,
        amountAndDuration: action.payload,
      };
    case FETCH_LOAN_SUMMARY:
      return {
        ...state,
        loanSummary: action.payload,
      };
    default:
      return state;
  }
}
