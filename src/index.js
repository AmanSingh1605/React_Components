import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import "./index.css"
import { NavigationProvider } from "./Context/Navigation";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NavigationProvider>

      <App />
    </NavigationProvider>
  </React.StrictMode>
);
reportWebVitals();
