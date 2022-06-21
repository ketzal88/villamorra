import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import cowork from "../../assets/images/Desktop/coworking.jpg";
import { useCoworkingSectionStyles } from "./CoworkingSection.styles";
import { useMediaQuery } from "@mui/material";

const CoworkingSection = () => {
  const classes = useCoworkingSectionStyles();
  const laptop = useMediaQuery((theme) => theme.breakpoints.up("md"));
  return (
    <Stack direction="column" alignItems="center">
      <Stack
        direction="column"
        justifyContent={{ md: "center" }}
        className={classes.wrapperSection}
      >
        <img
          className={classes.imgSection}
          src={cowork}
          alt="Coworking Incluido"
        />
        <Box className={classes.textWrapper}>
          <Typography className={classes.titleSection} variant="h2">
            Co-Working
          </Typography>
          <Typography className={classes.textSection}>
            Cómodo y amplio espacio ubicado en la azotea. Oficinas privadas y
            mesas compartidas que ofrecen un ambiente de trabajo informal.
          </Typography>
        </Box>
      </Stack>
      <Stack
        id="recorridoSection"
        direction="column"
        justifyContent="center"
        alignItems="center"
        className={classes.recorridoVirtualWrapper}
      >
        {/* <iframe
            title="Recorrido Virtual Vitrium"
            src="https://www.xline3d.com/360/VillaMorraV_00/"
            width="100%"
            height="100%"
          /> */}

        <Grid container justifyContent="center">
          <Button variant="contained" class={classes.recorridoButton}>
            Recorrido Virtual
          </Button>
        </Grid>
      </Stack>
    </Stack>
  );
};
export default CoworkingSection;
