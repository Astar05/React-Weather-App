import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Main from "./Main";
import Footer from "./Footer";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="container">
      <Main defaultCity="Boston" />
    </div>
    <Footer />
  </StrictMode>
);
