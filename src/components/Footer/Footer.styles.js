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
      paddingBlock: "53px",
      paddingLeft: "53px",
      paddingRight: "93px",
    },
    [theme.breakpoints.up("lg")]: {
      paddingBlock: "111px",
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
    [theme.breakpoints.up("sm")]: {
      fontSize: "20px !important",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "14px !important",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "20px !important",
    },
  },
  socialMedias: {
    [theme.breakpoints.down("xl")]: {
      display: "none",
    },
  },
  logoFooter: {
    width: "168px",
    height: "88px",
    marginBottom: "72px",
    [theme.breakpoints.up("md")]: {
      // marginLeft: "80px",
      marginBotom: "0px",
    },
  },
}));
