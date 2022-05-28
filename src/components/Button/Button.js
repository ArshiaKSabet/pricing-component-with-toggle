import { Typography } from "@mui/material";
import React from "react";
import { Box } from "@mui/system";

const Button = ({ backgroundColor = {}, color = {} }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: "50px",
      }}
    >
      <Box
        sx={{
          backgroundColor: { backgroundColor },
          borderRadius: "4px",
          minWidth: "64px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            color: { color },
            fontFamily: "'Montserrat', sans-serif",
            border: "none",
            fontWeight: "500",
            fontSize: "0.875rem",
            lineHeight: "1.75",
            letterSpacing: "0.02857em",
            textTransform: "uppercase",
            padding: "5px 0px",
          }}
        >
          Learn More
        </Typography>
      </Box>
    </Box>
  );
};

export default Button;
