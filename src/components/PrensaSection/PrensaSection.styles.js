import { makeStyles } from "@mui/styles";

export const usePrensaSectionStyles = makeStyles((theme) => ({
  wrapperSection: {
    maxWidth: "1920px",
    width: "100%",
    [theme.breakpoints.down("lg")]: {
      padding: "49px 0px 147px 100px",
      maxWidth: "calc(1024px - 100px)",
      height: "calc(901px - 196px)",
    },
    [theme.breakpoints.up("lg")]: {
      padding: "49px 112px 147px 100px",
      maxWidth: "calc(1366px - 212px)",
      height: "calc(770px - 196px)",
    },
    [theme.breakpoints.up("xl")]: {
      padding: "85px 100px 0px 100px",
      maxWidth: "calc(1920px - 230px)",
      height: "calc(1140px - 85px)",
    },
  },
  titleSection: {
    [theme.breakpoints.up("md")]: {
      marginBottom: "68px !important",
      fontSize: "48px !important",
    },
    [theme.breakpoints.up("xl")]: {
      marginBottom: "71px !important",
      fontSize: "65px !important",
    },
  },
  elementIMG: {
    width: "100%",
    borderRadius: "20px 20px 0px 0px",
    [theme.breakpoints.up("md")]: {
      height: "223px",
    },
    [theme.breakpoints.up("xl")]: {
      height: "328px",
    },
  },
  elementsContainer: {
    display: "flex",
    width: "100%",
    overflowX: "auto",
    [theme.breakpoints.down("lg")]: {
      gap: "26px",
    },
    [theme.breakpoints.up("lg")]: {
      gap: "24px",
    },
    [theme.breakpoints.up("xl")]: {
      gap: "31px",
    },
  },
  elementWrapper: {
    [theme.breakpoints.down("lg")]: {
      minWidth: "407px",
    },
    [theme.breakpoints.up("lg")]: {
      minWidth: "368px",
    },
    [theme.breakpoints.up("xl")]: {
      minWidth: "549px",
    },
  },
  elementTextWrapper: {
    backgroundColor: "#F7F7F7",
    borderRadius: "0px 0px 20px 20px",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      padding: "25px 23px 0px 24px",
      height: "330px",
      rowGap: "9px",
    },
    [theme.breakpoints.up("xl")]: {
      padding: "38px 38px 0px 32px",
      height: "356px",
      rowGap: "60px",
    },
  },
  elementTitle: {
    fontWeight: "bold !important",
    [theme.breakpoints.up("md")]: {
      fontSize: "24px !important",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "30px !important",
    },
  },
  elementDate: {
    [theme.breakpoints.up("md")]: {
      fontSize: "20px !important",
    },
    [theme.breakpoints.up("xl")]: {
      display: "none",
    },
  },
  elementText: {
    display: "-webkit-box !important",
    "-webkit-box-orient": "vertical !important",
    overflow: "hidden",
    textOverflow: "ellipsis",
    [theme.breakpoints.up("md")]: {
      fontSize: "14px !important",
      "-webkit-line-clamp": "4 !important",
      lineClamp: "4 !important",
    },
    [theme.breakpoints.up("md")]: {
      "-webkit-line-clamp": "5 !important",
      lineClamp: "5 !important",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "24px !important",
      "-webkit-line-clamp": "2 !important",
      lineClamp: "2 !important",
    },
  },
  elementButton: {
    color: "black",
    fontWeight: "bold !important",
    textDecoration: "underline",
    cursor: "pointer",
    [theme.breakpoints.up("lg")]: {
      fontSize: "17px !important",
    },
    [theme.breakpoints.up("xl")]: {
      color: "black",
      fontSize: "24px !important",
    },
  },
}));
