import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import cowork from "../../assets/images/co-working.jpg";
import { useCoworkingSectionStyles } from "./CoworkingSection.styles";

const CoworkingSection = () => {
  const classes = useCoworkingSectionStyles();
  return (
    <Stack direction="column" alignItems="center">
      <Stack
        direction="column"
        justifyContent={{ md: "center" }}
        className={classes.wrapperSection}
      >
        <img
          className={classes.imgSection}
          src={cowork}
          alt="Coworking Incluido"
        />
        <Box className={classes.textWrapper}>
          <Typography className={classes.titleSection} variant="h2">
            Co-Working
          </Typography>
          <Typography paragraph className={classes.textSection}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
            asperiores consequatur. A laudantium, reiciendis quisquam hic
            nostrum totam ex asperiores fugiat ipsa magnam consequatur tempore
            vitae harum saepe reprehenderit repellat delectus velit sed natus
            eaque incidunt quibusdam. Voluptatem quas, laudantium animi fugit
            impedit provident dolorem dolorum quasi eligendi quam distinctio ad
            eaque alias voluptas rerum esse vitae reiciendis sequi commodi.
          </Typography>
        </Box>
      </Stack>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        className={classes.recorridoVirtualWrapper}
      >
        <button className={classes.recorridoButton}>RECORRIDO VIRTUAL</button>
      </Stack>
    </Stack>
  );
};
export default CoworkingSection;
