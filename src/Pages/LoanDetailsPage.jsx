import {
  Button,
  Card,
  colors,
  IconButton,
  Paper,
  Slider,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { ArrowBack } from "@mui/icons-material";
import { Box } from "@mui/system";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchLoanSummary } from "../Api/api";
import {
  getLoanSummary,
  saveLoanAmountAndDuration,
} from "../Redux/LoanData/LoanData.action";
import { Header } from "../Components/Header";

export function LoanDetailsPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loanAmount } = useSelector((state) => state);
  const [loading, setLoading] = useState(false);
  const [loanAmountAndDuration, setLoanAmountAndDuration] = useState({
    loan_amount: loanAmount?.data?.data?.min_loan_amount,
    duration: loanAmount?.data?.data?.min_month,
  });

  const handleSubmit = () => {
    try {
      setLoading(true);
      dispatch(saveLoanAmountAndDuration(loanAmountAndDuration));
      fetchLoanSummary(loanAmountAndDuration)
        .then((res) => {
          dispatch(getLoanSummary(res.data));
          navigate("/loan-summary");
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        background: colors.grey[300],
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        padding: "2rem",
      }}
    >
      <Paper style={{ width: 600 }}>
        <Header title="Range of Loan" path="/" />

        <Card
          elevation={6}
          style={{
            padding: "1rem",
            background: `linear-gradient(to right, #fcba03, #fad778)`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "2rem",
            flexDirection: "column",
            color: "#ffffff",
            borderRadius: 20,
          }}
        >
          <Typography style={{ fontSize: "1.5rem" }}>RANGE OF LOAN</Typography>
          <Box height={10} />
          <Typography style={{ fontSize: "1.4rem" }}>
            {loanAmount?.data?.data?.min_loan_amount} -{" "}
            {loanAmount?.data?.data?.max_loan_amount}
          </Typography>
          <Box height={20} />
          <Typography style={{ fontSize: "1.5rem" }}>
            YOUR LOAN OFFERr ARE READY
          </Typography>
          <Box height={5} />
          <Typography style={{ fontSize: "1rem" }}>
            We Have Prepared the best loan offer for you
          </Typography>
        </Card>
        <Box margin="0 2rem 2rem 2rem">
          <Box height={20} />
          <Typography style={{ fontSize: ".9rem", fontWeight: "bold" }}>
            Required loan amount:
          </Typography>
          <Slider
            color="secondary"
            getAriaLabel={() => "Temperature range"}
            max={loanAmount?.data?.data?.max_loan_amount}
            min={loanAmount?.data?.data?.min_loan_amount}
            value={loanAmountAndDuration.loan_amount}
            onChange={(e, newValue) => {
              setLoanAmountAndDuration({
                ...loanAmountAndDuration,
                loan_amount: newValue,
              });
            }}
            valueLabelDisplay="auto"
            // getAriaValueText={valuetext}
          />
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography style={{ fontSize: ".9rem", fontWeight: "bold" }}>
              {loanAmount?.data?.data?.min_loan_amount}
            </Typography>
            <Typography style={{ fontSize: ".9rem", fontWeight: "bold" }}>
              {loanAmount?.data?.data?.max_loan_amount}
            </Typography>
          </Box>
          <Box height={4} />
          <Typography
            style={{
              fontSize: ".9rem",
              fontWeight: "bold",
              color: colors.grey[500],
            }}
          >
            Assuming annual interest rate{" "}
            {loanAmount?.data?.data?.interest_rate}%
          </Typography>
          <Box height={10} />
          <Typography style={{ fontSize: ".9rem", fontWeight: "bold" }}>
            Required: Month
          </Typography>
          <Slider
            color="secondary"
            getAriaLabel={() => "Temperature range"}
            max={loanAmount?.data?.data?.max_month}
            min={loanAmount?.data?.data?.min_month}
            value={loanAmountAndDuration.duration}
            onChange={(e, newValue) => {
              setLoanAmountAndDuration({
                ...loanAmountAndDuration,
                duration: newValue,
              });
            }}
            valueLabelDisplay="auto"
            // getAriaValueText={valuetext}
          />
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography style={{ fontSize: ".9rem", fontWeight: "bold" }}>
              {loanAmount?.data?.data?.min_month}
            </Typography>
            <Typography style={{ fontSize: ".9rem", fontWeight: "bold" }}>
              {loanAmount?.data?.data?.max_month}
            </Typography>
          </Box>
          <Box height={20} />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            style={{ color: "#ffffff" }}
            onClick={handleSubmit}
            disabled={loading}
          >
            Accept
          </Button>
        </Box>
      </Paper>
    </div>
  );
}
