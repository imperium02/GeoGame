import React from "react";
import { Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Hint from "./Hint";
import DirectionHint from "./DirectionText";
import LocationSearch from "./LocationSearch";
import Congrats from "./Congrats";
import Task from "./Task";

export type GpsPosition = {
  latitude: number;
  longitude: number;
};

type Stage = "searching" | "found" | "task";

const LocationCard: React.FC = () => {
  const [position, setPosition] = React.useState<GpsPosition>();
  const [stage, setStage] = React.useState<Stage>("searching");

  //   React.useEffect(() => {
  //     const interval = setInterval(() => {
  //       navigator.geolocation.getCurrentPosition(
  //         (p) => {
  //           setPosition({
  //             latitude: p.coords.latitude,
  //             longitude: p.coords.longitude,
  //           });
  //         },
  //         (err) => {
  //           alert(err);
  //         },
  //         { enableHighAccuracy: true, timeout: 3000, maximumAge: 0 }
  //       );
  //     }, 5000);

  //     return () => clearInterval(interval);
  //   });

  return (
    <>
      <Grid container spacing={1} height="100vh" justifyContent="space-between">
        {
          {
            searching: <LocationSearch onArrived={() => setStage("found")} />,
            found: <Congrats onShowTask={() => setStage("task")} />,
            task: <Task onTaskFinished={() => setStage("searching")} />,
          }[stage]
        }
      </Grid>
    </>
  );
};

export default LocationCard;
