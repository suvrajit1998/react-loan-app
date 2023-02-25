import { TaskAlt } from "@mui/icons-material";
import { Button, colors, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../Components/Header";

import { useSelector } from "react-redux";

export const LoanSubmitedSummaryPage = () => {
  const navigate = useNavigate();
  const { data } = useSelector((state) => state?.loanSubmitSummary);

  useEffect(() => {
    if (!data) {
      navigate("/");
    }
  }, [data]);

  return (
    <div
      style={{
        background: colors.grey[300],
        // height: "100vh",
        display: "flex",
        justifyContent: "center",
        padding: "2rem",
      }}
    >
      <Paper style={{ width: 600 }}>
        <Header title="Loan Summary" path="/loan-summary" />
        <Box height={20} />
        <Box
          display="flex"
          alignItems="center"
          flexDirection="column"
          padding="1.5rem"
        >
          <Typography
            style={{
              fontSize: "1rem",
              fontWeight: "bold",
              color: colors.green[300],
              textAlign: "center",
              width: 400,
            }}
          >
            Your loan application is being possessed. it will be dispatched
            within 30 min to 1 hour.
          </Typography>
          <Box height={10} />
          <TaskAlt style={{ fontSize: "10rem", color: colors.green[300] }} />
          <Box height={10} />
          <Typography style={{ fontSize: "1.5rem" }}>Loan Summary</Typography>
          <Box height={10} />
          <table style={{ borderCollapse: "collapse", width: "100%" }}>
            <tr>
              <td
                style={{
                  border: "1px solid #dddddd",
                  padding: "1rem",
                  textAlign: "center",
                }}
              >
                <Typography style={{ fontSize: "1.1rem", fontWeight: "bold" }}>
                  Rs. {data?.data?.loan_amount}
                </Typography>
                <Typography
                  style={{ fontSize: "1rem", color: colors.grey[500] }}
                >
                  Requested Loan Amount
                </Typography>
              </td>
            </tr>
          </table>
          <table style={{ borderCollapse: "collapse", width: "100%" }}>
            <tr>
              <td
                style={{
                  border: "1px solid #dddddd",
                  padding: "1rem",
                  textAlign: "center",
                }}
              >
                <Typography style={{ fontSize: "1.1rem", fontWeight: "bold" }}>
                  {data?.data?.interest_rate} % Flat
                </Typography>
                <Typography
                  style={{ fontSize: "1rem", color: colors.grey[500] }}
                >
                  Interest Rate
                </Typography>
              </td>
              <td
                style={{
                  border: "1px solid #dddddd",
                  padding: "1rem",
                  textAlign: "center",
                }}
              >
                <Typography style={{ fontSize: "1.1rem", fontWeight: "bold" }}>
                  Rs. {data?.data?.emi}
                </Typography>
                <Typography
                  style={{ fontSize: "1rem", color: colors.grey[500] }}
                >
                  EMI per month
                </Typography>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  border: "1px solid #dddddd",
                  padding: "1rem",
                  textAlign: "center",
                }}
              >
                <Typography style={{ fontSize: "1.1rem", fontWeight: "bold" }}>
                  Rs. {data?.data?.processing_fee_amount}
                </Typography>
                <Typography
                  style={{ fontSize: "1rem", color: colors.grey[500] }}
                >
                  Processing Fees
                </Typography>
              </td>
              <td
                style={{
                  border: "1px solid #dddddd",
                  padding: "1rem",
                  textAlign: "center",
                }}
              >
                <Typography style={{ fontSize: "1.1rem", fontWeight: "bold" }}>
                  {data?.data?.duration} Months
                </Typography>
                <Typography
                  style={{ fontSize: "1rem", color: colors.grey[500] }}
                >
                  Monthly Installments
                </Typography>
              </td>
            </tr>
          </table>
          <Box height={20} />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            style={{ color: "#ffffff" }}
            // disabled={loading}
            // type="submit"
          >
            Pay Now
          </Button>
        </Box>
      </Paper>
    </div>
  );
};
