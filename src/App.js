import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LoanDetailsPage } from "./Pages/LoanDetailsPage";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { ThemeProvider, createTheme, colors } from "@mui/material";

import { getLoanAmount } from "./Redux/LoanAmount/LoanAmount.action";
import { LoanSummaryPage } from "./Pages/LoanSummaryPage";
import { LoanSubmitedSummaryPage } from "./Pages/LoanSubmitedSummaryPage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLoanAmount());
  }, [dispatch]);

  const themes = createTheme({
    palette: {
      primary: {
        main: colors.green[500],
      },
      secondary: {
        main: colors.orange[800],
      },
    },
  });

  return (
    <div>
      <ThemeProvider theme={themes}>
        <Router>
          <Routes>
            <Route path="/" element={<LoanDetailsPage />} />
            <Route path="/loan-summary" element={<LoanSummaryPage />} />
            <Route
              path="/loan-submit-summary"
              element={<LoanSubmitedSummaryPage />}
            />
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
