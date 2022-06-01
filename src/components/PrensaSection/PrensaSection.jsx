import { Box, Stack, Typography } from "@mui/material";
import { usePrensaSectionStyles } from "./PrensaSection.styles";
import PrensaElement from "./PrensaElement";
import elementImg from "../../assets/images/imagen-galeria.jpg";
import elementImg1 from "../../assets/images/landing-image.jpg";

const articles = [
  {
    title: "01 Sync: \n Conoce lo nuevo",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, tenetur! Totam saepe aspernatur voluptatem odit architecto quam, labore cum ipsa dolor, nesciunt iste sed, veritatis vel fugit commodi? Quod itaque quisquam mollitia esse possimus magnam aliquid ab delectus tempora ut voluptatibus est rem inventore, nihil libero, quibusdam maiores modi quam.",
    buttonLabel: "Ver más...",
    imgURL: elementImg,
  },
  {
    title: "01 Sync: \n Conoce lo nuevo",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, tenetur! Totam saepe aspernatur voluptatem odit architecto quam, labore cum ipsa dolor, nesciunt iste sed, veritatis vel fugit commodi? Quod itaque quisquam mollitia esse possimus magnam aliquid ab delectus tempora ut voluptatibus est rem inventore, nihil libero, quibusdam maiores modi quam.",
    buttonLabel: "Ver más...",
    imgURL: elementImg1,
  },
  {
    title: "01 Sync: \n Conoce lo nuevo",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, tenetur! Totam saepe aspernatur voluptatem odit architecto quam, labore cum ipsa dolor, nesciunt iste sed, veritatis vel fugit commodi? Quod itaque quisquam mollitia esse possimus magnam aliquid ab delectus tempora ut voluptatibus est rem inventore, nihil libero, quibusdam maiores modi quam.",
    buttonLabel: "Ver más...",
    imgURL: elementImg,
  },
  {
    title: "01 Sync: \n Conoce lo nuevo",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, tenetur! Totam saepe aspernatur voluptatem odit architecto quam, labore cum ipsa dolor, nesciunt iste sed, veritatis vel fugit commodi? Quod itaque quisquam mollitia esse possimus magnam aliquid ab delectus tempora ut voluptatibus est rem inventore, nihil libero, quibusdam maiores modi quam.",
    buttonLabel: "Ver más...",
    imgURL: elementImg,
  },
  {
    title: "01 Sync: \n Conoce lo nuevo",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, tenetur! Totam saepe aspernatur voluptatem odit architecto quam, labore cum ipsa dolor, nesciunt iste sed, veritatis vel fugit commodi? Quod itaque quisquam mollitia esse possimus magnam aliquid ab delectus tempora ut voluptatibus est rem inventore, nihil libero, quibusdam maiores modi quam.",
    buttonLabel: "Ver más...",
    imgURL: elementImg,
  },
  {
    title: "01 Sync: \n Conoce lo nuevo",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, tenetur! Totam saepe aspernatur voluptatem odit architecto quam, labore cum ipsa dolor, nesciunt iste sed, veritatis vel fugit commodi? Quod itaque quisquam mollitia esse possimus magnam aliquid ab delectus tempora ut voluptatibus est rem inventore, nihil libero, quibusdam maiores modi quam.",
    buttonLabel: "Ver más...",
    imgURL: elementImg,
  },
  {
    title: "01 Sync: \n Conoce lo nuevo",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, tenetur! Totam saepe aspernatur voluptatem odit architecto quam, labore cum ipsa dolor, nesciunt iste sed, veritatis vel fugit commodi? Quod itaque quisquam mollitia esse possimus magnam aliquid ab delectus tempora ut voluptatibus est rem inventore, nihil libero, quibusdam maiores modi quam.",
    buttonLabel: "Ver más...",
    imgURL: elementImg,
  },
];

const PrensaSection = () => {
  const classes = usePrensaSectionStyles();
  return (
    <Stack
      direction="row"
      justifyContent="center"
      sx={{ display: { xs: "none" } }}
    >
      <Box className={classes.wrapperSection}>
        <Typography variant="h2" className={classes.titleSection}>
          Prensa
        </Typography>
        <div className={classes.elementsContainer} sx={{ overFlowX: "auto" }}>
          {articles.map((article, index) => (
            <PrensaElement key={index} {...article} />
          ))}
        </div>
      </Box>
    </Stack>
  );
};

export default PrensaSection;
