import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import { navLinks } from "./headerLinksList";
// import entrevistaRapida from "../../assets/images/entrevista_rapida.svg";
import { useHeaderStyles } from "./header.styles";
import logoVM from "../../assets/images/logoVM.svg";
import MenuIcon from "@mui/icons-material/Menu";
import { useScrollTo } from "../../customHooks/useScrollTo";

const Links = ({ classes, setReference, path }) =>
  navLinks.map(({ label, link, reference }) => (
    <Link
      key={label}
      to={path === link ? `${path}` : `${path}${link}`}
      onClick={(e) => {
        !link && e.preventDefault();
        setReference(reference ?? "");
      }}
      className={classes.navLink}
    >
      {label}
    </Link>
  ));

const Header = ({ path }) => {
  const [drawerStatus, setDrawerStatus] = useState(false);
  const { pathname } = useLocation();
  const isHomePage =
    pathname === "/01sync-asuncion" ||
    pathname === "/" ||
    pathname === "/01sync-asuncion/";
  const [isOverLandingSection, setIsOverLandingSection] = useState(true);
  const [reference, setReference] = useState("");

  useScrollTo(reference);

  const classes = useHeaderStyles({
    isOverLandingSection,
    isHomePage,
  });

  const toggleDrawer = (open) => (e) => {
    if (e.type === "keydown" && (e.key === "Tab" || e.key === "Shift")) return;
    setDrawerStatus(open);
  };

  useEffect(() => {
    if (isHomePage) {
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
            {
              <Links
                classes={classes}
                setReference={setReference}
                path={path}
              />
            }
          </Drawer>
        </Box>
        <Link to={path}>
          <img src={logoVM} alt="Logo Sync" className={classes.logo} />
        </Link>
        <Box className={classes.linksContainer}>
          {<Links classes={classes} setReference={setReference} path={path} />}
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
