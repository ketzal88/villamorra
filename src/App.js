import theme from "./theme/default";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./routes/home";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ApartmentsCatalogue from "./routes/apartmentsCatalogue";
import Apartment from "./routes/apartment";

const { hostname = "" } = window?.location;
const path = hostname.includes("vitriumcapital") ? "/01sync-asuncion/" : "/";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header path={path} />
        <Routes>
          <Route path={path} element={<Home path={path} />} />
          <Route
            path={`${path ?? "/"}apartments`}
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
