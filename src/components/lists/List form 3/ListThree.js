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
      <Navbar changeLang={changeLang} t={t} i18n={i18n} />
      <main>
        <div class="list-form-3-background">
          <div class="list-form-3-inner__container">
            <div class="container">
              <h2>Publier une annonce de vente</h2>
              <div class="progress">
                <p>03</p>
                <span>/ 10</span>
              </div>
              <div class="list-form-3-form-container">
                <h3>Caractéristiques du bien</h3>
                <div class="list-form-3-separator"></div>

                <form>
                  <div class="list-form-3-form-group">
                    <div class="list-form-3-form-inner">
                      <label for="superficie-brute">
                        Superficie brute (m2)
                      </label>
                      <input type="text" id="superficie-brute" placeholder="" />
                    </div>
                    <div class="list-form-3-form-inner">
                      <label for="surface-terrain">
                        Surface du terrain (m2)
                      </label>
                      <input type="text" id="surface-terrain" placeholder="" />
                    </div>
                  </div>

                  <div class="list-form-3-form-group">
                    <div class="list-form-3-form-inner">
                      <label for="etat">État</label>
                      <select id="etat">
                        <option></option>
                        <option>Choisir...</option>
                      </select>
                    </div>

                    <div class="list-form-3-form-inner">
                      <label for="classe-energetique">Classe énergétique</label>
                      <select id="classe-energetique">
                        <option></option>
                        <option>Choisir...</option>
                      </select>
                    </div>
                  </div>

                  <div class="list-form-3-form-group">
                    <div class="list-form-3-form-inner">
                      <label for="annee-construction">
                        Année de construction
                      </label>
                      <input
                        type="text"
                        id="annee-construction"
                        placeholder=""
                      />
                    </div>

                    <div class="list-form-3-form-inner">
                      <label for="surface-utilisable">
                        Surface utilisable (m2)
                      </label>
                      <input
                        type="text"
                        id="surface-utilisable"
                        placeholder=""
                      />
                    </div>
                  </div>

                  <div class="list-form-3-form-group-range">
                    <div class="list-form-3-form-group-range-inner">
                      <label>Salles de bains</label>
                      <div class="counter">
                        <button type="button" class="minus">
                          −
                        </button>
                        <span>1</span>
                        <button type="button" class="plus">
                          +
                        </button>
                      </div>
                    </div>

                    <div class="list-form-3-form-group-range-inner">
                      <label>Places de parking</label>
                      <div class="counter">
                        <button type="button" class="minus">
                          −
                        </button>
                        <span>1</span>
                        <button type="button" class="plus">
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div class="list-form-3-form-buttons">
                <button type="button" class="back">
                  Retour
                </button>
                <button type="submit" class="next">
                  Suivant
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <section class="mobile__menu__section">
        <div class="mobile__menu__wrapper">
          <div class="mobile__menu__item">
            <Link href="">
              <img src="/Asessts/Images/mobile menu icons/li_home.svg" alt="" />
              <p>Accueil</p>
            </Link>
          </div>
          <div class="mobile__menu__item">
            <Link href="">
              <img
                src="/Asessts/Images/mobile menu icons/cart-icon.svg"
                alt=""
              />
              <p>Acheter</p>
            </Link>
          </div>
          <div class="mobile__menu__item">
            <Link href="">
              <img
                src="/Asessts/Images/mobile menu icons/post-ad-icon.svg"
                alt=""
              />
              <p>Annonce</p>
            </Link>
          </div>
          <div class="mobile__menu__item">
            <Link href="">
              <img
                src="/Asessts/Images/mobile menu icons/vendre-icon.svg"
                alt=""
              />
              <p>Vendre</p>
            </Link>
          </div>
          <div class="mobile__menu__item">
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
          <div class="footer__container">
            <section class="main__footer__wrapper">
              <div class="ppc__logo__social">
                <Link href="/">
                  <img
                    src="/Asessts/Images/new-logo.svg"
                    alt=""
                    class="footer__logo"
                  />
                </Link>

                <Link href="#">
                  <div class="links">
                    <img
                      src="/Asessts/Images/footer-icons/facebook.svg"
                      alt=""
                      class="social-icons"
                    />
                    <p class="social__text">Facebook</p>
                  </div>
                </Link>
                <Link href="#">
                  <div class="links">
                    <img
                      src="/Asessts/Images/footer-icons/twitter (2).svg"
                      alt=""
                      class="social-icons"
                    />
                    <p class="social__text">Twitter</p>
                  </div>
                </Link>
                <Link href="#">
                  <div class="links">
                    <img
                      src="/Asessts/Images/footer-icons/insta.svg"
                      alt=""
                      class=" social-icons"
                    />
                    <p class="social__text">Instagram</p>
                  </div>
                </Link>
                <Link href="#">
                  <div class="links">
                    <img
                      src="/Asessts/Images/footer-icons/youtube (2).svg"
                      alt=""
                      class="social-icons"
                    />
                    <p class="social__text">Youtube</p>
                  </div>
                </Link>
              </div>
              <div class="ppc__pages">
                <h2>Pages</h2>
                <Link href="#">
                  <li class="footer__pages">Prix immo</li>
                </Link>
                <Link href="#">
                  <li class="footer__pages">Acheter</li>
                </Link>
                <Link href="#">
                  <li class="footer__pages">Louer</li>
                </Link>
                <Link href="#">
                  <li class="footer__pages">Vacances</li>
                </Link>
                <Link href="#">
                  <li class="footer__pages">Mon espace</li>
                </Link>
              </div>
            </section>
          </div>
        </section>
      </footer>
    </body>
  );
}
