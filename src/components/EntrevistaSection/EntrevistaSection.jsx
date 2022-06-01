import { Box, Stack, Typography } from "@mui/material";
import { usePrensaSectionStyles } from "./EntrevistaSection.style";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import cristian from "../../assets/images/Cristian Erosa.png";
import mariana from "../../assets/images/Mariana Martinez.png";
import FormEntrevista from "./FormEntrevista";

const images = [
  {
    img: mariana,
    sellerName: "Mariana Martinez",
    phoneNumber: "+598 97 446 111",
  },
  {
    img: cristian,
    sellerName: "Cristian Erosa",
    phoneNumber: "+598 97 446 111",
  },
];

const sellerChoosed = 1;
// Math.round(Math.random());

const EntrevistaSection = () => {
  const classes = usePrensaSectionStyles();
  return (
    <Stack direction="row" justifyContent="center" sx={{ overflow: "hidden" }}>
      <Box className={classes.wrapperSection}>
        <Typography variant="h2" className={classes.titleSection}>
          Agendemos una <br /> entrevista
        </Typography>
        <Stack direction={{ xs: "column", md: "row" }}>
          <Box className={classes.sellerImgContainer}>
            <img
              src={images[sellerChoosed].img}
              alt="Vendedor/a Sync"
              className={classes.imgSeller}
            />
            <Box className={classes.sellerContainer}>
              <Typography paragraph className={classes.sellerName}>
                {images[sellerChoosed].sellerName}
              </Typography>
              <Typography paragraph className={classes.sellerPhone}>
                <WhatsAppIcon className={classes.whatsAppIcon} />
                {images[sellerChoosed].phoneNumber}
              </Typography>
            </Box>
          </Box>
          <FormEntrevista />
        </Stack>
      </Box>
    </Stack>
  );
};

export default EntrevistaSection;
