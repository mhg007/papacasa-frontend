import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import { frFR } from '@mui/x-date-pickers/locales';
// import { frFR as coreFrFR } from '@mui/material/locale';
import './i18n'
import reportWebVitals from "./reportWebVitals";
// import i18next from "i18next";
// import global_en from "./components/locales/en/global.json";
// import global_fr from "./components/locales/fr/global.json";
// import { I18nextProvider } from "react-i18next";

// i18next.init({
//   interpolation: {
//     escapeValue: false, // not needed for react as it escapes by default
//   },
//   lang: "en",
//   en: {
//     global_en,
//   },
//   fr: {
//     global_fr,
//   },
// });
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <I18nextProvider i18n={i18next}> */}
      <App />
    {/* </I18nextProvider> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
