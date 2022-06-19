import { makeStyles } from "@mui/styles";

export const useFooterStyles = makeStyles((theme) => ({
  footerContainer: {
    maxWidth: "1920px",
    width: "100%",
    color: "white",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 !important",
    margin: "0 !important",
    paddingTop: "72px !important",
    textAlign: "center",
    [theme.breakpoints.up("sm")]: {
      textAlign: "left",
      justifyContent: "space-between",
      paddingLeft: "0px",
      paddingRight: "0px",
    },
    [theme.breakpoints.up("md")]: {
      padding: "50px 0px !important",
    },
    [theme.breakpoints.up("lg")]: {
      paddingBlock: "111px",
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "32px",
    },
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
  socialMedias: {},
  lgoFooterContainer: {
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      textAlign: "center",
      marginLeft: "-20px !important",
    },
  },
  logoFooter: {
    width: "168px",
    height: "88px",
    [theme.breakpoints.up("md")]: {
      marginBotom: "0px",
    },
    [theme.breakpoints.down("xs")]: {},
  },
}));
