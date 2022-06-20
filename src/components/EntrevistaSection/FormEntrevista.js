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
    code: "+54",
  },
  {
    label: "Uruguay",
    value: "UY",
    code: "+598",
  },
  {
    label: "Paraguay",
    value: "PY",
    code: "+595",
  },
  {
    label: "Estados Unidos",
    value: "US",
    code: "+1",
  },
  {
    label: "Perú",
    value: "PE",
    code: "+51",
  },
  {
    label: "México",
    value: "MX",
    code: "+52",
  },
  {
    label: "Ecuador",
    value: "ECU",
    code: "+593",
  },
  {
    label: "Colombia",
    value: "CO",
    code: "+57",
  },
  {
    label: "Otro",
    value: "Otro",
    code: "Otro",
  },
];

const FormEntrevista = () => {
  const classes = usePrensaSectionStyles();
  const [countryCode, setCountryCode] = useState("");
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
    // first_name: "Test",
    // last_name: "Test",
    // email: "test@gmail.com",
    // phone: "3816261374",
    // "00Nj0000008ze1B": "AR",
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
        sendFormData({ ...data, phone: countryCode + data.phone });
      }}
    >
      <FormControl className={classes.formControl}>
        <InputLabel shrink className={classes.inputLabel} required>
          Nombre
        </InputLabel>
        <Input
          required
          name="first_name"
          value={data?.first_name ?? ""}
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
          required
          name="last_name"
          value={data?.last_name ?? ""}
          className={classes.inputForm}
          onChange={handleChange}
          classes={{ underline: classes.underlineInput }}
        />
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel shrink className={classes.inputLabel} required>
          Email
        </InputLabel>
        <Input
          className={classes.inputForm}
          name="email"
          value={data?.email ?? ""}
          onChange={handleChange}
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
            Cod. País
          </InputLabel>
          <Select
            className={classes.selectInput}
            value={countryCode}
            onChange={(e) => {
              const filteredCountry = countryOptions.filter(
                (country) => country.code === e.target.value
              );
              setCountryCode(e.target.value);
              setData({ ...data, "00Nj0000008ze1B": filteredCountry[0].value });
            }}
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
            <MenuItem>Cod. de País</MenuItem>
            {countryOptions.map(({ code }, index) => (
              <MenuItem key={index} value={code}>
                {code}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl className={classes.phoneNumberInput}>
          <InputLabel shrink className={classes.inputLabel} required>
            Teléfono
          </InputLabel>
          <Input
            name="phone"
            value={data?.phone ?? ""}
            onChange={(e) => {
              handleChange(e);
              const filteredCountry = countryOptions.filter(
                (country) => country.code === countryCode
              );
              setCountryCode(filteredCountry[0].code);
            }}
            onKeyDown={(e) =>
              e.code.includes("Key") && !e.ctrlKey && e.preventDefault()
            }
            className={classes.inputForm}
            classes={{ underline: classes.underlineInput }}
          />
        </FormControl>
      </Stack>
      <FormControl className={classes.formControl}>
        <InputLabel shrink className={classes.inputLabel} required>
          Selecciona un país
        </InputLabel>
        <Select
          name="00Nj0000008ze1B"
          className={classes.selectInput}
          value={data["00Nj0000008ze1B"] ?? ""}
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
          <MenuItem>Selecciona un país</MenuItem>
          {countryOptions.map(({ value, label }, index) => (
            <MenuItem
              key={index}
              value={value}
              selected={value === data["00Nj0000008ze1B"]}
            >
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
          required
          name="00Nj000000BSaZp"
          value={data?.["00Nj000000BSaZp"] ?? ""}
          className={classes.inputForm}
          onChange={handleChange}
          classes={{ underline: classes.underlineInput }}
        />
      </FormControl>
      <Box
        className={classes.formControl}
        sx={{ display: { xs: "none", md: "flex" } }}
      />
      <Box className={classes.formControl}>
        <button className={classes.buttonSubmit}>
          ENVIAR <ArrowForwardIosIcon className={classes.carrotButton} />
        </button>
      </Box>
    </Box>
  );
};
export default FormEntrevista;
