import { useEffect, useRef, useState } from "react";
import { useApartamentsStyles } from "./apartamentos.styles";
import { Box, Stack, Typography } from "@mui/material";
import { apartamentList } from "./apartamentList";
import arrow from "../../assets/images/arrow.svg";
import tipologia1 from "../../assets/TIPOLOGIA 01.mp4";
import tipologia2 from "../../assets/TIPOLOGIA 02.mp4";
import tipologia3 from "../../assets/TIPOLOGIA 03.mp4";

const videoSources = {
  0: tipologia1,
  1: tipologia2,
  2: tipologia3,
};

const ApartamentosSection = () => {
  const classes = useApartamentsStyles();
  const videoRef = useRef(null);
  const [autoPlay, setAutoPlay] = useState(false);
  const [selectedElement, setSelectedElement] = useState(0);

  const callback = function (entries) {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setAutoPlay(true);
      videoRef?.current?.play();
    } else {
      setAutoPlay(false);
      videoRef?.current?.pause();
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callback, {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    });
    observer.observe(videoRef.current);
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      if (videoRef.current) observer.unobserve(videoRef.current);
    };
  }, [videoRef]);

  return (
    <Stack direction="row" justifyContent="center">
      <Box className={classes.container}>
        <Typography variant="h2" className={classes.sectionTitle}>
          Apartamentos
        </Typography>
        <Stack
          flexDirection="column"
          alignItems="center"
          sx={{ position: "relative" }}
        >
          <img
            src={arrow}
            alt="right arrow"
            style={{
              position: "absolute",
              right: 0,
              top: "20%",
              zIndex: 2,
              cursor: "pointer",
            }}
            onClick={() => {
              setSelectedElement(
                selectedElement === 2 ? 0 : selectedElement + 1
              );
            }}
          />
          <img
            src={arrow}
            alt="left arrow"
            style={{
              transform: "rotate(180deg)",
              position: "absolute",
              left: 0,
              top: "20%",
              zIndex: 2,
              cursor: "pointer",
            }}
            onClick={() => {
              setSelectedElement(
                selectedElement === 0 ? 2 : selectedElement - 1
              );
            }}
          />
          <video
            ref={videoRef}
            className={classes.imgContainer}
            src={videoSources[selectedElement]}
            controls={true}
            autoPlay={autoPlay}
            loop={true}
          />
          <Stack sx={{ height: { xs: "320px", md: "330px" } }}>
            <Typography variant="h2" className={classes.subTitle}>
              {apartamentList[selectedElement].title}
            </Typography>
            <Typography className={classes.text}>
              <span>{apartamentList[selectedElement].firstDesc}</span>
              <br />
              <span>{apartamentList[selectedElement].secondDesc}</span>
            </Typography>
            <button
              className={classes.button}
              style={{ opacity: 0.6 }}
              title="funcionalidad en desarrollo"
            >
              <Typography sx={{ marginBottom: 0 }} fontWeight={700}>
                VER TIPOLOGÍA
              </Typography>
            </button>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
};

export default ApartamentosSection;
