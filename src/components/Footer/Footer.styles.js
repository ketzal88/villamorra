import { makeStyles } from "@mui/styles";

export const useFooterStyles = makeStyles((theme) => ({
  footerContainer: {
    maxWidth: "1920px",
    width: "100%",
    color: "white",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    paddingBlock: "72px",
    [theme.breakpoints.up("sm")]: {
      justifyContent: "space-between",
      paddingLeft: "0px",
      paddingRight: "0px",
    },
    [theme.breakpoints.up("lg")]: {
      paddingBlock: "111px",
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "32px"
    }
  },
  footerContent: {
    [theme.breakpoints.up("lg")]: {
      width: "100%",
      paddingLeft: "80px",
      paddingRight: "111px",
    },
  },
  subTitle: {
    display: "none",
    fontWeight: "bold !important",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      fontSize: "20px !important",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "24px !important",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "30px !important",
    },
  },
  text: {
    fontSize: "17px !important",
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px !important",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "14px !important",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "20px !important",
    },
  },
  socialMedias: {
    [theme.breakpoints.down("xl")]: {
      // display: "none",
    },
    [theme.breakpoints.down("sm")]: {
      paddingRight: "64px"
    },
  },
  logoFooter: {
    width: "168px",
    height: "88px",
    // marginBottom: "72px",
    [theme.breakpoints.up("md")]: {
      // marginLeft: "80px",
      marginBotom: "0px",
    },
  },
}));
