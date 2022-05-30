import * as React from "react";
import Switch from "@mui/material/Switch";
import { Box } from "@mui/material";

const SwitchButton = ({ onClick }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "15px",
        color: "#b3b5c6",
        fontWeight: "bold",
        letterSpacing: "0.5px",
      }}
    >
      Annually
      <Switch defaultChecked onClick={onClick} />
      Monthly
    </Box>
  );
};

export default SwitchButton;
