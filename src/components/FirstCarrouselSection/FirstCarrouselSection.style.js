import { makeStyles } from "@mui/styles";

export const useFirstCarrouselSection = makeStyles((theme) => {
  return {
    wrapper: {
      maxWidth: "1920px",
      overflow: "hidden",
      flexWrap: "wrap",
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
      position: "relative",
      color: "white",
      width: "100%",
      paddingInline: "38px",
      paddingTop: "43px",
      paddingBottom: "52px !important",
      minHeight: "calc(533px - 95px)",
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
        padding: "163px 111px 0px 80px",
      },
    },
    subTitleSection: {
      fontWeight: "bold !important",
      fontSize: "24px !important",
      paddingTop: "40px !important",
      [theme.breakpoints.up("md")]: {
        paddingTop: "70px !important",
        fontSize: "34px !important",
      },
      [theme.breakpoints.up("xl")]: {
        paddingTop: "155px !important",
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
      position: "absolute",
      marginTop: "56px",
      bottom: 0,
      width: "72px",
      height: "72px",
      marginBottom: "52px",
      marginRight: "38px",
      right: 0,
      animation: "none !important",
      [theme.breakpoints.up("md")]: {
        right: "auto",
        marginBottom: "136px",
      },
      [theme.breakpoints.up("lg")]: {
        width: "74px",
        height: "74px",
      },
      [theme.breakpoints.up("xl")]: {
        marginBottom: "222px",
        width: "124px",
        height: "124px",
      },
    },
  };
});
