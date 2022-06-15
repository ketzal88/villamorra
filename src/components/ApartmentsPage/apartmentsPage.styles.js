import { makeStyles } from "@mui/styles";

export const useApartmentsPageStyles = makeStyles((theme) => {
  return {
    agendaButton: {
      height: "83px !important",
      borderRadius: "46px !important",
      backgroundColor: `${theme.palette.primary.vmGreen} !important`,
      py: "28px",
      [theme.breakpoints.up("xl")]: {
        width: "356px !important",
      },
      [theme.breakpoints.down("xl")]: {
        width: "318px !important",
      },
      [theme.breakpoints.down("md")]: {
        margin: "0 auto !important",
        height: "50px !important",
        width: "250px !important",
        marginBottom: "25px !important",
      },
    },
    agendaText: {
      color: "white",
      fontWeight: "bold !important",
      [theme.breakpoints.up("lg")]: {
        fontSize: "21px !important",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "17px !important",
      },
      [theme.breakpoints.down("md")]: {
        fontSize: "12px !important",
      },
    },
    apartmentCard: {
      width: "100%",
      padding: "3% !important",
      backgroundColor: "#132127",
      borderRadius: "40px",
      margin: "0 0 43px 0 !important",
      textTransform: "none",
      [theme.breakpoints.down("md")]: {
        flexDirection: "column !important",
        paddingBottom: "6% !important"
      },
    },
    apartmentsContainer: {
      width: "100%",
    },
    apartmentImageContainer: {
      width: "25%",
      [theme.breakpoints.down("md")]: {
        width: "100%",
      },
    },
    apartmentImage: {
      height: "100%",
      width: "100%",
      [theme.breakpoints.down("md")]: {
        height: "33.33% !important",
        width: "100% !important",
      },
    },
    apartmentName: {
      fontSize: "50px !important",
      fontWeight: "700 !important",
      color: "white",
      [theme.breakpoints.down("md")]: {
        fontSize: "46px !important",
      },
    },
    apartmentSize: {
      fontSize: "28px !important",
      color: "white !important",
      [theme.breakpoints.down("md")]: {
        fontSize: "20px !important",
      },
    },
    apartamentosTitle: {
      marginTop: "72px !important",
      color: theme.palette.primary.syncBlue,
      [theme.breakpoints.up("md")]: {
        fontSize: "65px !important",
      },
      [theme.breakpoints.down("md")]: {
        fontSize: "28px !important",
      },
    },
    buttonsContainer: {
      alignItems: "flex-end !important",
      width: "40% !important",
      [theme.breakpoints.down("md")]: {
        width: "100% !important",
      },
    },
    buttons: {
      marginBottom: "30px !important",
      [theme.breakpoints.down("md")]: {
        marginBottom: "15px !important",
      },
    },
    cardBody: {
      [theme.breakpoints.up("lg")]: {
        width: "30% !important",
      },
      [theme.breakpoints.up("md")]: {
        width: "35% !important",
      },
      [theme.breakpoints.down("md")]: {
        width: "100% !important",
      },
    },
    codAreaField: {
      width: "30% !important",
      marginRight: "39px !important",
      [theme.breakpoints.down("sm")]: {
        marginRight: "20px !important",
        width: "50% !important",
      },
    },
    descargarButton: {
      height: "83px !important",
      borderRadius: "46px !important",
      borderColor: `${theme.palette.primary.vmGreen} !important`,

      py: "28px",
      [theme.breakpoints.up("xl")]: {
        width: "356px !important",
      },
      [theme.breakpoints.down("xl")]: {
        width: "318px !important",
      },
      [theme.breakpoints.down("md")]: {
        margin: "40px auto 20px auto !important",
        height: "50px !important",
        width: "250px !important",
      },
    },
    descargarText: {
      color: "white",
      fontWeight: "bold !important",
      letterSpacing: -0.9,
      [theme.breakpoints.up("lg")]: {
        fontSize: "21px !important",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "17px !important",
      },
      [theme.breakpoints.down("md")]: {
        fontSize: "12px !important",
      },
    },
    dormitoriosText: {
      fontSize: "28px !important",
      color: "white",
      [theme.breakpoints.down("md")]: {
        fontSize: "17px !important",
        fontWeight: "700 !important",
      },
    },
    filterBox: {
      display: "flex",
    },
    filtersContainer: {
      justifyContent: "flex-start",
      marginBottom: "80px !important",
      marginTop: "20px !important",
      [theme.breakpoints.down("md")]: {
        justifyContent: "space-between !important",
      },
    },
    modalApartmentImage: {
      width: "33.33% !important",
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
      [theme.breakpoints.down("sm")]: {
        display: "none !important",
      },
    },
    modalApartmentName: {
      fontSize: "78px !important",
      color: "white !important",
      fontWeight: "900 !important",
      lineHeight: "86px !important",
      fontStyle: "normal !important",
      [theme.breakpoints.down("sm")]: {
        "text-align": "center !important",
      },
    },
    modalApartmentImageMobile: {
      width: "100% !important",
      [theme.breakpoints.up("sm")]: {
        display: "none !important",
      },
      [theme.breakpoints.down("sm")]: {
        display: "block",
      },
    },
    modalBody: {
      width: "100% !important",
      p: "0 important!",
      marginBottom: "25px !important",
      [theme.breakpoints.down("sm")]: {
        alignItems: "center",
        flexDirection: "column !important",
      },
    },
    modalFields: {
      width: "33.33% !important",
      paddingLeft: "30px !important",
      paddingRight: "40px !important",
      [theme.breakpoints.down("sm")]: {
        width: "100% !important",
        paddingRight: "0 !important",
        paddingLeft: "0 !important",
      },
    },
    modalPisoText: {
      fontSize: "28px !important",
      color: "white !important",
      fontWeight: "600 !important",
      [theme.breakpoints.down("sm")]: {
        "text-align": "center",
      },
    },
    modalSizeText: {
      fontSize: "32px !important",
      color: "white !important",
      lineHeight: "43px !important",
      fontWeight: "600 !important",
    },
    modalTermsAndConditions: {
      color: "white !important",
      paddingLeft: "12px !important",
      [theme.breakpoints.down("sm")]: {
        display: "none !important",
      },
    },
    modalTermsAndConditionsMobile: {
      color: "white !important",
      paddingLeft: "12px !important",
      marginBottom: "10px !important",
      [theme.breakpoints.up("sm")]: {
        display: "none !important",
      },
    },
    modalWrapper: {
      backgroundColor: "#132127 !important",
      padding: "43px !important",
      borderRadius: "0px",
    },
    titleContainer: {
      marginBottom: "46px",
      width: "100%",
    },
    pisoText: {
      fontSize: "28px !important",
      color: "white",
      [theme.breakpoints.down("md")]: {
        fontSize: "17px !important",
        fontWeight: "700 !important",
      },
    },
    pisosFilter: {
      width: "25% !important",
      marginRight: "176px !important",
      [theme.breakpoints.down("md")]: {
        marginRight: "0 !important",
        width: "45% !important",
      },
    },
    telefonoField: {
      [theme.breakpoints.down("sm")]: {
        width: "50% !important",
      },
    },
    tiposFilter: {
      width: "25% !important",
      [theme.breakpoints.down("md")]: {
        width: "45% !important",
      },
    },
    wrapper: {
      alignItems: "center",
      padding: "0 100px",
      display: "flex",
      justifyContent: "center",
      width: "100%",
      [theme.breakpoints.up("xl")]: {
        maxWidth: "1920px",
      },
      [theme.breakpoints.down("md")]: {
        padding: "0 30px",
      },
    },
  };
});
