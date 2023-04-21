import React from "react";
import { Grid } from "@mui/material";
import LocationSearch from "./LocationSearch";
import Congrats from "./Congrats";
import Task from "./Task";
import { TasksData, mockData } from "../types";

type Stage = "searching" | "found" | "task";

const LocationCard: React.FC = () => {
  const [stage, setStage] = React.useState<Stage>("searching");
  const [taskNumber, setTaskNumber] = React.useState<number>(0);
  const [data, setData] = React.useState<null | TasksData>(null);

  const onTaskFinished = () => {
    localStorage.setItem("taskNumber", `${taskNumber + 1}`);
    setTaskNumber((n) => n + 1);
    setStage("searching");
  };

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://geogamemac.azurewebsites.net/data?accessCode=${localStorage.getItem(
          "accessCode"
        )}`
      );
      const jsonData = await response.json();
      setData(jsonData);
    };
    fetchData();
  }, []);

  React.useEffect(() => {
    setTaskNumber(Number(localStorage.getItem("taskNumber") ?? "0"));
  });

  return (
    <>
      <Grid container spacing={1} height="100vh" justifyContent="space-between">
        {data === null
          ? "fetchin data..."
          : {
              searching: (
                <LocationSearch
                  taskData={data[taskNumber]}
                  onArrived={() => setStage("found")}
                />
              ),
              found: <Congrats onShowTask={() => setStage("task")} />,
              task: (
                <Task
                  onTaskFinished={onTaskFinished}
                  taskText={data[taskNumber].task}
                />
              ),
            }[stage]}
      </Grid>
    </>
  );
};

export default LocationCard;
