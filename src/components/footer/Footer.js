import React from "react";
import { Link } from "react-router-dom";
import footericonsyoutube from "./footer-icons/youtube (2).svg";
import footericonstwitter from "./footer-icons/twitter (2).svg";
import footericonsinsta from "./footer-icons/insta.svg";
import footericonsfacebook from "./footer-icons/facebook.svg";
import logo from "../homepage/Assests/Images/new-logo.svg";
import { useTranslation } from "react-i18next";
export const Footer = () => {
  const { t, i18n } = useTranslation();
  return (
    <footer>
        <div className="footer__container flex justify-center items-center ">
          <section className="main__footer__wrapper flex justify-center items-center">
            <div className=" flex flex-col gap-5 pb-10  w-[300px]">
              <Link>
                <img
                  src={logo}
                  alt=""
                  className="footer__logo"
                />
              </Link>

              <Link href="#">
                <div className="links">
                  <img
                    src={footericonsfacebook}
                    alt=""
                    className="social-icons"
                  />
                  <p className="social__text">Facebook</p>
                </div>
              </Link>
              <Link href="#">
                <div className="links">
                  <img
                    src={footericonstwitter}
                    alt=""
                    className="social-icons"
                  />
                  <p className="social__text">Twitter</p>
                </div>
              </Link>
              <Link href="#">
                <div className="links">
                  <img
                    src={footericonsinsta}
                    alt=""
                    className=" social-icons"
                  />
                  <p className="social__text">Instagram</p>
                </div>
              </Link>
              <Link href="#">
                <div className="links">
                  <img
                    src={footericonsyoutube}
                    alt=""
                    className="social-icons"
                  />
                  <p className="social__text">Youtube</p>
                </div>
              </Link>
            </div>
            <div className="flex flex-col gap-2 pb-10  w-[300px]">
              <h2>Pages</h2>
              <Link href="#">
                <li className="footer__pages">{t("Real estate price")}</li>
              </Link>
              <Link href="#">
                <li className="footer__pages">{t("Buy")}</li>
              </Link>
              <Link href="#">
                <li className="footer__pages">{t("To rent out")}</li>
              </Link>
              <Link href="#">
                <li className="footer__pages">{t("Vacation")}</li>
              </Link>
              <Link href="#">
                <li className="footer__pages">{t("My space")}</li>
              </Link>
            </div>
          </section>
        </div>
    </footer>
  );
};
