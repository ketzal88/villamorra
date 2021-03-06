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
      alignItems: "center",
      backgroundColor: ({ isHomePage, isOverLandingSection }) => {
        if (!isHomePage) return theme.palette.primary.syncBlue;
        if (isOverLandingSection) return "transparent";
        else return theme.palette.primary.syncBlue;
      },
      height: "84px",
      [theme.breakpoints.up("sm")]: {
        height: "auto",
        alignItems: "flex-start",
      },
      [theme.breakpoints.down("md")]: {
        paddingInline: "38px",
        paddingTop: "0px",
      },
      [theme.breakpoints.up("md")]: {
        paddingLeft: "80px",
        paddingRight: "112px",
        paddingTop: "35px",
      },
      [theme.breakpoints.up("lg")]: {
        paddingTop: "35px",
      },
      [theme.breakpoints.up("xl")]: {
        paddingLeft: "98px",
        paddingRight: "111px",
      },
    },
    drawerBox: {
      [theme.breakpoints.up("sm")]: {
        paddingTop: "50px",
      },
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
    },
    drawerCloseButton: {
      // backgroundColor: "red !important",
      position: "absolute !important",
      right: "30px",
    },
    logo: {
      width: "70px",
      position: "absolute",
      left: "50%",
      top: "2px",
      transform: "translateX(-50%)",
      [theme.breakpoints.up("sm")]: {
        position: "relative",
        marginTop: 0,
        width: "132px",
        height: "136px",
        marginLeft: "-44px",
      },
      [theme.breakpoints.up("md")]: {
        marginTop: "-30px",
        marginLeft: "-20px",
        width: "132px",
        height: "95px",
      },
    },
    linksContainer: {
      marginTop: "6px", //
      [theme.breakpoints.down("md")]: {
        display: "none",
      },
    },
    navLink: {
      textShadow: "0px 3px 6px #00000060",
      [theme.breakpoints.down("lg")]: {
        padding: "12px",
        paddingRight: "24px",
        fontSize: "14px",
      },
      [theme.breakpoints.up("md")]: {
        marginTop: "0px",
        paddingRight: "24px",
        fontSize: "12px",
        fontWeight: "700",
      },
      [theme.breakpoints.up("xl")]: {
        marginTop: "0px",
        paddingRight: "24px",
        fontSize: "14px",
      },
    },
    LinkVitrium: {
      fontWeight: "bold",
      [theme.breakpoints.down("lg")]: {
        display: "none",
      },
      [theme.breakpoints.up("lg")]: {
        display: "flex",
        paddingTop: "7px",
      },
    },
    customerService: {
      backgroundColor: "white",
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
