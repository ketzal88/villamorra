import { Box, Stack, Typography } from "@mui/material";
import domotica from "../../assets/images/domotica.jpeg";
import { useInfoProjectSectionStyles } from "./InfoProjectSection.style";

const InfoProjectSection = () => {
  const classes = useInfoProjectSectionStyles();
  return (
    <Stack
      sx={{
        backgroundColor: (theme) => theme.palette.primary.syncBlue,
        marginTop: "-1px",
        display: { xs: "none", md: "flex" },
      }}
      direction="row"
      justifyContent="center"
    >
      <Stack direction="row" className={classes.wrapper}>
        <Box>
          <Typography variant="h3" className={classes.titleSection}>
            Conoce el proyecto
          </Typography>
          <img className={classes.imageBox} src={domotica} alt="domótica" />
        </Box>
        <Box className={classes.textBox}>
          <Typography className={classes.subTitleSection}>
            Sustentable, Flexible <br /> y Moderno
          </Typography>
          <Typography className={classes.text}>
            Un desarrollo real y actual. Con el foco en el hoy, ofrece
            soluciones tecnológicas para resolver el encuentro entre tu vida
            familiar, social y laboral. Inspirado en la construcción de un
            futuro conectado y saludable
          </Typography>
        </Box>
      </Stack>
    </Stack>
  );
};
export default InfoProjectSection;
