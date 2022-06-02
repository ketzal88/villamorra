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
    transform: translateY(-200%);
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
    transform: translateY(-200%);
  }
`;

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
    image: { xs, lg, xl },
  } = elementsList?.[selectedType]?.[selectedElement];

  const changeTypeOfCarrousel = (type) => () => setSelectedType(type);
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
            image={laptop && !desktop ? lg : desktop ? xl : xs}
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
                      ? "rgba(188, 218, 250, 0.3) !important"
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
