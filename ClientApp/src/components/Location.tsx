import React from "react";
import { Grid } from "@mui/material";
import LocationSearch from "./LocationSearch";
import Congrats from "./Congrats";
import Task from "./Task";

export type GpsPosition = {
  latitude: number;
  longitude: number;
};

type Stage = "searching" | "found" | "task";

const LocationCard: React.FC = () => {
  const [stage, setStage] = React.useState<Stage>("searching");

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
