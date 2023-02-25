import React, { useEffect } from "react";
import { colors, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { EligibityForm } from "../Components/EligibityForm";
import { Header } from "../Components/Header";

export function LoanSummaryPage() {
  const navigate = useNavigate();
  const { loanSummary } = useSelector((state) => state?.loanData);

  useEffect(() => {
    if (!loanSummary) {
      navigate("/");
    }
  }, [loanSummary]);

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
        <Header title="Easy Loan" path="/" />

        <Box height={10} />
        <Box
          display="flex"
          alignItems="center"
          margin="0 2rem 2rem 2rem"
          flexDirection="column"
        >
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
                  Rs. {loanSummary?.data?.loan_amount}
                </Typography>
                <Typography
                  style={{ fontSize: "1rem", color: colors.grey[500] }}
                >
                  Loan Amount
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
                  {loanSummary?.data?.interest_rate} % Flat
                </Typography>
                <Typography
                  style={{ fontSize: "1rem", color: colors.grey[500] }}
                >
                  Interest Rate
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
                  Rs. {loanSummary?.data?.processing_fee}
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
                  {loanSummary?.data?.duration}
                </Typography>
                <Typography
                  style={{ fontSize: "1rem", color: colors.grey[500] }}
                >
                  Month
                </Typography>
              </td>
            </tr>
          </table>
          <Box height={15} />
          <Typography style={{ fontSize: "1.5rem" }}>
            Easy Business Loan
          </Typography>
          <Box height={15} />
          <Typography
            style={{
              fontSize: "1rem",
              color: colors.grey[500],
              textAlign: "center",
              width: 400,
            }}
          >
            Provide the details below to get started with your business check
            eligibility application
          </Typography>
          <Box height={15} />
          <EligibityForm />
        </Box>
      </Paper>
    </div>
  );
}
