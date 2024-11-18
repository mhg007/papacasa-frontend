import React from "react";
import { Link } from "react-router-dom";
import { Footer } from "../footer/Footer";
import styles from "./styles.css";
import Navbar from "../navbar/Navbar";
import { useTranslation } from "react-i18next";
function SignUp() {
  const { t, i18n } = useTranslation();
  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
  };
  return (
    <>
      <Navbar changeLang={changeLang} t={t} i18n={i18n} />
      <main>
        <div className="red-background-container"></div>
        <div className="background">
          <div className="login-container">
            <div className="login-inner-container">
              <h2>{t("Inscrivez-vous")}</h2>
              <p>{t("Bienvenue chez Papacasa")}</p>
              <form>
                <div className="sign-up__nom__premon__wrapper">
                  <div className="sign-up__nom">
                    <label for="text">{t("Nom*")}</label>
                    <input
                      type="text"
                      required
                      className="ppc__sign-up__names"
                    />
                  </div>
                  <div className="sign-up__prenom">
                    <label for="text">{t("Prénom*")}</label>
                    <input
                      type="text"
                      required
                      className="ppc__sign-up__names"
                    />
                  </div>
                </div>
                <label for="email">{t("Courriel")}</label>
                <input
                  type="email"
                  id="email"
                  placeholder="you@example.com"
                  required
                  className="ppc__login__email"
                />

                <label for="number">{t("Téléphone")}</label>
                <input
                  type="tel"
                  id="number"
                  placeholder="+1 (123) 456 - 7890"
                  required
                  className="ppc__login__pwd"
                />

                <label for="password">{t("Mot de passe")}</label>
                <input
                  type="password"
                  id="password"
                  placeholder="********"
                  required
                  className="ppc__login__pwd"
                />

                <button type="submit" className="sign-up-button">
                  {t("S'inscrire")}
                </button>
              </form>
              <p className="register-link">
                {t("Nouvel utilisateur ?")}{" "}
                <Link href="#">{t("Créer un compte")}</Link>
              </p>

              <div className="separator">
                <p>{t("OU")}</p>
              </div>

              <div className="social-login">
                <button className="facebook">
                  <img src="/Asessts/Images/facebook-colored-logo.svg" alt="" />
                  {t("Continuer avec Facebook")}
                </button>
                <button className="google">
                  <img src="/Asessts/Images/google-colored-icon.svg" alt="" />
                  {t("Continuer avec Google")}
                </button>
                <button className="twitter">
                  <img src="/Asessts/Images/twitter-colored-icon.svg" alt="" />
                  {t("Continuer avec Twitter")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <section className="mobile__menu__section">
        <div className="mobile__menu__wrapper">
          <div className="mobile__menu__item">
            <Link>
              <img src="/Asessts/Images/mobile menu icons/li_home.svg" alt="" />
              <p>{t("Accueil")}</p>
            </Link>
          </div>
          <div className="mobile__menu__item">
            <Link>
              <img
                src="/Asessts/Images/mobile menu icons/cart-icon.svg"
                alt=""
              />
              <p>{t("Acheter")}</p>
            </Link>
          </div>
          <div className="mobile__menu__item">
            <Link>
              <img
                src="/Asessts/Images/mobile menu icons/post-ad-icon.svg"
                alt=""
              />
              <p>{t("Annonce")}</p>
            </Link>
          </div>
          <div className="mobile__menu__item">
            <Link>
              <img
                src="/Asessts/Images/mobile menu icons/vendre-icon.svg"
                alt=""
              />
              <p>{t("Vendre")}</p>
            </Link>
          </div>
          <div className="mobile__menu__item">
            <Link>
              <img
                src="/Asessts/Images/mobile menu icons/info-icon.svg"
                alt=""
              />
              <p>{t("À propos")}</p>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
export default SignUp;
