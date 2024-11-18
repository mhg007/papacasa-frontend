import React from "react";
import { Link } from "react-router-dom";
import ".//listOne.css";
import Navbar from "../../navbar/Navbar";
import { useTranslation } from "react-i18next";
import { Footer } from "../../footer/Footer";

function ListOne() {
  const { t, i18n } = useTranslation();

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
    console.log("clicked", lang);
  };
  return (
    <>
      <Navbar changeLang={changeLang} t={t} i18n={i18n} />
      <main>
        <div class="list-form-1-background">
          <div class="list-form-1__inner__container">
            <h2>Publier une annonce de vente</h2>
            <div class="progress">
              <p>01</p>
              <span>/ 10</span>
            </div>
            <form action="">
              <div class="list-form-1-form-container">
                <h3>Choisissez votre type de bien</h3>
                <div class="property-types">
                  <button>Appartement</button>
                  <button>Maison</button>
                  <button>Garage / Parking</button>
                  <button>Terrain</button>
                  <button>Immeuble</button>
                  <button>Fonds de commerce</button>
                  <button>Local commercial</button>
                  <button>Autres</button>
                </div>
              </div>
              <div class="buttons">
                <button class="back">Retour</button>
                <button class="next">Suivant</button>
              </div>
            </form>
          </div>
        </div>
      </main>
      <section class="mobile__menu__section">
        <div class="mobile__menu__wrapper">
          <div class="mobile__menu__item">
            <Link href="">
              <img src="/Asessts/Images/mobile menu icons/li_home.svg" />
              <p>Accueil</p>
            </Link>
          </div>
          <div class="mobile__menu__item">
            <Link href="">
              <img src="/Asessts/Images/mobile menu icons/cart-icon.svg" />
              <p>Acheter</p>
            </Link>
          </div>
          <div class="mobile__menu__item">
            <Link href="">
              <img src="/Asessts/Images/mobile menu icons/post-ad-icon.svg" />
              <p>Annonce</p>
            </Link>
          </div>
          <div class="mobile__menu__item">
            <Link href="">
              <img src="/Asessts/Images/mobile menu icons/vendre-icon.svg" />
              <p>Vendre</p>
            </Link>
          </div>
          <div class="mobile__menu__item">
            <Link href="">
              <img src="/Asessts/Images/mobile menu icons/info-icon.svg" />
              <p>À propos</p>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ListOne;
