import { makeStyles } from "@mui/styles";

export const useAmennitiesSectionStyles = makeStyles((theme) => {
  return {
    wrapperSection: {
      maxWidth: "1920px",
      width: "100%",
      [theme.breakpoints.up("md")]: {
        height: "680px",
      },
      [theme.breakpoints.up("lg")]: {
        height: "772px",
      },
      [theme.breakpoints.up("xl")]: {
        height: "1080px",
      },
    },
    titleWrapper: {
      marginTop: "-1px",
      width: "100%",
      backgroundColor: "white",
    },
    titleSection: {
      backgroundColor: "white",
      width: "100%",
      maxWidth: "1920px",
      [theme.breakpoints.down("lg")]: {
        display: "none",
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "48px !important",
        marginLeft: "100px !important",
        marginBottom: "59px !important",
      },
      [theme.breakpoints.up("xl")]: {
        fontSize: "60px !important",
        marginBottom: "73px !important",
      },
    },
    titleSection1: {
      fontSize: "34px !important",
      [theme.breakpoints.up("md")]: {
        fontSize: "48px !important",
      },
      [theme.breakpoints.up("xl")]: {
        fontSize: "60px !important",
      },
    },
    subTitleSection: {
      fontWeight: "bold !important",
      marginTop: "40px !important",
      fontSize: "24px !important",
      [theme.breakpoints.up("md")]: {
        fontSize: "34px !important",
        marginTop: "97px !important",
      },
      [theme.breakpoints.up("lg")]: {
        marginTop: "83px !important",
      },
      [theme.breakpoints.up("xl")]: {
        fontSize: "46px !important",
        marginTop: "143px !important",
      },
    },
    amenitiesGallery: {
      backgroundColor: theme.palette.primary.syncBlue,
      overflow: "hidden",
      color: "white",
      display: "flex",
      flexWrap: "wrap",
      [theme.breakpoints.up("md")]: {
        flexWrap: "nowrap",
      },
    },
    textWrapper: {
      width: "100%",
      position: "relative",
      padding: "43px 38px 52px",
      height: "438px",
      [theme.breakpoints.up("md")]: {
        height: "calc(100% - 163px)",
        padding: "83px 92px 0px 92px",
      },
      [theme.breakpoints.up("lg")]: {
        height: "calc(100% - 166px)",
        padding: "83px 122px 83px 100px",
      },
      [theme.breakpoints.up("xl")]: {
        height: "calc(100% - 254px)",
        padding: "254px 91px 0px 100px",
      },
    },
    textSection: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      fontWeight: "normal !important",
      display: "-webkit-box !important",
      "-webkit-box-orient": "vertical !important",
      fontSize: "17px !important",
      marginTop: "24px !important",
      marginBottom: "58px !important",
      [theme.breakpoints.up("md")]: {
        fontSize: "20px !important",
        marginBottom: "92px !important",
        "-webkit-line-clamp": "6 !important",
        lineClamp: "6 !important",
      },
      [theme.breakpoints.up("lg")]: {
        "-webkit-line-clamp": "8 !important",
        lineClamp: "8 !important",
      },
      [theme.breakpoints.up("xl")]: {
        marginTop: "20px !important",
        fontSize: "23px !important",
        "-webkit-line-clamp": "4 !important",
        lineClamp: "4 !important",
        lineHeight: "1.35 !important",
      },
    },
    arrowCounterContainer: {
      position: "absolute",
      marginBottom: "52px",
      bottom: 0,
      left: 0,
      right: 0,
      marginLeft: "100px",
      marginRight: "91px",
      [theme.breakpoints.up("md")]: {
        marginBottom: "83px",
      },
      [theme.breakpoints.up("lg")]: {
        marginBottom: "92px",
      },
    },
    carrouselNumber: {
      fontSize: "24px !important",
      [theme.breakpoints.up("xl")]: {
        fontSize: "30px !important",
      },
    },
    selectedSlide: {
      fontWeight: "bold !important",
    },
    iconContainer: {
      order: "2",
      width: "72px",
      height: "72px",
      [theme.breakpoints.up("md")]: {
        order: "-1",
      },
      [theme.breakpoints.up("xl")]: {
        width: "108px",
        height: "108px",
      },
    },
    imgSection: {
      width: "100%",
      order: "-1",
      height: "391px",
      objectFit: "cover",
      [theme.breakpoints.up("md")]: {
        order: "1",
        maxWidth: "432px",
        height: "772px",
      },
      [theme.breakpoints.up("lg")]: {
        maxWidth: "774px",
      },
      [theme.breakpoints.up("xl")]: {
        maxWidth: "1240px",
        height: "1080px",
      },
    },
  };
});
