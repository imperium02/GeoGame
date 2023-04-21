import React from "react";
import { Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";

interface CongratsProps {
  onTaskFinished: () => void;
}

const Task: React.FC<CongratsProps> = ({ onTaskFinished }) => {
  return (
    <>
      <Grid container justifyContent="center" alignContent="center" spacing={5}>
        <Grid item marginBottom={10}>
          <Typography
            align="left"
            sx={{ lineHeight: 1.6, letterSpacing: 2, fontSize: "28px" }}
          >
            W tym miejscu pracowałem po raz pierwszy. Widziałem samochody
            jeżdzące oraz rowery też jeżdzące. Może kiedyś też pojeżdże. Twoje
            zadanie to obrócić się 3 razy w miejscu.
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h6">
            Kliknij kiedy zadanie zostało wykonane:
          </Typography>
        </Grid>
        <Grid item>
          <Button onClick={onTaskFinished} variant="contained">
            Zrobione!
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Task;
