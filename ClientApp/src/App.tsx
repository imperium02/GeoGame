import { useState } from "react";
import React from "react";
import { Grid, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import "./App.css";
import LocationCard from "./components/Location";

type GpsPosition = {
  latitude: number;
  longitude: number;
};

const App: React.FC = () => {
  const [code, setCode] = useState("");
  const [codeCorrect, setCodeCorrect] = useState(false);
  const [fetchInProgress, setFetchInProgress] = useState(false);

  const [data, setData] = useState<null | { codeCorrect: boolean }>(null);

  React.useEffect(() => {
    if (!fetchInProgress) return;
    const fetchData = async () => {
      const response = await fetch(
        `https://geogamemac.azurewebsites.net/accessCode?accessCode=${code}`
      );
      const jsonData = await response.json();
      setData(jsonData);
    };
    fetchData();
    setFetchInProgress(false);
  }, [fetchInProgress]);

  React.useEffect(() => {
    if (data?.codeCorrect === true) setCodeCorrect(true);
  });

  const validateCode = () => {
    setFetchInProgress(true);
  };

  return (
    <div className="App">
      {!codeCorrect ? (
        <>
          <Grid container flexDirection="column" spacing={5}>
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
          </Grid>
        </>
      ) : (
        <LocationCard />
      )}
    </div>
  );
};

export default App;
