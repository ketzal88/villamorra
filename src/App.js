import theme from "./theme/default";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./routes/home";
import { ThemeProvider } from "@mui/material/styles";
import { useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ApartmentsCatalogue from "./routes/apartmentsCatalogue";
import Apartment from "./routes/apartment";

function App() {
  const headerRef = useRef(null);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header headerRef={headerRef} />
        <Routes>
          <Route
            path="/01sync-asuncion"
            element={<Home headerRef={headerRef} />}
          />
          <Route
            path="/01sync-asuncion/apartments"
            element={<ApartmentsCatalogue />}
          >
            <Route path=":apartmentId" element={<Apartment />} />
          </Route>
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
