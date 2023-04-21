import React from "react";
import { Typography } from "@mui/material";
import { GpsPosition } from "../types";
import { getCompassDirection } from "geolib";

type GpsDirections =
  | "NNE"
  | "NE"
  | "ENE"
  | "E"
  | "ESE"
  | "SE"
  | "SSE"
  | "S"
  | "SSW"
  | "SW"
  | "WSW"
  | "W"
  | "WNW"
  | "NW"
  | "NNW"
  | "N";

const directions: Record<GpsDirections, string> = {
  N: "północ",
  NNE: "północny wschód",
  NE: "północny wschód",
  ENE: "północny wschód",
  E: "wschód",
  ESE: "południowy wschód",
  SE: "południowy wschód",
  SSE: "południowy wschód",
  S: "południe",
  SSW: "południowy zachód",
  SW: "południowy zachód",
  WSW: "południowy zachód",
  W: "zachód",
  WNW: "północny zachód",
  NW: "północny zachód",
  NNW: "północny zachód",
};

interface DirectionTextProps {
  location: GpsPosition;
}

const DirectionText: React.FC<DirectionTextProps> = ({ location }) => {
  const [position, setPosition] = React.useState<GpsPosition>();
  const [direction, setDirection] = React.useState<GpsDirections>();

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
    const direction = getCompassDirection(
      { latitude: position.latitude, longitude: position.longitude },
      { latitude: location.latitude, longitude: location.longitude }
    );
    setDirection(direction);
  }, [position]);

  return (
    <Typography variant="h5" sx={{ lineHeight: 1.6, letterSpacing: 2 }}>
      {direction === undefined
        ? "sprawdzam lokalizacje"
        : `Cel jest w kierunku: ${directions[direction]}`}
    </Typography>
  );
};

export default DirectionText;
