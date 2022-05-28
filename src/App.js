import "./App.css";
import { Box, Typography } from "@mui/material";
import FrontCard from "./components/FrontCard/FrontCard";
import SwitchButton from "./components/Switch/SwitchButton";
import { useState } from "react";
import InfoCard from "./components/InfoCard/InfoCard";

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
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="353" height="600">
          <g fill="none" fill-rule="evenodd" stroke="#D0D5F6" stroke-width="2">
            <path d="M180.29 759c102.087-21.62 155.232-61.312 159.437-119.074 6.307-86.643-231.598-17.186-136.358-198 95.241-180.813 181.318-185.29 136.358-298C294.767 31.216 174.04-27.954 33.79 16.8c-93.501 29.836-144.652 140.545-153.453 332.126" />
            <path d="M138.3 759c80.083-18.988 121.774-53.846 125.072-104.575 4.948-76.093-181.679-15.094-106.966-173.89C231.118 321.738 298.64 317.808 263.372 218.82c-35.269-98.986-129.974-150.95-239.995-111.646C-49.97 133.378-90.096 230.605-97 398.859" />
            <path d="M102.065 761c60.604-16.56 92.153-46.963 94.65-91.208 3.743-66.367-137.488-13.165-80.949-151.664 56.54-138.5 107.638-141.927 80.948-228.261-26.69-86.335-98.359-131.656-181.618-97.376C-40.41 215.345-70.775 300.145-76 446.892" />
          </g>
        </svg> */}
      </Box>
    </Box>
  );
}

export default App;
