import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "../Button/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

const InfoCard = ({ price, type, users, storage, send, boxShadow }) => {
  return (
    <Card
      variant="outlined"
      sx={{
        width: "300px",
        border: "none",
        borderRadius: "10px",
        margin: "40px -5px",
        backgroundColor: "background.default",
        boxShadow: { boxShadow },
      }}
    >
      <CardContent>
        <Typography
          sx={{ fontSize: 14, fontFamily: "'Montserrat', sans-serif" }}
          color="text.secondary"
          gutterBottom
        >
          {type}
        </Typography>
        <Typography
          sx={{ fontFamily: "'Montserrat', sans-serif" }}
          variant="h3"
          component="div"
          color="text.secondary"
        >
          {price}
        </Typography>
        <Box>
          <Divider sx={{ mt: 2, mb: 2 }} />
          <Typography
            sx={{ fontFamily: "'Montserrat', sans-serif" }}
            color="text.secondary"
          >
            {users}
          </Typography>
          <Divider sx={{ mt: 2, mb: 2 }} />
          <Typography
            sx={{ fontFamily: "'Montserrat', sans-serif" }}
            color="text.secondary"
          >
            {storage}
          </Typography>
          <Divider sx={{ mt: 2, mb: 2 }} />
          <Typography
            sx={{ fontFamily: "'Montserrat', sans-serif" }}
            color="text.secondary"
          >
            {send}
          </Typography>
          <Divider sx={{ mt: 2, mb: 2 }} />
          <Typography
            sx={{ fontFamily: "'Montserrat', sans-serif" }}
            color="text.secondary"
          >
            <Button
              backgroundImage="linear-gradient(357deg, rgba(105,111,221,1) 0%, rgba(163,168,240,1) 100%)"
              color="white"
              backgroundColor="#696fdd"
              variant="outlined"
              sx={{
                mt: 2,
                border: 0,
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              Learn more
            </Button>
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default InfoCard;
