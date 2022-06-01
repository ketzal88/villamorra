import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { usePrensaSectionStyles } from "./PrensaSection.styles";

const PrensaElement = ({ title, text, buttonLabel, imgURL }) => {
  const classes = usePrensaSectionStyles();
  const titleFormated = title.split(":");
  return (
    <Box className={classes.elementWrapper}>
      <img src={imgURL} className={classes.elementIMG} alt="Sección Prensa" />
      <Box className={classes.elementTextWrapper}>
        <Typography className={classes.elementTitle} variant="h3">
          {titleFormated[0] + ":"}
          <br />
          {titleFormated[1]}
        </Typography>
        <Typography className={classes.elementDate}>Feb 26, 2022</Typography>
        <Typography paragraph className={classes.elementText}>
          {text}
        </Typography>
        <Link to="01sync-asuncion" className={classes.elementButton}>
          {buttonLabel}
        </Link>
      </Box>
    </Box>
  );
};
export default PrensaElement;
