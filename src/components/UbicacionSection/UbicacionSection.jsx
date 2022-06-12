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
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{
            marginTop: { xs: "132px", lg: "114px", xl: "136px" },
          }}
        >
          {/* <img src={mapa} alt="alta" /> */}
          <Box
            sx={{
              width: { xs: "755px", lg: "930px" },
              height: { xs: "662px", lg: "766px" },
            }}
          >
            <iframe
              title="Villa Morra"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1105.0071104592766!2d-57.57562257075641!3d-25.290102786422374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945da8a21d9dc111%3A0xa253b4524e3a4096!2sGeneral%20Bernardo%20O&#39;Higgins%20668%2C%20Asunci%C3%B3n%2C%20Paraguay!5e1!3m2!1ses-419!2sar!4v1655064518748!5m2!1ses-419!2sar"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            />
          </Box>
        </Stack>
      </Box>
    </Stack>
  );
};

export default UbicacionSection;
