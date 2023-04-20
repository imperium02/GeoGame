import { useState } from "react";
import React from "react";
import { Grid, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import "./App.css";
import LocationCard from "./components/LocationCard";

type GpsPosition = {
  latitude: number;
  longitude: number;
};

const App: React.FC = () => {
  const [code, setCode] = useState("");
  const [codeCorrect, setCodeCorrect] = useState(false);

  const [position, setPosition] = React.useState<GpsPosition>();

  const updateGpsPosition = () => {
    console.log("updating");
    navigator.geolocation.getCurrentPosition(
      (p) => {
        console.log("updating2");
        setPosition({
          latitude: p.coords.latitude,
          longitude: p.coords.longitude,
        });
      },
      (err) => {
        alert(err);
      },
      { enableHighAccuracy: true, timeout: 10000 }
    );
    console.log("updated");
  };

  const validateCode = () => {
    if ("test-code") setCodeCorrect(true);
  };

  return (
    <div className="App">
      <Grid container flexDirection="column" spacing={5}>
        {!codeCorrect ? (
          <>
            <Grid item>
              <Typography variant="h3">Hej!</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6">Wpisz otrzymany kod poniżej:</Typography>
            </Grid>
            <Grid item>
              <TextField
                variant="filled"
                label="Twój kod"
                onChange={(event) => setCode(event.target.value)}
              />
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                endIcon={<PlayCircleOutlineIcon />}
                size="large"
                onClick={validateCode}
              >
                Rozpocznij
              </Button>
            </Grid>
          </>
        ) : (
          <LocationCard />
        )}
      </Grid>
    </div>
  );
};

export default App;
