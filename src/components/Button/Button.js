import { Typography } from "@mui/material";
import React from "react";
import { Box } from "@mui/system";

const Button = ({ backgroundColor = {}, color = {}, backgroundImage }) => {
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
          backgroundImage: backgroundImage,
          backgroundColor: { backgroundColor },
          borderRadius: "4px",
          width: "80%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
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
