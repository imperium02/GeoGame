import React from "react";
import { Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Hint from "./Hint";

type GpsPosition = {
  latitude: number;
  longitude: number;
};

const LocationCard: React.FC = () => {
  const [position, setPosition] = React.useState<GpsPosition>();

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
        <Grid item>
          <Typography
            // variant="h4"
            align="left"
            sx={{ lineHeight: 1.6, letterSpacing: 2, fontSize: "28px" }}
          >
            Pierwsza lokalizacja to miejsce w którym pracuje. Jest to miejsce w
            którym wykonuje ciężką pracę taką jak konfiguracja nowego kiosku.
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="h6"
            align="left"
            alignSelf="flex-start"
            color="#C6B26F"
          >
            Dotrzyj we wskazane miejsce aby konynuować.
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="h6"
            align="left"
            alignSelf="flex-start"
            marginBottom={3}
          >
            Podpowiedzi:
          </Typography>
          <Grid container spacing={3} flexDirection="row">
            <Grid item flexBasis={0} flexGrow={1} flexShrink={1}>
              <Hint
                hint="Ten budynek jest cały czarny oraz jest pokryty prawie w całości z okien."
                name="Mała"
              />
            </Grid>
            <Grid item flexBasis={0} flexGrow={1} flexShrink={1}>
              <Hint
                hint="Ten budynek jest cały czarny oraz jest pokryty prawie w całości z okien."
                name="Duża"
              />
            </Grid>
            <Grid item flexBasis={0} flexGrow={1} flexShrink={1}>
              <Hint
                hint="Ten budynek jest cały czarny oraz jest pokryty prawie w całości z okien."
                name="Kierunek"
              />
            </Grid>
            <Grid item flexBasis={0} flexGrow={1} flexShrink={1}>
              <Hint
                hint="Ten budynek jest cały czarny oraz jest pokryty prawie w całości z okien."
                name="Odległość"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default LocationCard;
