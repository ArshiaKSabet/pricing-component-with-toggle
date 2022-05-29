import "./App.css";
import { Box, Typography } from "@mui/material";
import FrontCard from "./components/FrontCard/FrontCard";
import SwitchButton from "./components/Switch/SwitchButton";
import { useState } from "react";
import InfoCard from "./components/InfoCard/InfoCard";
import BottomSvg from "./components/SVG/BottomSvg";
import TopSvg from "./components/SVG/TopSvg";

function App() {
  const [pricePlan, setPricePlan] = useState(true);
  const togglePrice = () => {
    if (pricePlan) {
      setPricePlan(false);
    } else setPricePlan(true);
  };

  const monthly = [19.99, 24.99, 39.99];
  const annually = [199.99, 249.99, 399.99];
  let price = pricePlan === true ? monthly : annually;

  return (
    <Box className="App">
      <TopSvg />
      <Box sx={{ marginTop: "50px" }}>
        <Typography
          sx={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "30px",
            color: "#6d708d",
            marginBottom: "20px",
          }}
        >
          Our Pricing
        </Typography>
        <SwitchButton onClick={() => togglePrice()} />
      </Box>
      <Box
        id="card-container"
        display="flex"
        justifyContent={"center"}
        sx={{
          maxWidth: "1280px",
          marginTop: "35px",
          marginInline: "auto",
        }}
      >
        <InfoCard
          boxShadow="-22px 0px 50px 30px rgba(0,0,0,0.08)"
          type="Basic"
          price={"$" + price[0]}
          storage={"500 GB Storage"}
          users={"2 Users Allowed"}
          send={"Send up to 3 GB"}
        />
        <FrontCard
          type="Professional"
          price={"$" + price[1]}
          storage={"1 TB Storage"}
          users={"5 Users Allowed"}
          send={"Send up to 10 GB"}
        />
        <InfoCard
          boxShadow="22px 0px 50px 30px rgba(0,0,0,0.08)"
          type="Master"
          price={"$" + price[2]}
          storage={"2 TB Storage"}
          users={"10 Users Allowed"}
          send={"Send up to 20 GB"}
        />
        <BottomSvg />
      </Box>
    </Box>
  );
}

export default App;
