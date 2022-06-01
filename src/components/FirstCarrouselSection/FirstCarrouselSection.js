import { useEffect, useState } from "react";
import { Box, CardMedia, Chip, Stack, Typography } from "@mui/material";
import ArrowButton from "../ArrowButton/ArrowButton";
import { elementsList } from "./elementsList";
import { useFirstCarrouselSection } from "./FirstCarrouselSection.style";

const imgStyles = [
  {
    objectPosition: { xs: "0px -23px", sm: "center", md: "50% 0px" },
  },
  {
    objectPosition: { xs: "-100px -23px", sm: "0px -70px", md: "50% 0%" },
    transform: {
      xs: "0px -23px",
      sm: "center",
      md: "scale(1.1) translateY(3%)",
    },
  },
  {
    objectPosition: { xs: "0px -23px", sm: "center", md: "50% 0px" },
  },
];

const FIRSTCARROUSELTYPE = Object.keys(elementsList)[0];

const FirstCarrouselSection = () => {
  const classes = useFirstCarrouselSection();
  const [selectedElement, setSelectedElement] = useState(0);
  const [selectedType, setSelectedType] = useState(FIRSTCARROUSELTYPE);
  console.log(
    "file: FirstCarrouselSection.js ~ line 30 ~ FirstCarrouselSection ~ selectedType",
    selectedType
  );

  const { subTitle, text, image } =
    elementsList?.[selectedType]?.[selectedElement];

  const changeTypeOfCarrousel = (type) => () => setSelectedType(type);

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
            sx={{ position: "absolute", zIndex: 10 }}
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
            image={image}
            alt={subTitle}
            className={classes.imageSection}
            sx={imgStyles[selectedElement]}
          />
        </Box>
        <Box className={classes.textBox}>
          <Stack direction="row">
            {Object.keys(elementsList).map((accessKey, index) => (
              <Chip
                key={index}
                label={accessKey}
                sx={{
                  backgroundColor:
                    selectedType === accessKey
                      ? "#BCDAFA !important"
                      : "rgba(0, 0, 0, 0.08) !important",
                  color: "white",
                  height: "max-content",
                  fontSize: "25px",
                  "&.MuiChip-root": () => ({
                    "& .MuiChip-label": {
                      margin: "12px !important",
                      fontFamily: "Montserrat",
                    },
                  }),
                }}
                onClick={changeTypeOfCarrousel(accessKey)}
              />
            ))}
          </Stack>
          {/* <Typography variant="h3" className={classes.titleSection}>
            {title}
          </Typography> */}
          <Typography variant="h4" className={classes.subTitleSection}>
            {subTitle}
          </Typography>
          <Typography paragraph className={classes.text}>
            {text}
          </Typography>
          <Box className={classes.arrowContainer}>
            <ArrowButton
              buttonAction={() => {
                if (selectedElement === 4) return setSelectedElement(0);
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
