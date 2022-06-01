import { makeStyles } from "@mui/styles";
import edificio from "../../assets/images/edificio.png";

export const useEdificioStyles = makeStyles((theme) => {
  return {
    container: {
      backgroundImage: `url(${edificio})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      width: "100%",
      maxWidth: "1920px",
      [theme.breakpoints.down("lg")]: {
        backgroundPosition: "-270px 0px",
        height: "567px",
      },
      [theme.breakpoints.up("lg")]: {
        backgroundPosition: "-350px 0px",
        height: "769px",
      },
      [theme.breakpoints.up("xl")]: {
        backgroundPosition: "-750px 0px",
        height: "1149px",
      },
    },
    secondWrapper: {
      [theme.breakpoints.down("lg")]: {
        marginTop: "38px",
        marginRight: "75px",
      },
      [theme.breakpoints.up("lg")]: {
        marginTop: "93px",
        marginRight: "124px",
      },
      [theme.breakpoints.up("xl")]: {
        marginTop: "80px",
        marginRight: "191px",
      },
    },
    titleSection: {
      color: "black",
      [theme.breakpoints.down("lg")]: {
        fontSize: "34px !important",
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "48px !important",
      },
      [theme.breakpoints.up("xl")]: {
        fontSize: "60px !important",
      },
    },
    listLabel: {
      color: "#384146",
      [theme.breakpoints.down("lg")]: {
        fontSize: "17px !important",
        marginBottom: "8px !important",
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "20px !important",
        marginBottom: "35px !important",
      },
      [theme.breakpoints.up("xl")]: {
        fontSize: "28px !important",
        marginBottom: "49px !important",
      },
    },
    listQuantity: {
      fontWeight: "bold !important",
      [theme.breakpoints.down("lg")]: {
        fontSize: "17px !important",
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "34px !important",
        lineHeight: "1.2 !important",
      },
      [theme.breakpoints.up("xl")]: {
        fontSize: "60px !important",
        fontWeight: "bold !important",
        lineHeight: "1.2 !important",
      },
    },
  };
});
