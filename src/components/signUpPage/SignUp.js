import React from "react";
import { Link } from "react-router-dom";
import { Footer } from "../footer/Footer";
import styles from "./styles.css";
function SignUp() {
  return (
    <>
      <header>
        <section>
          <div className="container">
            <div className="header__main__wrapper">
              <div className="ppc__logo__menu">
                <div className="ppc__logo">
                  <Link>
                    {" "}
                    <img src="/Asessts/Images/new-logo.svg" alt="" />
                  </Link>
                </div>
                <div className="main-menu">
                  <nav>
                    <ul>
                      <Link>
                        <li>Accueil</li>
                      </Link>
                      <Link>
                        <li>Acheter</li>
                      </Link>
                      <Link>
                        <li>Vendre</li>
                      </Link>
                      <Link>
                        <li>À propos</li>
                      </Link>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="ppc__header__btn">
                <Link href="#">
                  <button className="header__btn">Publier une annonce</button>
                </Link>
              </div>
              <div className="ppc__header__mobile__btn">
                <Link href="#">
                  <button className="header__mobile__btn">Se connecters</button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </header>
      <main>
        <div className="red-background-container"></div>
        <div className="background">
          <div className="login-container">
            <div className="login-inner-container">
              <h2>Inscrivez-vous</h2>
              <p>Bienvenue chez Papacasa</p>
              <form>
                <div className="sign-up__nom__premon__wrapper">
                  <div className="sign-up__nom">
                    <label for="text">Nom*</label>
                    <input
                      type="text"
                      required
                      className="ppc__sign-up__names"
                    />
                  </div>
                  <div className="sign-up__prenom">
                    <label for="text">Prénom*</label>
                    <input
                      type="text"
                      required
                      className="ppc__sign-up__names"
                    />
                  </div>
                </div>
                <label for="email">Courriel</label>
                <input
                  type="email"
                  id="email"
                  placeholder="you@example.com"
                  required
                  className="ppc__login__email"
                />

                <label for="number">Téléphone</label>
                <input
                  type="tel"
                  id="number"
                  placeholder="+1 (123) 456 - 7890"
                  required
                  className="ppc__login__pwd"
                />

                <label for="password">Mot de passe</label>
                <input
                  type="password"
                  id="password"
                  placeholder="********"
                  required
                  className="ppc__login__pwd"
                />

                <button type="submit" className="sign-up-button">
                  S'inscrire
                </button>
              </form>
              <p className="register-link">
                Nouvel utilisateur ? <Link href="#">Créer un compte</Link>
              </p>

              <div className="separator">
                <p>OU</p>
              </div>

              <div className="social-login">
                <button className="facebook">
                  <img src="/Asessts/Images/facebook-colored-logo.svg" alt="" />
                  Continuer avec Facebook
                </button>
                <button className="google">
                  <img src="/Asessts/Images/google-colored-icon.svg" alt="" />
                  Continuer avec Google
                </button>
                <button className="twitter">
                  <img src="/Asessts/Images/twitter-colored-icon.svg" alt="" />
                  Continuer avec Twitter
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
              <p>Accueil</p>
            </Link>
          </div>
          <div className="mobile__menu__item">
            <Link>
              <img
                src="/Asessts/Images/mobile menu icons/cart-icon.svg"
                alt=""
              />
              <p>Acheter</p>
            </Link>
          </div>
          <div className="mobile__menu__item">
            <Link>
              <img
                src="/Asessts/Images/mobile menu icons/post-ad-icon.svg"
                alt=""
              />
              <p>Annonce</p>
            </Link>
          </div>
          <div className="mobile__menu__item">
            <Link>
              <img
                src="/Asessts/Images/mobile menu icons/vendre-icon.svg"
                alt=""
              />
              <p>Vendre</p>
            </Link>
          </div>
          <div className="mobile__menu__item">
            <Link>
              <img
                src="/Asessts/Images/mobile menu icons/info-icon.svg"
                alt=""
              />
              <p>À propos</p>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
export default SignUp;
