import React from "react";
import Navbar from "../../navbar/Navbar";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./listThree.css";
export default function ListThree() {
  const { t, i18n } = useTranslation();

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
    console.log("clicked", lang);
  };
  return (
    <body>
      {/* <Navbar changeLang={changeLang} t={t} i18n={i18n} /> */}
      <main>
        <div  className="list-form-3-background">
          <div  className="list-form-3-inner__container">
            <div  className="container">
              <h2>Publier une annonce de vente</h2>
              <div  className="progress">
                <p>03</p>
                <span>/ 10</span>
              </div>
              <div  className="list-form-3-form-container">
                <h3>Caractéristiques du bien</h3>
                <div  className="list-form-3-separator"></div>

                <form>
                  <div  className="list-form-3-form-group">
                    <div  className="list-form-3-form-inner">
                      <label htmlFor="superficie-brute">
                        Superficie brute (m2)
                      </label>
                      <input type="text" id="superficie-brute" placeholder="" />
                    </div>
                    <div  className="list-form-3-form-inner">
                      <label htmlFor="surface-terrain">
                        Surface du terrain (m2)
                      </label>
                      <input type="text" id="surface-terrain" placeholder="" />
                    </div>
                  </div>

                  <div  className="list-form-3-form-group">
                    <div  className="list-form-3-form-inner">
                      <label htmlFor="etat">État</label>
                      <select id="etat">
                        <option></option>
                        <option>Choisir...</option>
                      </select>
                    </div>

                    <div  className="list-form-3-form-inner">
                      <label htmlFor="classe-energetique">Classe énergétique</label>
                      <select id="classe-energetique">
                        <option></option>
                        <option>Choisir...</option>
                      </select>
                    </div>
                  </div>

                  <div  className="list-form-3-form-group">
                    <div  className="list-form-3-form-inner">
                      <label htmlFor="annee-construction">
                        Année de construction
                      </label>
                      <input
                        type="text"
                        id="annee-construction"
                        placeholder=""
                      />
                    </div>

                    <div  className="list-form-3-form-inner">
                      <label htmlFor="surface-utilisable">
                        Surface utilisable (m2)
                      </label>
                      <input
                        type="text"
                        id="surface-utilisable"
                        placeholder=""
                      />
                    </div>
                  </div>

                  <div  className="list-form-3-form-group-range">
                    <div  className="list-form-3-form-group-range-inner">
                      <label>Salles de bains</label>
                      <div  className="counter">
                        <button type="button"  className="minus">
                          −
                        </button>
                        <span>1</span>
                        <button type="button"  className="plus">
                          +
                        </button>
                      </div>
                    </div>

                    <div  className="list-form-3-form-group-range-inner">
                      <label>Places de parking</label>
                      <div  className="counter">
                        <button type="button"  className="minus">
                          −
                        </button>
                        <span>1</span>
                        <button type="button"  className="plus">
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div  className="list-form-2-buttons">
                <Link to="/lists/2" type="button"  className="back">
                  Retour
                </Link>
                <Link  to="/lists/4">
                <button type="submit"  className="next">
                  Suivant
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
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
