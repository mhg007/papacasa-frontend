import React from "react";
import { Link } from "react-router-dom";
import "./listFive.css";
import Navbar from "../../navbar/Navbar";
import { useTranslation } from "react-i18next";
export default function ListFive() {
  // const { t, i18n } = useTranslation();

  // const changeLang = (lang) => {
  //   i18n.changeLanguage(lang);
  //   console.log("clicked", lang);
  // };
  return (
    <body>
      {/* <Navbar changeLang={changeLang} t={t} /> */}
      <main>
        <section  className="list-form-5-background">
          <div  className="list-form-5-inner__container">
            <h2>Publier une annonce de vente</h2>
            <div  className="progress">
              <p>05</p>
              <span>/ 10</span>
            </div>
            <div  className="list-form-5-form-container">
              <h3>Descriptif du bien</h3>

              <p  className="description-hint">
                Environnement, liste des pièces, prestations, mode de chauffage,
                proximité des commerces, transports et écoles, charges et
                impôts...
              </p>
              <div  className="list-form-5-separator"></div>

              <form>
                <textarea placeholder=""></textarea>
              </form>
            </div>
            <div  className="list-form-2-buttons">
                <Link to="/lists/4" type="button"  className="back">
                  Retour
                </Link>
                <Link  to="/lists/6">
                <button type="submit"  className="next">
                  Suivant
                </button>
                </Link>
              </div>
          </div>
        </section>
      </main>
      {/* <section  className="mobile__menu__section">
        <div  className="mobile__menu__wrapper">
          <div  className="mobile__menu__item">
            <Link href="">
              <img src="/Asessts/Images/mobile menu icons/li_home.svg" alt="" />
              <p>Accueil</p>
            </Link>
          </div>
          <div  className="mobile__menu__item">
            <Link href="">
              <img
                src="/Asessts/Images/mobile menu icons/cart-icon.svg"
                alt=""
              />
              <p>Acheter</p>
            </Link>
          </div>
          <div  className="mobile__menu__item">
            <Link href="">
              <img
                src="/Asessts/Images/mobile menu icons/post-ad-icon.svg"
                alt=""
              />
              <p>Annonce</p>
            </Link>
          </div>
          <div  className="mobile__menu__item">
            <Link href="">
              <img
                src="/Asessts/Images/mobile menu icons/vendre-icon.svg"
                alt=""
              />
              <p>Vendre</p>
            </Link>
          </div>
          <div  className="mobile__menu__item">
            <Link href="">
              <img
                src="/Asessts/Images/mobile menu icons/info-icon.svg"
                alt=""
              />
              <p>À propos</p>
            </Link>
          </div>
        </div>
      </section>
      <footer>
        <section>
          <div  className="footer__container">
            <section  className="main__footer__wrapper">
              <div  className="ppc__logo__social">
                <Link href="/">
                  <img
                    src="/Asessts/Images/new-logo.svg"
                    alt=""
                     className="footer__logo"
                  />
                </Link>

                <Link href="#">
                  <div  className="links">
                    <img
                      src="/Asessts/Images/footer-icons/facebook.svg"
                      alt=""
                       className="social-icons"
                    />
                    <p  className="social__text">Facebook</p>
                  </div>
                </Link>
                <Link href="#">
                  <div  className="links">
                    <img
                      src="/Asessts/Images/footer-icons/twitter (2).svg"
                      alt=""
                       className="social-icons"
                    />
                    <p  className="social__text">Twitter</p>
                  </div>
                </Link>
                <Link href="#">
                  <div  className="links">
                    <img
                      src="/Asessts/Images/footer-icons/insta.svg"
                      alt=""
                       className=" social-icons"
                    />
                    <p  className="social__text">Instagram</p>
                  </div>
                </Link>
                <Link href="#">
                  <div  className="links">
                    <img
                      src="/Asessts/Images/footer-icons/youtube (2).svg"
                      alt=""
                       className="social-icons"
                    />
                    <p  className="social__text">Youtube</p>
                  </div>
                </Link>
              </div>
              <div  className="ppc__pages">
                <h2>Pages</h2>
                <Link href="#">
                  <li  className="footer__pages">Prix immo</li>
                </Link>
                <Link href="#">
                  <li  className="footer__pages">Acheter</li>
                </Link>
                <Link href="#">
                  <li  className="footer__pages">Louer</li>
                </Link>
                <Link href="#">
                  <li  className="footer__pages">Vacances</li>
                </Link>
                <Link href="#">
                  <li  className="footer__pages">Mon espace</li>
                </Link>
              </div>
            </section>
          </div>
        </section>
      </footer> */}
    </body>
  );
}
