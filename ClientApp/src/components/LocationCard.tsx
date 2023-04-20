import React from "react";
import { Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";

type GpsPosition = {
  latitude: number;
  longitude: number;
};

const LocationCard: React.FC = () => {
  const [position, setPosition] = React.useState<GpsPosition>();

  React.useEffect(() => {
    const interval = setInterval(() => {
      navigator.geolocation.getCurrentPosition(
        (p) => {
          setPosition({
            latitude: p.coords.latitude,
            longitude: p.coords.longitude,
          });
        },
        (err) => {
          alert(err);
        },
        { enableHighAccuracy: true, timeout: 3000, maximumAge: 0 }
      );
    }, 5000);

    return () => clearInterval(interval);
  });

  return (
    <>
      <Grid container spacing={1} height="100vh" justifyContent="space-between">
        <Grid item>
          <Typography
            variant="h4"
            align="left"
            sx={{ lineHeight: 1.6, letterSpacing: 2 }}
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
            color="blanchedalmond"
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
              <Button variant="contained" fullWidth size="large">
                Tekstowa 1
              </Button>
            </Grid>
            <Grid item flexBasis={0} flexGrow={1} flexShrink={1}>
              <Button variant="contained" fullWidth size="large">
                Tekstowa 2
              </Button>
            </Grid>
            <Grid item flexBasis={0} flexGrow={1} flexShrink={1}>
              <Button variant="contained" fullWidth size="large">
                Kierunek
              </Button>
            </Grid>
            <Grid item flexBasis={0} flexGrow={1} flexShrink={1}>
              <Button variant="contained" fullWidth size="large">
                Odległość
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default LocationCard;
