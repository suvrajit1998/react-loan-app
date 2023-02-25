import { SAVE_LOAN_SUBMIT_SUMMARY } from "./LoanSubmitSummary.type";

const initialState = {
  data: null,
};

export default function loanSubmitSummaryReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_LOAN_SUBMIT_SUMMARY:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
}
