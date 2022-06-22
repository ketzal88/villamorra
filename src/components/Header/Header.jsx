import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import { navLinks } from "./headerLinksList";
// import entrevistaRapida from "../../assets/images/entrevista_rapida.svg";
import { useHeaderStyles } from "./header.styles";
import logoVM from "../../assets/images/logoVM.svg";
import MenuIcon from "@mui/icons-material/Menu";
import MenuIconClose from "@mui/icons-material/Close";
import { useScrollTo } from "../../customHooks/useScrollTo";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

const Header = () => {
  const [drawerStatus, setDrawerStatus] = useState(false);
  const { pathname } = useLocation();
  const [isOverLandingSection, setIsOverLandingSection] = useState(true);
  const [reference, setReference] = useState("");

  useScrollTo(reference);

  const Links = ({ classes, setReference }) =>
    navLinks.map(({ label, link, reference }) => (
      <Link
        key={label}
        to={link}
        onClick={(e) => {
          !link && e.preventDefault();
          setReference(reference ?? "");
          setDrawerStatus(false);
        }}
        className={classes.navLink}
      >
        {label}
      </Link>
    ));

  const classes = useHeaderStyles({
    isOverLandingSection,
    isHomePage: pathname === "/",
  });

  const toggleDrawer = (open) => (e) => {
    if (e.type === "keydown" && (e.key === "Tab" || e.key === "Shift")) return;
    setDrawerStatus(open);
  };

  useEffect(() => {
    if (pathname === "/") {
      document.addEventListener("scroll", () => {
        if (70 < window.scrollY) setIsOverLandingSection(false);
        else if (isOverLandingSection) setIsOverLandingSection(true);
      });
    }
  });

  return (
    <Box className={classes.headerWrapper} sx={{ zIndex: 3 }}>
      <Box className={classes.textWrapper}>
        <Box className={classes.drawerBox}>
          <IconButton
            aria-label="open drawer"
            onClick={() => setDrawerStatus(true)}
            edge="start"
            sx={{ mr: 2 }}
          >
            <MenuIcon sx={{ color: "white" }} />
          </IconButton>
          <Drawer
            anchor="left"
            open={drawerStatus}
            onClose={toggleDrawer(false)}
            sx={{
              "& .MuiPaper-root": {
                backgroundColor: (theme) => theme.palette.primary.syncBlue,
                minWidth: "60%",
              },
            }}
          >
            <IconButton
              className={classes.drawerCloseButton}
              aria-label="close drawer"
              edge="end"
              onClick={() => setDrawerStatus(false)}
            >
              <MenuIconClose sx={{ color: "white", marginTop: "20px" }} />
            </IconButton>
            <Grid
              flexDirection="column"
              container
              sx={{
                paddingTop: "60px",
                paddingLeft: "20px",
              }}
            >
              {<Links classes={classes} setReference={setReference} />}
            </Grid>
          </Drawer>
        </Box>

        <Link to="/">
          <img src={logoVM} alt="Logo Sync" className={classes.logo} />
        </Link>

        <IconButton
          aria-label="customer service"
          sx={(theme) => ({
            position: "absolute",
            right: "38px",
            backgroundColor: "white",
            height: "48px",
            width: "48px",
            [theme.breakpoints.up("sm")]: {
              display: "none",
            },
          })}
        >
          <SupportAgentIcon />
        </IconButton>

        <Box className={classes.linksContainer}>
          {<Links classes={classes} setReference={setReference} />}
        </Box>
        <Box sx={{ display: "flex" }}>
          <a
            href="https://vitriumcapital.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`${classes.navLink} ${classes.LinkVitrium}`}
          >
            VITRIUM CAPITAL
          </a>
          {/* <Box className={classes.imgContainer} onClick={() => {}}>
            <img
              src={entrevistaRapida}
              alt="Entrevista Rápida"
              className={classes.imgStyles}
            />
          </Box> */}
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
