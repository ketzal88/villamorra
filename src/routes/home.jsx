import "../App.scss";
import LandingSection from "../components/LandingSection/LandingSection";
import AmenitiesSection from "../components/AmenitiesSection/AmenitiesSection";
import ApartamentosSection from "../components/ApartamentosSection/ApartamentosSection";
import EdificioSection from "../components/EdificioSection/EdificioSection";
import EntrevistaSection from "../components/EntrevistaSection/EntrevistaSection";
import UbicacionSection from "../components/UbicacionSection/UbicacionSection";
import PrensaSection from "../components/PrensaSection/PrensaSection";
import FirstCarrouselSection from "../components/FirstCarrouselSection/FirstCarrouselSection";
import InfoProjectSection from "../components/InfoProjectSection/InfoProjectSection";
import CoworkingSection from "../components/CoworkingSection/CoworkingSection";

export default function Home({ headerRef }) {
  return (
    <>
      <LandingSection headerRef={headerRef} />
      <EdificioSection />
      <FirstCarrouselSection />
      <InfoProjectSection />
      <ApartamentosSection />
      <AmenitiesSection />
      <CoworkingSection />
      <PrensaSection />
      <UbicacionSection />
      <EntrevistaSection />
    </>
  );
}
