import domoticaDesk from "../../assets/images/Desktop/Tech/Tecnologia/1-tech.jpg";
import domoticaMob from "../../assets/images/mobile/Tech/Tecnologia/1-tech.jpg";
import controlDeAccesoDesk from "../../assets/images/Desktop/Tech/Tecnologia/2-tech.jpg";
import controlDeAccesoMob from "../../assets/images/mobile/Tech/Tecnologia/2-tech.jpg";
import sistemaAudioDesk from "../../assets/images/Desktop/Tech/Tecnologia/3-tech.jpg";
import sistemaAudioMob from "../../assets/images/mobile/Tech/Tecnologia/3-tech.jpg";
import sistemaCctvDesk from "../../assets/images/Desktop/Tech/Tecnologia/4-tech.jpg";
import sistemaCctvMob from "../../assets/images/mobile/Tech/Tecnologia/4-tech.jpg";
import sistemaRedesDesk from "../../assets/images/Desktop/Tech/Tecnologia/5-tech.jpg";
import sistemaRedesMob from "../../assets/images/mobile/Tech/Tecnologia/5-tech.jpg";

import edificioDesk from "../../assets/images/Desktop/Tech/Sustentabilidad/1-sust.jpg";
import edificioMob from "../../assets/images/mobile/Tech/Sustentabilidad/1-sust.jpg";
import plantaDesk from "../../assets/images/Desktop/Tech/Sustentabilidad/2-sust.jpg";
import plantaMob from "../../assets/images/mobile/Tech/Sustentabilidad/2-sust.jpg";
import jardinDesk from "../../assets/images/Desktop/Tech/Sustentabilidad/3-sust.jpg";
import jardinMob from "../../assets/images/mobile/Tech/Sustentabilidad/3-sust.jpg";
import biciDesk from "../../assets/images/Desktop/Tech/Sustentabilidad/4-sust.jpg";
import biciMob from "../../assets/images/mobile/Tech/Sustentabilidad/4-sust.jpg";

const text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus. Pharetra massa massa ultricies mi quis hendrerit dolor magna.";

const title = "Tecnología";

export const elementsList = {
  Tecnología: [
    {
      subTitle: "Sistema de domótica",
      text: "Controles de iluminación, cortinas mecanizadas, cerraduras electrónicas y sensores de movimiento palieres y áreas comunes.",
      image: { xs: domoticaMob, lg: domoticaDesk, xl: domoticaDesk },
    },
    {
      subTitle: "Control de Acceso",
      text: "Para entrada y salida de las torres, de estacionamientos y acceso a áreas comunes.",
      image: {
        xs: controlDeAccesoMob,
        lg: controlDeAccesoDesk,
        xl: controlDeAccesoDesk,
      },
    },
    {
      subTitle: "Sistema de Audio",
      text: "Solución integral de audio multizona para espacios comunes y amenities.",
      image: {
        xs: sistemaAudioMob,
        lg: sistemaAudioDesk,
        xl: sistemaAudioDesk,
      },
    },
    {
      subTitle: "Sistema de CCTV",
      text: "Grabadoras de video de primera calidad y a partir de 2Tb de disco interno, asegurando 30 días de grabación.",
      image: {
        xs: sistemaCctvMob,
        lg: sistemaCctvDesk,
        xl: sistemaCctvDesk,
      },
    },
    {
      subTitle: "Sistema de Redes",
      text: "Aseguramos el acceso a Wi-Fi en áreas comunes contando con dos redes, una para exteriores y otra para interiores.",
      image: {
        xs: sistemaRedesMob,
        lg: sistemaRedesDesk,
        xl: sistemaRedesDesk,
      },
    },
  ],
  Sustentabilidad: [
    {
      subTitle: "Fachadas y azotea verde",
      text: "Reduce el impacto de la huella de carbono y favorece la biodiversidad y la integridad del medio ambiente, sirviendo como barreara acústica, de polvo y hollín..",
      image: { xs: edificioMob, lg: edificioDesk, xl: edificioDesk },
    },
    // {
    //   subTitle: "Separación de residuos reciclables",
    //   text: "Espacios exclusivos destinados y pensados para el reciclaje.",
    //   image: { xs: "", lg: "", xl: "" },
    // },
    {
      subTitle: "Recolección de agua de lluvia",
      text: "Sistema que reutiliza el agua recolectada para la limpieza de espacios comunes.",
      image: { xs: plantaMob, lg: plantaDesk, xl: plantaDesk },
    },
    {
      subTitle: "Fotocélulas",
      text: "Implementadas y pensadas para el ahorro, la eficiencia y el uso racional de la luz.",
      image: {
        xs: jardinMob,
        lg: jardinDesk,
        xl: jardinDesk,
      },
    },
    {
      subTitle: "Bike parking",
      text: "Nuestra manera de fomentar una movilidad ecofriendly y saludable.",
      image: {
        xs: biciMob,
        lg: biciDesk,
        xl: biciDesk,
      },
    },
  ],
};
