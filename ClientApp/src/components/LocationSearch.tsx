import React from "react";
import { Box, Grid, IconButton, Modal, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Hint from "./Hint";
import DirectionHint from "./DirectionText";
import CloseIcon from "@mui/icons-material/Close";

export type GpsPosition = {
  latitude: number;
  longitude: number;
};

const style = {
  position: "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "85vw",
  //   height: "60vh",
  bgcolor: "#242424",
  boxShadow: 24,
  borderRadius: 2,
};

interface LocationSearchProps {
  onArrived: () => void;
}

const LocationSearch: React.FC<LocationSearchProps> = ({ onArrived }) => {
  //   const [position, setPosition] = React.useState<GpsPosition>();
  const [inPlace, setInPlace] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    navigator.geolocation.getCurrentPosition(
      (p) => {
        const position: GpsPosition = {
          latitude: p.coords.latitude,
          longitude: p.coords.longitude,
        };

        if (
          Math.abs(position.latitude - 52.431939) < 0.0001 &&
          Math.abs(position.longitude - 16.910857) < 0.0001
        ) {
          onArrived();
        }
      },
      (err) => {
        alert(err);
      },
      { enableHighAccuracy: true, timeout: 3000, maximumAge: 0 }
    );
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
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
      <Grid item alignSelf="flex-start">
        <Button
          variant="text"
          color="primary"
          sx={{ fontSize: "16px" }}
          onClick={handleOpen}
        >
          Dotknij aby sprawdzić czy jesteś na miejscu.
        </Button>
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
              type="text"
            />
          </Grid>
          <Grid item flexBasis={0} flexGrow={1} flexShrink={1}>
            <Hint
              hint="Ten budynek jest cały czarny oraz jest pokryty prawie w całości z okien."
              name="Duża"
              type="text"
            />
          </Grid>
          <Grid item flexBasis={0} flexGrow={1} flexShrink={1}>
            <Hint
              hint="Ten budynek jest cały czarny oraz jest pokryty prawie w całości z okien."
              name="Kierunek"
              type="direction"
            />
          </Grid>
          <Grid item flexBasis={0} flexGrow={1} flexShrink={1}>
            <Hint
              hint="Ten budynek jest cały czarny oraz jest pokryty prawie w całości z okien."
              name="Dystans"
              type="distance"
            />
          </Grid>
        </Grid>
      </Grid>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Grid
            container
            justifyContent="flex-start"
            flexDirection="column"
            spacing={1}
          >
            <Grid item alignSelf="end" sx={{ margin: 1 }}>
              <IconButton onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            </Grid>
            <Grid
              item
              sx={{
                marginLeft: 4,
                marginRight: 4,
                marginTop: 2,
                marginBottom: 8,
              }}
            >
              {
                <Typography
                  variant="h5"
                  sx={{ lineHeight: 1.6, letterSpacing: 2 }}
                >
                  text
                </Typography>
              }
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </>
  );
};

export default LocationSearch;
