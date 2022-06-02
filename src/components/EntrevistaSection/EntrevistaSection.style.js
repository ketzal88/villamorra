import { makeStyles } from "@mui/styles";

export const usePrensaSectionStyles = makeStyles((theme) => ({
  wrapperSection: {
    maxWidth: "1920px",
    width: "100%",
    boxSizing: "border-box",
    position: "relative",
    [theme.breakpoints.down("lg")]: {
      minHeight: "1006px",
    },
    [theme.breakpoints.up("xl")]: {
      minHeight: "1151px",
    },
  },
  titleSection: {
    fontSize: "48px !important",
    paddingLeft: "33px",
    marginTop: "62px !important",
    [theme.breakpoints.up("md")]: {
      marginLeft: "93px !important",
    },
    [theme.breakpoints.up("lg")]: {
      marginBottom: "72px !important",
    },
    [theme.breakpoints.up("xl")]: {
      marginLeft: "100px !important",
      fontSize: "60px !important",
      marginBottom: "80px !important",
    },
  },
  formContainer: {
    display: "flex",
    flexWrap: "wrap",
    alignContent: "flex-start",
    justifyContent: "center",
    order: "-1",
    marginTop: "75px",
    rowGap: "58px",
    [theme.breakpoints.up("md")]: {
      marginTop: "92px",
      order: "1",
      columnGap: "26px",
      paddingRight: "91px",
      marginLeft: "-50px",
    },
    [theme.breakpoints.up("lg")]: {
      columnGap: "112px",
      rowGap: "58px",
      paddingRight: "108px",
      marginLeft: "-50px",
    },
    [theme.breakpoints.up("xl")]: {
      rowGap: "100px",
      paddingRight: "118px",
      paddingLeft: "71px",
    },
  },
  formControl: {
    [theme.breakpoints.down("lg")]: {
      width: "336px",
      height: "79px",
    },
    [theme.breakpoints.up("lg")]: {
      width: "368px",
    },
    [theme.breakpoints.up("xl")]: {
      width: "534px",
    },
  },
  selectInput: {
    marginTop: "44px !important",
    height: "79px",
    "& .MuiSelect-select": {
      borderBottom: `4px solid #74A444`,
      "&:before": {
        borderBottom: `4px solid #74A444`,
      },
      "&:after, &:hover, &:active, &:focus": {
        borderBottom: `4px solid #74A444`,
      },
    },
  },
  codAreaForm: {
    [theme.breakpoints.down("lg")]: {
      width: "118px",
    },
    [theme.breakpoints.up("lg")]: {
      width: "100px",
    },
    [theme.breakpoints.up("xl")]: {
      visibility: "visible",
      marginRight: "45px !important",
      width: "175px",
    },
  },
  phoneNumberInput: {
    [theme.breakpoints.down("lg")]: { width: "192px" },
    [theme.breakpoints.up("lg")]: { width: "228px" },
    [theme.breakpoints.up("xl")]: { width: "280px" },
  },
  inputLabel: {
    marginLeft: "-15px !important",
    fontSize: "30px !important",
    color: "#707070 !important",
    "&:after, &:active, &:focus": {
      fontSize: "30px !important",
      color: "#707070 !important",
    },
  },
  inputForm: {
    "&.MuiInput-root": {
      "&:hover": {
        borderBottom: "4px solid #74A444 !important",
        "&:not(.Mui-disabled):before": {
          borderBottom: "none",
        },
      },
      "&:before, &:after": {
        borderBottom: "none",
        "&:hover, &:active, &:focus": {
          borderBottom: "none",
        },
      },
      "&:hover, &:active, &:focus": {
        borderBottom: "none",
        "&:before, &:after": {
          borderBottom: "none",
        },
      },
    },
  },
  underlineInput: {
    borderBottom: `4px solid #74A444`,
    marginTop: "44px !important",
  },
  sellerImgContainer: {
    position: "relative",
    marginBottom: "-1px",
    [theme.breakpoints.up("md")]: {
      marginTop: "388px",
      height: "506px",
    },
    [theme.breakpoints.up("lg")]: {
      marginTop: "72px",
      height: "821px",
    },
  },
  sellerContainer: {
    backgroundColor: "#132127",
    [theme.breakpoints.down("lg")]: {
      paddingTop: "18px",
      width: "301px",
      height: "90px",
      borderTopRightRadius: "145px",
      position: "absolute",
      bottom: "0",
      paddingLeft: "53px",
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: "35px",
      width: "388px",
      borderTopRightRadius: "145px",
      position: "absolute",
      bottom: "0",
      paddingLeft: "93px",
    },
  },
  sellerName: {
    color: theme.palette.primary.vmGreen,
    fontWeight: "bold !important",
    marginBottom: "0px !important",
    [theme.breakpoints.down("lg")]: {
      fontSize: "18px !important",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "30px !important",
    },
  },
  sellerPhone: {
    color: "white",
    [theme.breakpoints.down("lg")]: {
      fontSize: "18px !important",
      marginBottom: "26px !important",
      lineHeight: "-1.3 !important",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "30px !important",
      marginBottom: "35px !important",
      lineHeight: "-1.3 !important",
    },
  },
  whatsAppIcon: {
    verticalAlign: "middle",
    [theme.breakpoints.down("lg")]: {
      marginTop: "-8px",
      width: "9px",
      height: "9px",
    },
    [theme.breakpoints.up("lg")]: {
      marginTop: "-8px",
      width: "39px",
      height: "39px",
    },
  },
  imgSeller: {
    objectFit: "contain",
    height: "716px",
    marginTop: "90px",
    transform: "translateX(-20%)",
    [theme.breakpoints.up("md")]: {
      height: "506px",
      width: "271px",
      transform: "translateX(-10%) translateY(-13%)",
    },
    [theme.breakpoints.up("lg")]: {
      height: "676px",
      width: "457px",
      marginTop: "0px",
      transform: "translateX(-13%) translateY(5%)",
    },
    [theme.breakpoints.up("xl")]: {
      height: "676px",
      width: "457px",
      transform: "translateX(-10%) translateY(11.3%)",
    },
  },
  radioButton: {
    "& svg": {
      width: "48px",
      height: "48px",
      color: theme.palette.primary.vmGreen,
      borderRadius: "50%",
      "&:active": {
        borderRadius: "50%",
      },
    },
  },
  labelRadioButton: {
    typography: {
      fontSize: "20px !important",
      color: "#132127",
    },
  },
  buttonContainer: {
    display: "flex",
    width: "100%",
  },
  buttonSubmit: {
    backgroundColor: theme.palette.primary.syncBlue,
    color: theme.palette.primary.vmGreen,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "nowrap",
    borderRadius: "46px",
    fontWeight: "bold",
    padding: "33px 0px 33px 0px",
    width: "100%",
    fontSize: "17px",
    textAlign: "center",
    [theme.breakpoints.up("sm")]: {
      maxWidth: "336px",
    },
    [theme.breakpoints.up("lg")]: {
      padding: "29px 0px 29px 134px",
      fontSize: "17px",
      marginTop: "86px",
      maxWidth: "372px",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "22px",
      marginTop: "62px",
    },
  },
  carrotButton: {
    color: "white",
    [theme.breakpoints.up("md")]: {
      marginLeft: "97px",
    },
    [theme.breakpoints.up("xl")]: {
      marginLeft: "88px",
      paddingRight: "42px",
    },
  },
}));
