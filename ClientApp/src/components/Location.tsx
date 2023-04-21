import React from "react";
import { Grid } from "@mui/material";
import LocationSearch from "./LocationSearch";
import Congrats from "./Congrats";
import Task from "./Task";
import { mockData } from "../types";

type Stage = "searching" | "found" | "task";

const LocationCard: React.FC = () => {
  const [stage, setStage] = React.useState<Stage>("searching");
  const [taskNumber, setTaskNumber] = React.useState<number>(0);

  const onTaskFinished = () => {
    localStorage.setItem("taskNumber", `${taskNumber + 1}`);
    setTaskNumber((n) => n + 1);
    setStage("searching");
  };

  React.useEffect(() => {
    setTaskNumber(Number(localStorage.getItem("taskNumber") ?? "0"));
  });

  return (
    <>
      <Grid container spacing={1} height="100vh" justifyContent="space-between">
        {
          {
            searching: (
              <LocationSearch
                taskData={mockData[taskNumber]}
                onArrived={() => setStage("found")}
              />
            ),
            found: <Congrats onShowTask={() => setStage("task")} />,
            task: (
              <Task
                onTaskFinished={onTaskFinished}
                taskText={mockData[taskNumber].task}
              />
            ),
          }[stage]
        }
      </Grid>
    </>
  );
};

export default LocationCard;
