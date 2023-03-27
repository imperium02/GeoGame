import { useState } from "react";
import reactLogo from "./assets/react.svg";
import React from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

type GpsPosition = {
  latitude: number;
  longitude: number;
};

const App: React.FC = () => {
  const [count, setCount] = useState(0);

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

  return (
    <div className="App">
      <Grid container flexDirection="column" spacing={5}>
        <Grid item>
          <Typography>Cytadela</Typography>
        </Grid>
        <Grid item>
          <Button variant="contained" onClick={updateGpsPosition}>
            Update position
          </Button>

          <div>
            <p>Latitude: {position?.latitude}</p>
            <p>Longitude: {position?.longitude}</p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
