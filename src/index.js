import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import ThemeToggleButton from "./ThemeToggleButton";
import WeatherVideo from "./WeatherVideo";
import Main from "./Main";
import Forecast from "./Forecast";
import Footer from "./Footer";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ThemeToggleButton />
    <div className="container">
      <WeatherVideo />

      <Main defaultCity="Boston" />

      <Forecast />
    </div>
    <Footer />
  </StrictMode>
);
