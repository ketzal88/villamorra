import { useEffect, useRef, useState } from "react";
import { useApartamentsStyles } from "./apartamentos.styles";
import { Box, Grid, Stack, Typography } from "@mui/material";
import paneo from "../../assets/paneo.mp4";

const ApartamentosSection = () => {
  const classes = useApartamentsStyles();
  const videoRef = useRef(null);
  const [autoPlay, setAutoPlay] = useState(false);

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
        <Grid
          container
          flexDirection="column"
          alignItems="center"
          className="monoambiente-info"
        >
          <video
            ref={videoRef}
            className={classes.imgContainer}
            src={paneo}
            controls={true}
            autoPlay={autoPlay}
            loop={true}
          />
          <Typography variant="h2" className={classes.subTitle}>
            Monoambiente
          </Typography>
          <Typography paragraph className={classes.text}>
            Sup total 47 m | Propio 34 m <br /> Terraza 2,60 m | CDM 10,40 m
          </Typography>
          <button className={classes.button}>
            <Typography paragraph sx={{ marginBottom: 0 }} fontWeight={700}>
              VER TIPOLOGÍA
            </Typography>
          </button>
        </Grid>
      </Box>
    </Stack>
  );
};

export default ApartamentosSection;
