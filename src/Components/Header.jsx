import { ArrowBack } from "@mui/icons-material";
import { Box, Card, colors, IconButton, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export function Header({ path = "/", title = "Range of Loan" }) {
  const navigate = useNavigate();

  return (
    <Card style={{ padding: ".8rem", backgroundColor: colors.green[500] }}>
      <Box display="flex">
        <IconButton
          onClick={() => {
            navigate(path);
          }}
        >
          <ArrowBack style={{ color: "#ffffff" }} />
        </IconButton>
        <Box width="100%">
          <Typography
            style={{
              textAlign: "center",
              color: "#ffffff",
              fontSize: "1.4rem",
              marginRight: "2.5rem",
              fontWeight: "bold",
            }}
          >
            {title}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
}
