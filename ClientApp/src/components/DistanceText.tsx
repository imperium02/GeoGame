import React from "react";
import { Typography } from "@mui/material";
import { GpsPosition } from "../types";
import { getDistance } from "geolib";

interface DistanceTextProps {
  location: GpsPosition;
}

const DistanceText: React.FC<DistanceTextProps> = ({ location }) => {
  const [position, setPosition] = React.useState<GpsPosition>();
  const [distance, setDistance] = React.useState<undefined | number>();

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

  React.useEffect(() => {
    if (position === undefined) return;
    const direction = getDistance(
      { latitude: position.latitude, longitude: position.longitude },
      { latitude: location.latitude, longitude: location.longitude }
    );
    setDistance(direction);
  }, [position]);

  return (
    <Typography variant="h5" sx={{ lineHeight: 1.6, letterSpacing: 2 }}>
      {distance === undefined
        ? "sprawdzam lokalizacje"
        : `Odległość do celu: ${distance}m`}
    </Typography>
  );
};

export default DistanceText;
