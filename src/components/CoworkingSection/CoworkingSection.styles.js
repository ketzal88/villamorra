import { makeStyles } from "@mui/styles";
import recorridoVirtual from "../../assets/images/imagen-recorrido-virtual.jpg";

export const useCoworkingSectionStyles = makeStyles((theme) => ({
  wrapperSection: {
    color: "white",
    maxWidth: "1920px",
    width: "100%",

    [theme.breakpoints.up("sm")]: {
      height: "759px",
      position: "relative",
    },
    [theme.breakpoints.up("lg")]: {
      height: "762px",
    },
    [theme.breakpoints.up("xl")]: {
      height: "1080px",
    },
  },
  imgSection: {
    height: "95vh",
    objectFit: "cover",
    [theme.breakpoints.up("sm")]: {
      height: "100%",
    },
  },
  textWrapper: {
    height: "95vh",
    marginTop: "-95vh",
    padding: "54px 38px 17px 25px",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    [theme.breakpoints.up("sm")]: {
      marginTop: "0",
      height: "100%",
      position: "absolute",
      backgroundColor: "transparent",
    },
  },
  titleSection: {
    textAlign: "center",
    fontSize: "48px !important",
    [theme.breakpoints.up("md")]: {
      fontSize: "96px !important",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "141px !important",
    },
  },
  textSection: {
    fontSize: "24px !important",
    marginTop: "40px !important",
    lineHeight: "1.3 !important",
    letterSpacing: "-.9px !important",
    display: "-webkit-box !important",
    "-webkit-box-orient": "vertical !important",
    overflow: "hidden !important",
    textOverflow: "ellipsis !important",
    "-webkit-line-clamp": "8 !important",
    lineClamp: "8 !important",
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      paddingInline: "211px !important",
      "-webkit-line-clamp": "4 !important",
      lineClamp: "4 !important",
    },
    [theme.breakpoints.up("lg")]: {
      paddingInline: "382px !important",
    },
    [theme.breakpoints.up("xl")]: {
      "-webkit-line-clamp": "3 !important",
      lineClamp: "3 !important",
      fontSize: "27px !important",
      paddingInline: "660px !important",
      lineHeight: "1.3 !important",
    },
  },
  recorridoVirtualWrapper: {
    backgroundImage: `url(${recorridoVirtual})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    maxWidth: "1920px",
    width: "100%",
    height: "930px",
    [theme.breakpoints.up("md")]: {
      height: "512px",
    },
    [theme.breakpoints.up("xl")]: {
      height: "756px",
    },
    [theme.breakpoints.down("md")]: {
      display: "none !important",
    },
  },
  recorridoButton: {
    backgroundColor: theme.palette.primary.syncBlue,
    color: theme.palette.primary.vmGreen,
    fontSize: "22px",
    fontWeight: "bold",
    padding: "29px 62px",
    borderRadius: "46px",
  },
}));
