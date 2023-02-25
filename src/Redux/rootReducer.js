import { combineReducers } from "redux";
import loanAmountReducer from "./LoanAmount/LoanAmount.reducer";
import loanDataReducer from "./LoanData/LoanData.reducer";
import loanSubmitSummaryReducer from "./LoanSubmitSummary/LoanSubmitSummary.reducer";
import stateCityReducer from "./State&City/StateCity.reducer";

export default combineReducers({
  loanAmount: loanAmountReducer,
  loanData: loanDataReducer,
  loanSubmitSummary: loanSubmitSummaryReducer,
  stateCity: stateCityReducer,
});
