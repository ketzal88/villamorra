import { Box, CardMedia, Grid, Stack, Typography } from "@mui/material";
import ArrowButton from "../ArrowButton/ArrowButton";
import { useAmennitiesSectionStyles } from "./ammenitiesSection.styles";
import { amenitiesItemsList } from "./amenitiesItemsList";
import { useState } from "react";

const AmenitiesSection = () => {
  const classes = useAmennitiesSectionStyles();
  const [selectedElement, setSelectedElement] = useState(0);
  const { title, subTitle, text, image } = amenitiesItemsList[selectedElement];

  return (
    <Stack
      direction="column"
      alignItems="center"
      id="amenitiesSection"
      sx={{
        backgroundColor: (theme) => theme.palette.primary.syncBlue,
      }}
    >
      <Stack
        direction="row"
        justifyContent="center"
        className={classes.titleWrapper}
      >
        <Typography variant="h2" className={classes.titleSection}>
          Amenities
        </Typography>
      </Stack>
      <Box className={classes.wrapperSection}>
        <Stack direction="row" justifyContent="center">
          <Grid className={classes.amenitiesGallery}>
            <Box className={classes.textWrapper}>
              <Typography variant="h2" className={classes.titleSection1}>
                {title}
              </Typography>
              <Typography variant="h3" className={classes.subTitleSection}>
                {subTitle}
              </Typography>
              <Typography paragraph className={classes.textSection}>
                {text}
              </Typography>
              <Stack
                sx={{ paddingTop: "auto" }}
                flexDirection="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Box className={classes.iconContainer}>
                  <ArrowButton
                    buttonAction={() => {
                      if (selectedElement === 6) return setSelectedElement(0);
                      setSelectedElement(selectedElement + 1);
                    }}
                  />
                </Box>
                <Typography className={classes.carrouselNumber}>
                  <Typography
                    component="span"
                    className={`${classes.carrouselNumber} ${classes.selectedSlide}`}
                  >
                    {(selectedElement + 1).toString().padStart(2, "0")}/
                  </Typography>
                  {amenitiesItemsList.length.toString().padStart(2, "0")}
                </Typography>
              </Stack>
            </Box>
            {/* <img className={classes.imgSection} src={galeria} alt="galeria" /> */}
            <CardMedia
              component="img"
              image={image}
              alt={subTitle}
              className={classes.imgSection}
              // sx={imgStyles[selectedElement]}
            />
          </Grid>
        </Stack>
      </Box>
    </Stack>
  );
};

export default AmenitiesSection;
