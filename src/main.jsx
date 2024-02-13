import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./queries.css";

import { DarkModeProvider } from "./context/DarkmodeContext.jsx";
import { DirectionProvider } from "./context/DirectionContext.jsx";
import i18n from "./i18n.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DarkModeProvider>
      <DirectionProvider i18n={i18n}>
        <App />
      </DirectionProvider>
    </DarkModeProvider>
  </React.StrictMode>
);
