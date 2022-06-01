import { makeStyles } from "@mui/styles";

export const useFirstCarrouselSection = makeStyles((theme) => {
  return {
    wrapper: {
      maxWidth: "1920px",
      overflow: "hidden",
      flexWrap: "wrap",
      paddingBottom: "52px !important",
      [theme.breakpoints.up("md")]: {
        height: "768px",
        flexWrap: "nowrap",
        paddingBottom: "0px !important",
      },
      [theme.breakpoints.up("lg")]: {
        height: "768px",
      },
      [theme.breakpoints.up("xl")]: {
        height: "1080px",
      },
    },
    imageSection: {
      objectFit: "cover",
      height: "100%",
      width: "100%",
    },
    carrouselNumber: {
      color: "white",
      bottom: 0,
      right: 0,
      fontSize: "24px !important",
      transform: "translate(-70px, -62px)",
      [theme.breakpoints.up("lg")]: {
        fontSize: "40px !important",
      },
      [theme.breakpoints.up("xl")]: {
        transform: "translate(-70px, -62px)",
        fontSize: "30px !important",
      },
    },
    selectedSlide: {
      fontWeight: "bold !important",
    },
    textBox: {
      color: "white",
      width: "100%",
      paddingInline: "38px",
      paddingTop: "43px",
      [theme.breakpoints.up("md")]: {
        paddingInline: "112px",
        paddingTop: "136px",
        width: "602px",
      },
      [theme.breakpoints.up("lg")]: {
        paddingInline: "112px",
        paddingTop: "136px",
      },
      [theme.breakpoints.up("xl")]: {
        paddingLeft: "80px",
        paddingRight: "111px",
        paddingTop: "236px",
      },
    },
    titleSection: {
      fontSize: "34px !important",
      fontWeight: "700 !important",
      [theme.breakpoints.up("md")]: {
        fontSize: "48px !important",
      },
      [theme.breakpoints.up("xl")]: {
        fontSize: "60px !important",
      },
    },
    subTitleSection: {
      fontWeight: "bold !important",
      fontSize: "24px !important",
      paddingTop: "40px !important",
      [theme.breakpoints.up("md")]: {
        paddingTop: "60px",
        fontSize: "34px !important",
      },
      [theme.breakpoints.up("xl")]: {
        paddingTop: "80px",
        fontSize: "46px !important",
      },
    },
    text: {
      letterSpacing: "0px !important",
      display: "-webkit-box !important",
      "-webkit-box-orient": "vertical !important",
      overflow: "hidden",
      textOverflow: "ellipsis",
      "-webkit-line-clamp": "7 !important",
      lineClamp: "7 !important",
      marginTop: "26px !important",
      [theme.breakpoints.up("md")]: {
        fontSize: "20px !important",
        marginTop: "24px !important",
        "-webkit-line-clamp": "6 !important",
        lineClamp: "6 !important",
      },
      [theme.breakpoints.up("xl")]: {
        fontSize: "23px !important",
        marginTop: "13px !important",
        letterSpacing: "0px !important",
      },
    },
    arrowContainer: {
      marginTop: "56px",
      marginLeft: "auto",
      width: "72px",
      height: "72px",
      [theme.breakpoints.up("md")]: {
        marginLeft: "0px",
        marginTop: "71px",
      },
      [theme.breakpoints.up("lg")]: {
        marginTop: "68px",
        width: "74px",
        height: "74px",
      },
      [theme.breakpoints.up("xl")]: {
        marginTop: "76px",
        width: "124px",
        height: "124px",
      },
    },
  };
});
