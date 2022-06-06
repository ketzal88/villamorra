import { makeStyles } from "@mui/styles";
import headerDesk from "../../assets/images/Desktop/header.jpg";
import headerLapt from "../../assets/images/1024/header.jpg";
import headerMob from "../../assets/images/mobile/header.jpg";

export const useLadingSectionStyles = makeStyles((theme) => {
  return {
    wrapper: {
      background:
        "transparent linear-gradient(0deg, #EAC752 0%, #FFFFFF00 100%) 0% 0% no-repeat padding-box",
      backgroundImage: `url(${headerMob})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      height: "930px",
      backgroundPosition: "36% 0px",
      minHeight: "745px",
      paddingTop: "296px",
      paddingLeft: "38px",
      [theme.breakpoints.up("md")]: {
        backgroundImage: `url(${headerLapt})`,
        backgroundPosition: "center",
      },
      [theme.breakpoints.up("lg")]: {
        backgroundImage: `url(${headerDesk})`,
        minHeight: "745px",
        paddingLeft: "98px",
      },
      [theme.breakpoints.up("xl")]: {
        minHeight: "1080px",
        paddingLeft: "98px",
        paddingTop: "492px",
        maxWidth: "1920px",
      },
    },
    textWrapper: {
      color: "white",
    },
    location: {
      fontSize: "24px !important",
      marginBottom: "12px !important",
      [theme.breakpoints.up("xl")]: {
        fontSize: "30px !important",
        marginBottom: "10px !important",
      },
    },
    mainTitle: () => ({
      fontSize: "45px !important",
      // maxWidth: "min-content",
      marginBottom: "162px !important",
      "& :nth-child(2)": {
        marginLeft: "10px",
      },
      [theme.breakpoints.up("sm")]: {
        fontSize: "48px !important",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "60px !important",
        maxWidth: "100%",
        marginBottom: "64px !important",
        "& :nth-child(2)": {
          marginLeft: "0px",
          "&:before": {
            content: "'\\a'",
            whiteSpace: "pre",
          },
        },
      },
    }),
    buttonWrapper: {
      paddingRight: "38px",
      display: "flex",
      flexWrap: "wrap",
      marginTop: "64px",
      marginBottom: "244px",
      [theme.breakpoints.up("md")]: {
        flexWrap: "nowrap",
        paddingRight: "0px",
      },
      [theme.breakpoints.up("lg")]: {
        marginTop: "64px",
        marginBottom: "244px",
      },
    },
    apartamentsButton: {
      width: "100%",
      border: 0,
      backgroundColor: theme.palette.primary.syncBlue,
      color: "white",
      marginBottom: "40px",
      "&:active, &:hover": {
        boxShadow: "none",
        backgroundColor: theme.palette.primary.syncBlue,
        borderColor: "none",
      },
      marginRight: "0px",
      borderRadius: "46px",
      fontSize: "17px",
      fontWeight: "bold",
      padding: "32px 46px",
      [theme.breakpoints.up("md")]: {
        marginRight: "20px",
        width: "50%",
        marginBottom: "0px",
      },
      [theme.breakpoints.up("lg")]: {
        borderRadius: "46px",
        marginBottom: "0px",
        fontSize: "17px",
        fontWeight: "bold",
        padding: "32px 46px",
        marginRight: "20px",
      },
      [theme.breakpoints.up("xl")]: {
        borderRadius: "46px",
        fontSize: "22px",
        fontWeight: "bold",
        padding: "23px 64px",
        marginRight: "20px",
      },
    },
    recorridoButton: {
      width: "100%",
      whiteSpace: "nowrap",
      "&:active, &:hover": {
        boxShadow: "none",
        backgroundColor: "transparent",
        borderColor: "none",
      },
      backgroundColor: "transparent",
      border: "1px solid white",
      color: "white",
      borderRadius: "46px",
      fontSize: "17px",
      fontWeight: "bold",
      padding: "32px 46px",
      [theme.breakpoints.up("md")]: {
        width: "50%",
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "17px",
        fontWeight: "bold",
        padding: "32px 46px",
      },
      [theme.breakpoints.up("xl")]: {
        backgroundColor: "transparent",
        border: "1px solid white",
        fontSize: "22px",
        fontWeight: "bold",
        padding: "23px 64px",
      },
    },
  };
});
