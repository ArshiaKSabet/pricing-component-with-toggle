import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

const RightCard = ({ pricePlan }) => {
  return (
    <Card
      variant="outlined"
      sx={{ width: "20%", height: "80%", margin: "40px 0" }}
    >
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Master
        </Typography>
        <Typography variant="h3" component="div">
          {!pricePlan ? "399.99$" : "39.99$"}
        </Typography>
        <Divider sx={{ mt: 1, mb: 1 }} />
        <Typography color="text.secondary">2 TB Storage</Typography>
        <Divider sx={{ mt: 1, mb: 1 }} />
        <Typography color="text.secondary">10 Users Allowed</Typography>
        <Divider sx={{ mt: 1, mb: 1 }} />
        <Typography color="text.secondary">Send up to 20 GB</Typography>
        <Divider sx={{ mt: 1, mb: 1 }} />
        <Typography color="text.secondary">
          <Button sx={{ mt: 1.5 }} variant="outlined">
            Learn more
          </Button>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default RightCard;
