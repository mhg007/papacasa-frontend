import React from "react";
import { Link } from "react-router-dom";
import "./forgetPassword.css";
import { Footer } from "../footer/Footer";
import { useTranslation } from "react-i18next";
import Navbar from "../navbar/Navbar";
export default function ForgetPassword() {
  // const { t, i18n } = useTranslation();

  // const changeLang = (lang) => {
  //   i18n.changeLanguage(lang);
  //   console.log("clicked", lang);
  // };
  return (
    <>
      {/* <Navbar changeLang={changeLang} t={t} /> */}
      <main>
        <div className="red-background-container"></div>
        <div className="background">
          <div className="login-container">
            <div className="login-inner-container">
              <h2>Mot de passe oublié</h2>
              <p>
                Nous enverrons des instructions de mot de passe à votre adresse
                e-mail
              </p>
              <form>
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  id="email"
                  placeholder="vous@example.com"
                  required
                  className="ppc__login__email"
                />

                <button type="submit" className="login-button">
                  Envoyer
                </button>
              </form>
              <p className="register-link">
                Retourner pour se <Link href="#">connecter</Link>
              </p>
            </div>
          </div>
        </div>
      </main>
      {/* <section className="mobile__menu__section">
        <div className="mobile__menu__wrapper">
          <div className="mobile__menu__item">
            <Link href="">
              <img
                src="/Linksessts/Images/mobile menu icons/li_home.svg"
                alt=""
              />
              <p>Accueil</p>
            </Link>
          </div>
          <div className="mobile__menu__item">
            <Link href="">
              <img
                src="/Linksessts/Images/mobile menu icons/cart-icon.svg"
                alt=""
              />
              <p>Acheter</p>
            </Link>
          </div>
          <div className="mobile__menu__item">
            <Link href="">
              <img
                src="/Linksessts/Images/mobile menu icons/post-ad-icon.svg"
                alt=""
              />
              <p>Annonce</p>
            </Link>
          </div>
          <div className="mobile__menu__item">
            <Link href="">
              <img
                src="/sessts/Images/mobile menu icons/vendre-icon.svg"
                alt=""
              />
              <p>Vendre</p>
            </Link>
          </div>
          <div className="mobile__menu__item">
            <Link href="">
              <img
                src="/Linksessts/Images/mobile menu icons/info-icon.svg"
                alt=""
              />
              <p>À propos</p>
            </Link>
          </div>
        </div>
      </section> */}
      <Footer />
    </>
  );
}
