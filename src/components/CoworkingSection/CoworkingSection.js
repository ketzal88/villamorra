import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import cowork from "../../assets/images/Desktop/coworking.jpg";
import coliving from "../../assets/images/Desktop/coliving.jpg";
import { useCoworkingSectionStyles } from "./CoworkingSection.styles";
import { Link } from "react-router-dom";
import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  StickyOut,
  Style,
  Zoom,
  ZoomIn,
  ZoomOut,
} from "react-scroll-motion";

const CoworkingSection = () => {
  const classes = useCoworkingSectionStyles();
  const FadeUp = batch(Fade(), Sticky());
  return (
    <>
      <ScrollPage>
        <Animator animation={FadeUp}>
          <Stack
            direction="column"
            justifyContent={{ md: "center" }}
            className={classes.wrapperSection}
          >
            <img
              className={classes.imgSection}
              src={cowork}
              alt="Coworking Incluido"
              style={{
                height: "100vh",
              }}
            />
            <Box className={classes.textWrapper}>
              <Typography className={classes.titleSection} variant="h2">
                Co-Working
              </Typography>
              <Typography className={classes.textSection}>
                Cómodo y amplio espacio ubicado en la azotea. Oficinas privadas
                y mesas compartidas que ofrecen un ambiente de trabajo informal.
              </Typography>
            </Box>
          </Stack>
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator animation={FadeUp}>
          <Stack
            direction="column"
            justifyContent={{ md: "center" }}
            className={classes.wrapperSection}
          >
            <img
              className={classes.imgSection}
              src={coliving}
              alt="Coworking Incluido"
              style={{
                height: "100vh",
              }}
            />
            <Box className={classes.textWrapper}>
              <Typography className={classes.titleSection} variant="h2">
                Co-Living
              </Typography>
              <Typography className={classes.textSection}>
                Cómodo y amplio espacio ubicado en la azotea. Oficinas privadas
                y mesas compartidas que ofrecen un ambiente de trabajo informal.
              </Typography>
            </Box>
          </Stack>
        </Animator>
      </ScrollPage>
      {/* <Stack direction="column" alignItems="center"> */}
      {/* <Stack
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
        </Stack> */}
      {/* <Stack
          id="recorridoSection"
          direction="column"
          justifyContent="center"
          alignItems="center"
          className={classes.recorridoVirtualWrapper}
        >
          <Link
            to="/recorrido-virtual"
            target="_blank"
            className={classes.recorridoButton}
            sx={{ textAlign: "center" }}
          >
            Recorrido Virtual
          </Link>
        </Stack> */}
      {/* </Stack> */}
    </>
  );
};
export default CoworkingSection;
