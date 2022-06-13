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
          alignItems={{ xs: "start", lg: "space-between" }}
          flexWrap="wrap"
          rowGap={{ xs: "72px", md: "0px" }}
          columnGap={{ md: "102px" }}
        >
          <img className={classes.logoFooter} src={logo} alt="Logo Sync" />
          <Box className={classes.contacto}>
            <Typography variant="h5" className={classes.subTitle}>
              Contacto
            </Typography>
            <Typography paragraph className={classes.text}>
              Paraguay: (+595) 21 728 8640
              <br />
              Uruguay: (+598) 2917 1663
              <br />
              Argentina: (+54) 11 2152 0660
              <br />
              USA: (+1) 305 567 3373
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
            <Stack direction="row" gap="25px">
              <img src={facebook} alt="Facebook" />
              <img src={instagram} alt="Instagram" />
              <img src={linkedin} alt="Linkedin" />
              <img src={youtube} alt="Youtube" />
            </Stack>
            <Typography
              paragraph
              className={classes.text}
              sx={{ marginTop: "24px !important" }}
            >
              Aviso Legal | Politica de Privacida
              <br />
              Vitrium Capital © Todos los derechos <br /> reservados
            </Typography>
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Footer;
