import { Box, Stack, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import aboutProject from "../../assets/01-Sync-Asunción-Alta-1.mp4";
import { useInfoProjectSectionStyles } from "./InfoProjectSection.style";

const InfoProjectSection = () => {
  const classes = useInfoProjectSectionStyles();

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

  const observer = new IntersectionObserver(callback, {
    root: null,
    rootMargin: "0px",
    threshold: 1,
  });

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 0.2;
      observer.observe(videoRef.current);
    }
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      if (videoRef.current) observer.unobserve(videoRef.current);
    };
  }, [videoRef]);

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
          <video
            ref={videoRef}
            className={classes.imageBox}
            src={aboutProject}
            autoPlay={autoPlay}
            loop={true}
          />
        </Box>
        <Box className={classes.textBox}>
          <Typography className={classes.subTitleSection}>
            Algo Innovador
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
