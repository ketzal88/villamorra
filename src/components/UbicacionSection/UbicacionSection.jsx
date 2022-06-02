import { Box, Stack, Typography } from "@mui/material";
import { useUbicacionSectionStyles } from "./UbicacionSection.styles";
import mapa from "../../assets/images/mapa.svg";

const UbicacionSection = () => {
  const classes = useUbicacionSectionStyles();
  return (
    <Stack
      direction="row"
      justifyContent="center"
      sx={{ display: { xs: "none", md: "flex" } }}
    >
      <Box className={classes.ubicacionWrapper}>
        <Typography className={classes.titleSection} variant="h2">
          Ubicación
        </Typography>
        {/* <Typography>
          De aspecto moderno e innovador, se destaca por ser un proyecto
          conectado, con la tecnología al servicio de la comodidad y el cuidado
          del medio ambiente como prioridad.
        </Typography> */}
        <Stack direction="row" justifyContent="center" alignItems="center">
          <img src={mapa} alt="alta" />
        </Stack>
      </Box>
    </Stack>
  );
};

export default UbicacionSection;
