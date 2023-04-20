import React from "react";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";

type GpsPosition = {
  latitude: number;
  longitude: number;
};

const LocationCard: React.FC = () => {
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
        { enableHighAccuracy: true, timeout: 3000 }
      );
    }, 5000);

    return () => clearInterval(interval);
  });

  return (
    <Grid item>
      <Button variant="contained" onClick={updateGpsPosition}>
        Update position
      </Button>

      <div>
        <p>Latitude: {position?.latitude}</p>
        <p>Longitude: {position?.longitude}</p>
      </div>
    </Grid>
  );
};

export default LocationCard;
