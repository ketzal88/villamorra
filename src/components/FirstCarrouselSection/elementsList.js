import domotica from "../../assets/images/domotica.jpeg";
import controlDeAcceso from "../../assets/images/control-de-acceso.jpg";
import sistemaAudio from "../../assets/images/sistema-audio.jpg";
import sistemaCctv from "../../assets/images/sistema-cctv.jpg";
import sistemaRedes from "../../assets/images/sistema-redes.jpg";

const text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus. Pharetra massa massa ultricies mi quis hendrerit dolor magna.";

const title = "Tecnología";

export const elementsList = {
  Tecnología: [
    {
      title,
      subTitle: "Domótica",
      text,
      image: domotica,
    },
    {
      title,
      subTitle: "Control de Acceso",
      text,
      image: controlDeAcceso,
    },
    {
      title,
      subTitle: "Sistema de Audio",
      text,
      image: sistemaAudio,
    },
    {
      title,
      subTitle: "Sistema de CCTV",
      text,
      image: sistemaCctv,
    },
    {
      title,
      subTitle: "Sistema de Redes",
      text,
      image: sistemaRedes,
    },
  ],
  Sustentabilidad: [
    {
      title,
      subTitle: "Fachadas y azotea verde",
      text: "Reduce el impacto de la huella de carbono y favorece la biodiversidad y la integridad del medio ambiente, sirviendo como barreara acústica, de polvo y hollín..",
      image: domotica,
    },
    {
      subTitle: "Separación de residuos reciclables",
      text: "Espacios exclusivos destinados y pensados para el reciclaje.",
      image: controlDeAcceso,
    },
    {
      subTitle: "Recolección de agua de lluvia",
      text: "Sistema que reutiliza el agua recolectada para la limpieza de espacios comunes.",
      image: sistemaAudio,
    },
    {
      subTitle: "Fotocélulas",
      text: "Implementadas y pensadas para el ahorro, la eficiencia y el uso racional de la luz.",
      image: sistemaCctv,
    },
    {
      subTitle: "Bike parking",
      text: "Nuestra manera de fomentar una movilidad ecofriendly y saludable.",
      image: sistemaRedes,
    },
  ],
};
