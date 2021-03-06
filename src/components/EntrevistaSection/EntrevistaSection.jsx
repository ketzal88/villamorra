import { Box, Stack, Typography, Grid, useMediaQuery } from "@mui/material";
import { usePrensaSectionStyles } from "./EntrevistaSection.style";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import vendedora from "../../assets/images/vendedora.jpg";
import phoneImage from "../../assets/images/chicaEntrevista.png";
import FormEntrevista from "./FormEntrevista";

const images = [
  {
    img: vendedora,
    sellerName: "Caterine Stenger",
    phoneNumber: "+595 99 2249501",
  },
];

const sellerChoosed = 0;
// Math.round(Math.random());

const EntrevistaSection = () => {
  const classes = usePrensaSectionStyles();
  const tablet = useMediaQuery((theme) => theme.breakpoints.up("sm"));
  return (
    <Stack direction="row" justifyContent="center" sx={{ overflow: "hidden" }}>
      <Box className={classes.wrapperSection}>
        <Typography variant="h2" className={classes.titleSection}>
          Agendemos una <br /> entrevista
        </Typography>
        <Stack
          direction={{ xs: "column", md: "row" }}
          sx={{ overflow: "hidden" }}
        >
          <Box className={classes.sellerImgContainer}>
            <Box className={classes.imgSellerBox}>
              <img
                src={tablet ? images[sellerChoosed].img : phoneImage}
                alt="Vendedor/a Sync"
                className={tablet ? classes.imgSeller : phoneImage}
              />
            </Box>
            <Stack
              direction={{ xs: "column", md: "row" }}
              alignItems={{ xs: "center" }}
              justifyContent={{ xs: "center", sm: "space-between" }}
              sx={{ paddingRight: { lg: "45px" }, boxSizing: "border-box" }}
              className={classes.sellerInfoContainer}
            >
              <Box>
                <Typography paragraph className={classes.sellerName}>
                  {images[sellerChoosed].sellerName}
                </Typography>
                <Grid container alignItems="center">
                  <WhatsAppIcon className={classes.whatsAppIcon} />
                  <Typography paragraph className={classes.sellerPhone}>
                    {images[sellerChoosed].phoneNumber}
                  </Typography>
                </Grid>
              </Box>
              <button
                className={classes.agendarEntrevistaButton}
                onClick={() =>
                  // eslint-disable-next-line no-undef
                  Calendly.initPopupWidget({
                    url: "https://calendly.com/vitriumcapital-maketing",
                  })
                }
              >
                <Typography>Agendar una Entrevista</Typography>
              </button>
            </Stack>
          </Box>
          <FormEntrevista />
        </Stack>
      </Box>
    </Stack>
  );
};

export default EntrevistaSection;
