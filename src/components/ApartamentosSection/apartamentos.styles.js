import { makeStyles } from "@mui/styles";

export const useApartamentsStyles = makeStyles((theme) => ({
  container: {
    maxWidth: "1920px",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      height: "998px",
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: "50px",
      height: "852px",
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: "72px",
      height: "1072px",
    },
    [theme.breakpoints.up("xl")]: {
      paddingBlock: "40px",
      height: "1280px",
    },
  },
  sectionTitle: {
    paddingTop: "72px !important",
    fontSize: "34px !important",
    paddingBottom: "42px",
    paddingLeft: "92px",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "0px",
      textAlign: "center"
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: "50px !important",
    },
    [theme.breakpoints.up("lg")]: {
      paddingLeft: "100px",
      paddingBottom: "40px",
      fontSize: "48px !important",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "60px !important",
    },
  },
  imgContainer: {
    objectFit: "cover",
    width: "100%",
    height: "527px",
    color: "white",
    [theme.breakpoints.up("md")]: {
      width: "696px",
      height: "391.5px",
    },
    [theme.breakpoints.up("lg")]: {
      width: "956px",
      height: "538px",
    },
    [theme.breakpoints.up("xl")]: {
      width: "1200px",
      height: "700px",
    },
    [theme.breakpoints.up("sm")]: {
      height: "391px",
    },
    [theme.breakpoints.down("sm")]: {
      height: "250px"
    }
  },
  videoArrow: {
    position: "absolute",
    zIndex: 2,
    cursor: "pointer",
    top: "5%",
    [theme.breakpoints.up("sm")]: {
      top: "20%"
    }
  },
  subTitle: {
    textAlign: "center !important",
    marginTop: "40px !important",
    [theme.breakpoints.down("lg")]: {
      fontSize: "34px !important",
      marginTop: "28px !important",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "48px !important",
      marginTop: "39px !important",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "60px !important",
      marginTop: "11px !important",
    },
  },
  text: {
    textAlign: "center !important",
    [theme.breakpoints.down("lg")]: {
      fontSize: "20px !important",
      marginTop: "19px !important",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "24px !important",
      marginTop: "17px !important",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "28px !important",
      marginTop: "15px !important",
    },
  },
  button: {
    backgroundColor: theme.palette.primary.syncBlue,
    color: theme.palette.primary.vmGreen,
    padding: "32px 90px",
    marginTop: "40px",
    borderRadius: "46px",
    fontSize: "17px !important",
    [theme.breakpoints.up("md")]: {
      marginTop: "28px",
    },
    [theme.breakpoints.up("xl")]: {
      marginTop: "25px",
      fontSize: "22px !important",
      padding: "26px 95px",
    },
  },
}));
