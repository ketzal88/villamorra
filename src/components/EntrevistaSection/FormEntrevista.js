import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import Stack from "@mui/material/Stack";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { usePrensaSectionStyles } from "./EntrevistaSection.style";
import { useState } from "react";
import { MenuItem, Select } from "@mui/material";
import { sendFormData } from "./services/sendFormData";

const countryOptions = [
  {
    label: "Argentina",
    value: "AR",
  },
  {
    label: "Uruguay",
    value: "UY",
  },
  {
    label: "Paraguay",
    value: "PY",
  },
  {
    label: "Estados Unidos",
    value: "US",
  },
  {
    label: "Perú",
    value: "PE",
  },
  {
    label: "México",
    value: "MX",
  },
  {
    label: "Ecuador",
    value: "ECU",
  },
  {
    label: "Colombia",
    value: "CO",
  },
  {
    label: "Otro",
    value: "Otro",
  },
];

const FormEntrevista = () => {
  const classes = usePrensaSectionStyles();

  const [data, setData] = useState({
    oid: "00Dj0000001rNSE",
    retURL: "https://vitriumcapital.com/01delcentro/montevideo/gracias.html",
    lead_source: "Espontaneo",
    "00Nj000000A29r1": "Departamentos",
    "00Nj000000ABZ0p":
      "https://vitriumcapital.com/01delcentro/montevideo/el-momento-de-invertir.php",
    "00Nj000000ApuCe": "Landing",
    "00Nj000000Bohtn": "Formulario",
    "00Nj0000008bHZU": "UY - 01 del Centro",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  return (
    <Box
      component="form"
      className={classes.formContainer}
      onSubmit={(e) => {
        e.preventDefault();
        sendFormData(data);
      }}
    >
      <FormControl className={classes.formControl}>
        <InputLabel shrink className={classes.inputLabel} required>
          Nombre
        </InputLabel>
        <Input
          className={classes.inputForm}
          onChange={handleChange}
          classes={{ underline: classes.underlineInput }}
        />
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel shrink className={classes.inputLabel} required>
          Apellido
        </InputLabel>
        <Input
          className={classes.inputForm}
          classes={{ underline: classes.underlineInput }}
        />
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel shrink className={classes.inputLabel} required>
          Email
        </InputLabel>
        <Input
          className={classes.inputForm}
          classes={{ underline: classes.underlineInput }}
        />
      </FormControl>
      <Stack
        direction="row"
        justifyContent="space-between"
        columnGap={{ xs: "15px", md: "26px", lg: "40px" }}
      >
        <FormControl className={classes.codAreaForm}>
          <InputLabel shrink className={classes.inputLabel} required>
            Cod. Área
          </InputLabel>
          <Input
            className={classes.inputForm}
            classes={{ underline: classes.underlineInput }}
          />
        </FormControl>
        <FormControl className={classes.phoneNumberInput}>
          <InputLabel shrink className={classes.inputLabel} required>
            Teléfono
          </InputLabel>
          <Input
            className={classes.inputForm}
            classes={{ underline: classes.underlineInput }}
          />
        </FormControl>
      </Stack>
      <FormControl className={classes.formControl}>
        <InputLabel
          shrink
          className={classes.inputLabel}
          required
        >
          Selecciona un país
        </InputLabel>
        <Select
          name="00Nj0000008ze1B"
          className={classes.selectInput}
          value={data["00Nj0000008ze1B"]}
          onChange={handleChange}
          sx={{
            "&.MuiInput-root": () => ({
              "&:before, &:after": {
                borderBottom: "none",
              },
              "&:hover, &:active, &:focus": {
                borderBottom: "none",
                "&:before, &:after": {
                  borderBottom: "none",
                },
              },
            }),
          }}
        >
          {countryOptions.map(({ value, label }, index) => (
            <MenuItem key={index} value={value}>
              {label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel shrink className={classes.inputLabel} required>
          Consulta
        </InputLabel>
        <Input
          className={classes.inputForm}
          classes={{ underline: classes.underlineInput }}
        />
      </FormControl>
      <Box
        className={classes.formControl}
        sx={{ display: { xs: "none", md: "flex" } }}
      />
      <Box className={classes.formControl}>
        {/* <RadioGroup>
          <FormControlLabel
            control={<Radio className={classes.radioButton} />}
            componentsProps={usePrensaSectionStyles.labelRadioButton}
            value="true"
            label="Acepto términos y condiciones"
          />
        </RadioGroup> */}
        <button className={classes.buttonSubmit}>
          ENVIAR <ArrowForwardIosIcon className={classes.carrotButton} />
        </button>
      </Box>
    </Box>
  );
};
export default FormEntrevista;
