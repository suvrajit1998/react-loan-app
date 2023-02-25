import axios from "axios";

const baseURL = "https://livedemoproject.com/instant-loan/api";

export const fetchLoanAmount = () => axios.post(`${baseURL}/get-loan-amounts`);

export const fetchLoanSummary = (body) =>
  axios.post(`${baseURL}/loan-calculate`, body);

export const loanSubmit = (body) => axios.post(`${baseURL}/loan-submit`, body);

export const states = () => axios.post(`${baseURL}/states`);

export const cities = (body) => axios.post(`${baseURL}/city`, body);
