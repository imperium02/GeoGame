import React from "react";
import { Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import ConfettiExplosion from "react-confetti-explosion";

interface CongratsProps {
  onShowTask: () => void;
}

const Congrats: React.FC<CongratsProps> = ({ onShowTask }) => {
  return (
    <Grid container justifyContent="center" alignContent="center" spacing={5}>
      <Grid item>
        <Typography variant="h4">Gratulacje! Miejsce znalezione!</Typography>{" "}
      </Grid>
      <ConfettiExplosion />
      <Grid item>
        <Typography variant="h6">
          Kliknij na poniższy przycisk aby wyświetlić zadanie:
        </Typography>
      </Grid>
      <Grid item>
        <Button onClick={onShowTask} variant="contained">
          Wyświetl zadanie
        </Button>
      </Grid>
    </Grid>
  );
};

export default Congrats;
