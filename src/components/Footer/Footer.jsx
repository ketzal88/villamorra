import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import facebook from "../../assets/images/facebook.svg";
import instagram from "../../assets/images/instagram.svg";
import linkedin from "../../assets/images/linkedin.svg";
import youtube from "../../assets/images/youtube.svg";
import { useFooterStyles } from "./Footer.styles";
import logo from "../../assets/images/logoFooter.svg";

const Footer = () => {
  const classes = useFooterStyles();
  return (
    <Stack
      direction="row"
      justifyContent="center"
      sx={{
        backgroundColor: (theme) => theme.palette.primary.syncBlue,
      }}
    >
      <Stack
        component="footer"
        direction={{ xs: "column", md: "row" }}
        className={classes.footerContainer}
        justifyContent={{ xs: "center" }}
      >
        <Stack
          id="contactSection"
          className={classes.footerContent}
          direction={{ xs: "column", md: "row" }}
          justifyContent={{ xs: "center", lg: "space-between" }}
          alignItems={{ xs: "center", sm: "start", md: "space-between" }}
          flexWrap="wrap"
          rowGap={{ xs: "72px", md: "0px" }}
          columnGap={{ md: "102px", lg: "50px" }}
        >
          <Box
            className={classes.lgoFooterContainer}
            justifyContent={{ xs: "center" }}
          >
            <a
              href="https://vitriumcapital.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className={classes.logoFooter} src={logo} alt="Logo Sync" />
            </a>
          </Box>
          <Box className={classes.contacto}>
            <Typography variant="h5" className={classes.subTitle}>
              Contacto
            </Typography>
            <Typography paragraph className={classes.text}>
              Paraguay: <a href="tel:+595217288640">(+595) 21 728 8640</a>
              <br />
              Uruguay: <a href="tel:+59829171663">(+598) 2917 1663</a>
              <br />
              Argentina: <a href="tel:+541121520660">(+54) 11 2152 0660</a>
              <br />
              USA: <a href="tel:+13055673373">(+1) 305 567 3373</a>
            </Typography>
          </Box>
          <Box className={classes.email}>
            <Typography variant="h5" className={classes.subTitle}>
              Email
            </Typography>
            <Typography paragraph className={classes.text}>
              <a href="mailto:ventas@vitriumcapital.com">
                ventas@vitriumcapital.com
              </a>
              <br />
              <a href="mailto:brokers@vitriumcapital.com">
                brokers@vitriumcapital.com
              </a>
            </Typography>
          </Box>
          <Box className={classes.socialMedias}>
            <Stack
              direction="row"
              gap="25px"
              alignItems="center"
              justifyContent={{ xs: "center", sm: "start" }}
            >
              <a
                href="https://www.facebook.com/VitriumCapital/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={facebook} alt="Facebook" />
              </a>
              <a
                href="https://www.instagram.com/vitriumcapital/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={instagram} alt="Instagram" />
              </a>
              <a
                href="https://www.linkedin.com/company/vitriumcapital/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedin} alt="Linkedin" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCiaS-EB1-EhmenfzEU5RPXg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={youtube} alt="Youtube" />
              </a>
            </Stack>
            <Typography
              paragraph
              className={classes.text}
              sx={{ marginTop: "24px !important" }}
            >
              Aviso Legal | Politica de Privacida
              <br />
              Vitrium Capital © Todos los
              <br /> derechos reservados
            </Typography>
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Footer;
