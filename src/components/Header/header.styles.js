import { makeStyles } from "@mui/styles";

export const useHeaderStyles = makeStyles((theme) => {
  return {
    headerWrapper: {
      top: 0,
      position: ({ isHomePage }) => (isHomePage ? "fixed" : "relative"),
      backgroundColor: ({ isHomePage }) =>
        isHomePage ? "transparent" : theme.palette.primary.syncBlue,
      maxWidth: ({ isHomePage }) => (isHomePage ? "1920px" : "100%"),
      width: "100%",
      left: "50%",
      transform: "translateX(-50%)",
      display: "flex",
      justifyContent: "center",
    },
    textWrapper: {
      position: ({ isHomePage }) => (isHomePage ? "absolute" : "relative"),
      maxWidth: ({ isHomePage }) => (isHomePage ? "100%" : "1920px"),
      width: ({ isHomePage }) => (isHomePage ? "auto" : "100%"),
      display: "flex",
      left: "-1px",
      right: "0",
      zindex: "10",
      justifyContent: "space-between",
      backgroundColor: ({ isHomePage, isOverLandingSection }) => {
        if (!isHomePage) return theme.palette.primary.syncBlue;
        if (isOverLandingSection) return "transparent";
        else return theme.palette.primary.syncBlue;
      },
      [theme.breakpoints.down("md")]: {
        paddingInline: "38px",
        paddingTop: "0px",
      },
      [theme.breakpoints.up("md")]: {
        paddingLeft: "80px",
        paddingRight: "112px",
        paddingTop: "86px",
      },
      [theme.breakpoints.up("xl")]: {
        paddingLeft: "91px",
        paddingRight: "111px",
      },
    },
    drawerBox: {
      paddingTop: "50px",
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
    },
    logo: {
      marginTop: "0px",
      [theme.breakpoints.down("lg")]: {
        width: "132px",
        height: "136px",
      },
      [theme.breakpoints.up("lg")]: {
        marginTop: "-30px",
        width: "132px",
        height: "136px",
      },
    },
    linksContainer: {
      marginTop: "23px",
      [theme.breakpoints.down("md")]: {
        display: "none",
      },
    },
    navLink: {
      textShadow: "0px 3px 6px #00000060",
      [theme.breakpoints.down("lg")]: {
        padding: "12px",
        marginTop: "12px",
        paddingRight: "24px",
        fontSize: "14px",
      },
      [theme.breakpoints.up("lg")]: {
        marginTop: "12px",
        paddingRight: "24px",
        fontSize: "17px",
      },
      [theme.breakpoints.up("xl")]: {
        marginTop: "23px",
        paddingRight: "24px",
        fontSize: "23px",
      },
    },
    LinkVitrium: {
      fontWeight: "bold",
      [theme.breakpoints.down("lg")]: {
        display: "none",
      },
      [theme.breakpoints.up("lg")]: {
        display: "flex",
      },
    },
    imgContainer: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "center",
      backgroundColor: "transparent",
      height: "115px",
      [theme.breakpoints.up("md")]: {
        width: "102px",
        height: "167px",
        backgroundColor: "#0A1217",
        border: "1px solid #707070",
        borderRadius: "0px 0px 23px 23px;",
        marginTop: "-86px",
      },
      [theme.breakpoints.up("lg")]: {
        width: "114px",
        height: "187px",
        backgroundColor: "#0A1217",
        border: "1px solid #707070",
        borderRadius: "0px 0px 23px 23px;",
      },
    },
    imgStyles: {
      width: "24px",
      height: "24px",
      padding: "12px",
      [theme.breakpoints.down("lg")]: {
        marginBottom: "18px",
        backgroundColor: "white",
        borderRadius: "50%",
        padding: "17.48px",
        width: "33px",
        height: "33px",
      },
      [theme.breakpoints.up("lg")]: {
        marginBottom: "20px",
        backgroundColor: "white",
        borderRadius: "50%",
        padding: "17.48px",
        width: "37.4px",
        height: "37.4px",
      },
    },
  };
});
