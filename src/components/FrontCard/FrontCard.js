import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "../Button/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

const FrontCard = ({ price, type, users, storage, send }) => {
  return (
    <Card
      variant="outlined"
      sx={{
        width: "300px",
        border: "none",
        borderRadius: "10px",
        zIndex: 3,
        margin: "0",
        background:
          "linear-gradient(357deg, rgba(105,111,221,1) 0%, rgba(163,168,240,1) 100%)",
      }}
    >
      <CardContent
        sx={{
          mt: 5,
        }}
      >
        <Typography
          sx={{
            fontSize: 14,
            fontFamily: "'Montserrat', sans-serif",
            color: "background.default",
          }}
          gutterBottom
        >
          {type}
        </Typography>
        <Typography
          sx={{
            fontFamily: "'Montserrat', sans-serif",
            color: "background.default",
          }}
          variant="h3"
          component="div"
        >
          {price}
        </Typography>
        <Divider sx={{ mt: 2, mb: 2 }} />
        <Typography
          sx={{
            fontFamily: "'Montserrat', sans-serif",
            color: "background.default",
          }}
        >
          {storage}
        </Typography>
        <Divider sx={{ mt: 2, mb: 2 }} />
        <Typography
          sx={{
            fontFamily: "'Montserrat', sans-serif",
            color: "background.default",
          }}
        >
          {users}
        </Typography>
        <Divider sx={{ mt: 2, mb: 2 }} />
        <Typography
          sx={{
            fontFamily: "'Montserrat', sans-serif",
            color: "background.default",
          }}
        >
          {send}
        </Typography>
        <Divider sx={{ mt: 2, mb: 2 }} />
        <Typography
          sx={{
            fontFamily: "'Montserrat', sans-serif",
            color: "background.default",
          }}
        >
          <Button
            backgroundColor={"white"}
            color={"#696fdd"}
            sx={{
              mt: 2,
              border: "none",
              fontFamily: "'Montserrat', sans-serif",
            }}
            variant="outlined"
          >
            Learn more
          </Button>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default FrontCard;
