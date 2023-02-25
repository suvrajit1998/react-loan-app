import {
  FETCH_LOAN_AMOUNT,
  FETCH_LOAN_AMOUNT_FAILURE,
  FETCH_LOAN_AMOUNT_SUCCESS,
} from "./LoanAmount.type";

const initialState = {
  data: null,
  loading: false,
};

export default function loanAmountReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_LOAN_AMOUNT:
      return {
        ...state,
        loading: true,
      };
    case FETCH_LOAN_AMOUNT_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case FETCH_LOAN_AMOUNT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
