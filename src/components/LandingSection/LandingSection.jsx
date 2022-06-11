import { Box, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLadingSectionStyles } from "./landingSection.styles";

const LandingSection = ({ path }) => {
  const classes = useLadingSectionStyles();
  const navigate = useNavigate();
  const [recorridoSection, setRecorridoSection] = useState("");

  useEffect(() => {
    if (recorridoSection) {
      const element = document.querySelector(recorridoSection);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }, [recorridoSection]);

  return (
    <Box
      sx={{
        backgroundColor: (theme) => theme.palette.primary.syncBlue,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Grid container className={classes.wrapper} id="landingSection">
        <Grid item className={classes.textWrapper}>
          <Typography className={classes.location} variant="h3">
            Villa Morra, Paraguay
          </Typography>
          <Typography className={classes.mainTitle} variant="h1">
            <span>Cada espacio de tu vida,</span>
            <span> conectado</span>
          </Typography>
          <Grid item className={classes.buttonWrapper}>
            <button
              className={classes.apartamentsButton}
              onClick={() => navigate(`${path}apartments`)}
            >
              VER APARTAMENTOS
            </button>
            <button
              className={classes.recorridoButton}
              onClick={() => setRecorridoSection("#recorridoSection")}
            >
              RECORRIDO VIRTUAL
            </button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LandingSection;
