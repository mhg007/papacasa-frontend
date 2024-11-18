import { Link } from "react-router-dom";
import "./css/login.css";
import logo from "./Asessts/Images/new-logo.svg";
import twittercoloredicon from "./Asessts/Images/twitter-colored-icon.svg";
import googlecoloredicon from "./Asessts/Images/google-colored-icon.svg";
import facebookcoloredlogo from "./Asessts/Images/facebook-colored-logo.svg";
import vendreicon from "./Asessts/Images/mobile menu icons/vendre-icon.svg";
import postadicon from "./Asessts/Images/mobile menu icons/post-ad-icon.svg";
import lihome from "./Asessts/Images/mobile menu icons/li_home.svg";
import infoicon from "./Asessts/Images/mobile menu icons/info-icon.svg";
import carticon from "./Asessts/Images/mobile menu icons/cart-icon.svg";
import { useTranslation } from "react-i18next";
import { Footer } from "../footer/Footer";

function Login() {
  const { t, i18n } = useTranslation();

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
    console.log("clicked", lang);
  };
  return (
    <>
      <div>
        <header>
          <section>
            <div className="container ">
              <div className="header__main__wrapper ">
                <div className="ppc__logo__menu">
                  <div className="ppc__logo ">
                    <Link>
                      <img src={logo} alt="" />
                    </Link>
                  </div>
                  <div className="main-menu ">
                    <nav className="">
                      <ul>
                        <Link>
                          <li>{t("Welcome")}</li>
                        </Link>
                        <Link>
                          <li>{t("Buy")}</li>
                        </Link>
                        <Link>
                          <li>{t("Sell")}</li>
                        </Link>
                        <Link>
                          <li>{t("About")}</li>
                        </Link>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="ppc__header__btn">
                  <Link href="#">
                    <button className="header__btn">{t("Post an ad")}</button>
                  </Link>
                </div>
                <div className="flex justify-evenly items-center gap-5 ml-4">
                  <button onClick={() => changeLang("en")}>En</button>
                  <button onClick={() => changeLang("fr")}>Fr</button>
                </div>
                {/* <div className="ppc__header__mobile__btn">
                  <Link>
                    <button className="header__mobile__btn text-black font-extrabold text-8xl">Se connecters</button>
                  </Link>
                </div> */}
              </div>
            </div>
          </section>
        </header>
        <main>
          <div className="red-background-container"></div>
          <div className="background">
            <div className="login-container">
              <div className="login-inner-container">
                <h2>{t("Connection")}</h2>
                <p>{t("Welcome to Ppopassa")}</p>
                <form>
                  <label htmlFor="email">{t("E-mail")}</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="you@example.com"
                    required
                    className="ppc__login__email"
                  />

                  <label htmlFor="password">{t("Password")}</label>
                  <input
                    type="password"
                    id="password"
                    placeholder="********"
                    required
                    className="ppc__login__pwd"
                  />

                  <button type="submit" className="login-button">
                    {t("Log in")}
                  </button>
                </form>
                <p className="register-link">
                  {t("New user ?")} <Link>{t("Create an account")}</Link>
                </p>

                <div className="separator">
                  <p>{t("Or")}</p>
                </div>

                <div className="social-login">
                  <button className="facebook">
                    <img src={facebookcoloredlogo} alt="" />
                    {t("Continue with Facebook")}
                  </button>
                  <button className="google">
                    <img src={googlecoloredicon} alt="" />
                    {t("Continue with Google")}
                  </button>
                  <button className="twitter">
                    <img src={twittercoloredicon} alt="" />
                    {t("Continue with Twitter")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
        <section className="mobile__menu__section">
          <div className="mobile__menu__wrapper">
            <div className="mobile__menu__item ">
              <Link href="">
                <img src={lihome} alt="" />
                <p className="text-black z-10">Accueil</p>
              </Link>
            </div>
            <div className="mobile__menu__item">
              <Link>
                <img src={carticon} alt="" />
                <p>Acheter</p>
              </Link>
            </div>
            <div className="mobile__menu__item">
              <Link>
                <img src={postadicon} alt="" />
                <p>Annonce</p>
              </Link>
            </div>
            <div className="mobile__menu__item">
              <Link>
                <img src={vendreicon} alt="" />
                <p>Vendre</p>
              </Link>
            </div>
            <div className="mobile__menu__item">
              <Link>
                <img src={infoicon} alt="" />
                <p>À propos</p>
              </Link>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default Login;
