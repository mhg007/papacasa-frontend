import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import { Footer } from "../footer/Footer";
import MobileNavbar from "../mobileNav/MobileNavbar";
import { useTranslation } from "react-i18next";

const FirstLayOut = () => {
    const { t, i18n } = useTranslation();

    const changeLang = (lang) => {
      i18n.changeLanguage(lang);
      console.log("clicked",lang)
    };
  return (
    <div>
      <Navbar changeLang={changeLang} t={t} i18n={i18n}/>
      <main>
        <Outlet /> {/* Render child routes here */}
      </main>
      <MobileNavbar/>
     <Footer/>
    </div>
  );
};

export default FirstLayOut;
