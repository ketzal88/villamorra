import { Box, Stack, Typography } from "@mui/material";
import { useUbicacionSectionStyles } from "./UbicacionSection.styles";
// import mapa from "../../assets/images/mapa.svg";

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
              width: "100%",
              height: { xs: "662px", lg: "766px" },
            }}
          >
            <iframe
              title="Villa Morra"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.4197083803074!2d-57.57726408443405!3d-25.29009913357617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945da8a21d9dc111%3A0xa253b4524e3a4096!2sGeneral%20Bernardo%20O&#39;Higgins%20668%2C%20Asunci%C3%B3n%2C%20Paraguay!5e0!3m2!1ses-419!2sar!4v1655127517599!5m2!1ses-419!2sar"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Box>
        </Stack>
      </Box>
    </Stack>
  );
};

export default UbicacionSection;
