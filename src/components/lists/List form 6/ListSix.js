import React from "react";
import Navbar from "../../navbar/Navbar";
import { Footer } from "../../footer/Footer";
import ".//listSix.css"
import { useTranslation } from "react-i18next";

function ListSix() {
  const { t, i18n } = useTranslation();

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
    console.log("clicked", lang);
  };
  return (
    <>
      <div>
      <Navbar changeLang={changeLang} t={t}/>
      <main>
          <section class="list-form-6-background">
            <div class="list-form-6-inner__container">
              <h2>Publier une annonce de vente</h2>
              <div class="progress">
                <p>03</p>
                <span>/ 10</span>
              </div>
              <div class="list-form-6-form-container">
                <h3>Prix de vente</h3>
                <p class="price-hint">
                  Ne vous inquiétez pas, vous pourrez ajuster votre prix si
                  nécessaire. Les modifications d'annonce sont gratuites et
                  illimitées !
                </p>
                <div class="list-form-3-separator"></div>

                <form>
                  <div class="price-input">
                    <span class="currency-symbol">€</span>
                    <input type="text" placeholder="0.00" />
                    <span class="currency-unit">EUR</span>
                  </div>
                </form>
              </div>
              <div class="list-form-6-form-buttons">
                <button type="button" class="back">
                  Retour
                </button>
                <button type="submit" class="next">
                  Suivant
                </button>
              </div>
            </div>
          </section>
        </main>
        <section class="mobile__menu__section">
          <div class="mobile__menu__wrapper">
            <div class="mobile__menu__item">
              <a href="">
                <img src="/Asessts/Images/mobile menu icons/li_home.svg" />
                <p>Accueil</p>
              </a>
            </div>
            <div class="mobile__menu__item">
              <a href="">
                <img src="/Asessts/Images/mobile menu icons/cart-icon.svg" />
                <p>Acheter</p>
              </a>
            </div>
            <div class="mobile__menu__item">
              <a href="">
                <img src="/Asessts/Images/mobile menu icons/post-ad-icon.svg" />
                <p>Annonce</p>
              </a>
            </div>
            <div class="mobile__menu__item">
              <a href="">
                <img src="/Asessts/Images/mobile menu icons/vendre-icon.svg" />
                <p>Vendre</p>
              </a>
            </div>
            <div class="mobile__menu__item">
              <a href="">
                <img src="/Asessts/Images/mobile menu icons/info-icon.svg" />
                <p>À propos</p>
              </a>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default ListSix;
