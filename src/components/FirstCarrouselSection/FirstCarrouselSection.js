import { useState } from "react";
import { keyframes } from "@emotion/react";
import {
  Box,
  CardMedia,
  Chip,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import ArrowButton from "../ArrowButton/ArrowButton";
import { elementsList } from "./elementsList";
import { useFirstCarrouselSection } from "./FirstCarrouselSection.style";
import domoticaDesk from "../../assets/images/Desktop/Tech/Tecnologia/1-tech.jpg";
import domoticaMob from "../../assets/images/mobile/Tech/Tecnologia/1-tech.jpg";
import controlDeAccesoDesk from "../../assets/images/Desktop/Tech/Tecnologia/2-tech.jpg";
import controlDeAccesoMob from "../../assets/images/mobile/Tech/Tecnologia/2-tech.jpg";
import sistemaAudioDesk from "../../assets/images/Desktop/Tech/Tecnologia/3-tech.jpg";
import sistemaAudioMob from "../../assets/images/mobile/Tech/Tecnologia/3-tech.jpg";
import sistemaCctvDesk from "../../assets/images/Desktop/Tech/Tecnologia/4-tech.jpg";
import sistemaCctvMob from "../../assets/images/mobile/Tech/Tecnologia/4-tech.jpg";
import sistemaRedesDesk from "../../assets/images/Desktop/Tech/Tecnologia/5-tech.jpg";
import sistemaRedesMob from "../../assets/images/mobile/Tech/Tecnologia/5-tech.jpg";

import edificioDesk from "../../assets/images/Desktop/Tech/Sustentabilidad/1-sust.jpg";
import edificioMob from "../../assets/images/mobile/Tech/Sustentabilidad/1-sust.jpg";
import plantaDesk from "../../assets/images/Desktop/Tech/Sustentabilidad/2-sust.jpg";
import plantaMob from "../../assets/images/mobile/Tech/Sustentabilidad/2-sust.jpg";
import jardinDesk from "../../assets/images/Desktop/Tech/Sustentabilidad/3-sust.jpg";
import jardinMob from "../../assets/images/mobile/Tech/Sustentabilidad/3-sust.jpg";
import biciDesk from "../../assets/images/Desktop/Tech/Sustentabilidad/4-sust.jpg";
import biciMob from "../../assets/images/mobile/Tech/Sustentabilidad/4-sust.jpg";

const imgStyles = {
  Tecnología: [
    {
      objectPosition: { xs: "0px 0px", sm: "center", md: "50% 0px" },
    },
    {
      // objectPosition: { xs: "-100px -23px", sm: "0px -70px", md: "50% 0%" },
      transform: {
        xs: "0px -23px",
        sm: "center",
        md: "scale(1.1) translateY(3%)",
      },
    },
    {
      objectPosition: { xs: "0px -23px", sm: "center", md: "50% 0px" },
    },
  ],
  Sustentabilidad: [
    {
      objectPosition: { xs: "0px -23px", sm: "center", md: "50% 0px" },
    },
    {
      transform: {
        md: "scale(1.1) translateY(3%)",
      },
    },
    {
      objectPosition: { xs: "0px -23px", sm: "center", md: "50% 0px" },
    },
  ],
};

const textEffect = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-50%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;
const textEffectExit = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-50%);
  }
`;

const carrouselImages = {
  Tecnología: [
    {
      xs: domoticaMob,
      lg: domoticaDesk,
      xl: domoticaDesk,
    },
    {
      xs: controlDeAccesoMob,
      lg: controlDeAccesoDesk,
      xl: controlDeAccesoDesk,
    },
    {
      xs: sistemaAudioMob,
      lg: sistemaAudioDesk,
      xl: sistemaAudioDesk,
    },
    {
      xs: sistemaCctvMob,
      lg: sistemaCctvDesk,
      xl: sistemaCctvDesk,
    },
    {
      xs: sistemaRedesMob,
      lg: sistemaRedesDesk,
      xl: sistemaRedesDesk,
    },
  ],
  Sustentabilidad: [
    {
      xs: edificioMob,
      lg: edificioDesk,
      xl: edificioDesk,
    },
    {
      xs: plantaMob,
      lg: plantaDesk,
      xl: plantaDesk,
    },
    {
      xs: jardinMob,
      lg: jardinDesk,
      xl: jardinDesk,
    },
    {
      xs: biciMob,
      lg: biciDesk,
      xl: biciDesk,
    },
  ],
};

const FIRSTCARROUSELTYPE = Object.keys(elementsList)[0];

const FirstCarrouselSection = () => {
  const classes = useFirstCarrouselSection();
  const [selectedElement, setSelectedElement] = useState(0);
  const [makeTransition, setMakeTransition] = useState(true);
  const [selectedType, setSelectedType] = useState(FIRSTCARROUSELTYPE);
  const laptop = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  const desktop = useMediaQuery((theme) => theme.breakpoints.up("xl"));

  const {
    subTitle,
    text,
    // image: { xs, lg, xl },
  } = elementsList?.[selectedType]?.[selectedElement];

  const changeTypeOfCarrousel = (type) => () => {
    setSelectedElement(0);
    setSelectedType(type);
  };
  const hasToReset = selectedType === FIRSTCARROUSELTYPE ? 4 : 3;

  return (
    <Stack
      sx={{ backgroundColor: (theme) => theme.palette.primary.syncBlue }}
      direction="row"
      justifyContent="center"
    >
      <Stack direction="row" className={classes.wrapper}>
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            width: { xs: "100%", md: "746px", lg: "1180px" },
            height: { xs: "391px", sm: "center", md: "100%" },
          }}
        >
          <Typography
            className={classes.carrouselNumber}
            sx={{ position: "absolute", zIndex: 2 }}
          >
            <Typography
              component="span"
              className={`${classes.carrouselNumber} ${classes.selectedSlide}`}
            >
              {(selectedElement + 1).toString().padStart(2, "0")}/
            </Typography>
            {elementsList[selectedType].length.toString().padStart(2, "0")}
          </Typography>
          <CardMedia
            component="img"
            image={
              carrouselImages[selectedType][selectedElement][
                laptop && !desktop ? "lg" : desktop ? "xl" : "xs"
              ]
            }
            alt={subTitle}
            className={classes.imageSection}
            sx={imgStyles[selectedType][selectedElement]}
          />
        </Box>
        <Box
          className={classes.textBox}
          sx={{
            "&.MuiBox-root": {
              "& > *": {
                animation: (theme) =>
                  `${makeTransition ? textEffect : textEffectExit} 1500ms ${
                    theme.transitions.easing.easeInOut
                  }`,
              },
            },
          }}
        >
          <Stack direction="row" sx={{ animation: "none !important" }}>
            {Object.keys(elementsList).map((accessKey, index) => (
              <Chip
                key={index}
                label={accessKey}
                sx={{
                  backgroundColor:
                    selectedType === accessKey
                      ? "#16191E !important"
                      : "rgba(0, 0, 0, 0.08) !important",
                  color: "white",
                  borderRadius: "33px !important",
                  height: "max-content",
                  fontSize: { xs: "18px", lg: "25px" },
                  "&.MuiChip-root": () => ({
                    "& .MuiChip-label": {
                      opacity: "1 !important",
                      margin: "12px !important",
                      fontFamily: "Montserrat",
                    },
                  }),
                }}
                onClick={changeTypeOfCarrousel(accessKey)}
              />
            ))}
          </Stack>
          <Typography variant="h4" className={classes.subTitleSection}>
            {subTitle}
          </Typography>
          <Typography paragraph className={classes.text}>
            {text}
          </Typography>
          <Box className={classes.arrowContainer}>
            <ArrowButton
              buttonAction={() => {
                if (makeTransition) setMakeTransition(false);
                setTimeout(() => setMakeTransition(true), 100);
                if (selectedElement === hasToReset)
                  return setSelectedElement(0);
                setSelectedElement(selectedElement + 1);
              }}
            />
          </Box>
        </Box>
      </Stack>
    </Stack>
  );
};
export default FirstCarrouselSection;
