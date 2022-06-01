import useStyles from "./ArrowButton.styles";
import flecha from "../../assets/images/flecha.svg";

const ArrowButton = ({ buttonAction }) => {
  const classes = useStyles();
  return (
    <img
      role="button"
      style={{ cursor: "pointer" }}
      src={flecha}
      alt="Flecha"
      className={classes.arrowButton}
      onClick={buttonAction}
    />
  );
};

export default ArrowButton;
