import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./listSeven.css";
import { useDispatch, useSelector } from "react-redux";
import { updateStepData } from "../../redux/slice/formDataSlice";
import { message } from "antd";

export default function ListSeven() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const intialFormData = useSelector((state) => state.multiStepForm.step7);
  const [formValues, setFormValues] = useState(
    intialFormData || {
      radio1: "",
      radio2: "",
      radio3: "",
    }
  );
  const token = JSON.parse(localStorage.getItem("token"))?.access;

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [id]: value, 
    }));
  };

  const handleStepUpdate = (e) => {
    e.preventDefault();

    if (formValues.radio1 || formValues.radio2 || formValues.radio3) {
      const formData = {
        radio1: formValues.radio1,
        radio2: formValues.radio2,
        radio3: formValues.radio3,
      };

      dispatch(updateStepData({ step: "step7", data: formData }));

      navigate("/lists/8");
    } else {
      message.error("Please fill out the form before proceeding.");
    }
  };

  return (
    <>
      {/* <Navbar changeLang={changeLang} t={t} /> */}
      <main>
        <section className="list-form-7-background">
          <div className="list-form-7-inner__container">
            <h2>Publier une annonce de vente</h2>
            <div className="progress">
            {token ? (
              <>
                <p>07</p>
                <span>/ 9</span>
              </>
            ) : (
              <>
                <p>07</p>
                <span>/10</span>
              </>
            )}
            </div>
            <form onSubmit={handleStepUpdate}>
              <div className="form-section">
                <h2>Vos diagnostics immobiliers</h2>
                <p>
                  Dans le cadre d'une vente, vous devez fournir à l'acheteur des
                  diagnostics immobiliers.
                </p>
                <label>
                  <input
                    onChange={handleChange}
                    value="Je souhaite recevoir des devis au meilleur tarif du réseau partenaire Papacasa"
                    id="radio1"
                    type="radio"
                    name="diagnostics"
                    checked={
                      formValues.radio1 ===
                      "Je souhaite recevoir des devis au meilleur tarif du réseau partenaire Papacasa"
                    }
                  />
                  Je souhaite recevoir des devis au meilleur tarif du réseau
                  partenaire Papacasa
                </label>
                <label>
                  <input
                    onChange={handleChange}
                    value="J'ai déjà réalisé mes diagnostics, je n'ai pas besoin de devis"
                    id="radio2"
                    type="radio"
                    name="diagnostics"
                    checked={
                      formValues.radio2 ===
                      "J'ai déjà réalisé mes diagnostics, je n'ai pas besoin de devis"
                    }
                  />
                  J'ai déjà réalisé mes diagnostics, je n'ai pas besoin de devis
                </label>
                <label>
                  <input
                    onChange={handleChange}
                    value="Je ne souhaite pas m'en occuper maintenant"
                    id="radio3"
                    type="radio"
                    name="diagnostics"
                    checked={
                      formValues.radio3 ===
                      "Je ne souhaite pas m'en occuper maintenant"
                    }
                  />
                  Je ne souhaite pas m'en occuper maintenant
                </label>
              </div>
              <div className="list-form-2-buttons">
                <Link to="/lists/6" type="button" className="back">
                  Retour
                </Link>
                {/* <Link  to="/lists/8"> */}
                <button type="submit" className="next">
                  Suivant
                </button>
                {/* </Link> */}
              </div>
            </form>
          </div>
        </section>
      </main>
      {/* <section className="mobile__menu__section">
        <div className="mobile__menu__wrapper">
          <div className="mobile__menu__item">
            <Link href="">
              <img src="/Asessts/Images/mobile menu icons/li_home.svg" alt="" />
              <p>Accueil</p>
            </Link>
          </div>
          <div className="mobile__menu__item">
            <Link href="">
              <img
                src="/Asessts/Images/mobile menu icons/cart-icon.svg"
                alt=""
              />
              <p>Acheter</p>
            </Link>
          </div>
          <div className="mobile__menu__item">
            <Link href="">
              <img
                src="/Asessts/Images/mobile menu icons/post-ad-icon.svg"
                alt=""
              />
              <p>Annonce</p>
            </Link>
          </div>
          <div className="mobile__menu__item">
            <Link href="">
              <img
                src="/Asessts/Images/mobile menu icons/vendre-icon.svg"
                alt=""
              />
              <p>Vendre</p>
            </Link>
          </div>
          <div className="mobile__menu__item">
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
          <div className="footer__container">
            <section className="main__footer__wrapper">
              <div className="ppc__logo__social">
                <Link href="/">
                  <img
                    src="/Asessts/Images/new-logo.svg"
                    alt=""
                    className="footer__logo"
                  />
                </Link>

                <Link href="#">
                  <div className="links">
                    <img
                      src="/Asessts/Images/footer-icons/facebook.svg"
                      alt=""
                      className="social-icons"
                    />
                    <p className="social__text">Facebook</p>
                  </div>
                </Link>
                <Link href="#">
                  <div className="links">
                    <img
                      src="/Asessts/Images/footer-icons/twitter (2).svg"
                      alt=""
                      className="social-icons"
                    />
                    <p className="social__text">Twitter</p>
                  </div>
                </Link>
                <Link href="#">
                  <div className="links">
                    <img
                      src="/Asessts/Images/footer-icons/insta.svg"
                      alt=""
                      className=" social-icons"
                    />
                    <p className="social__text">Instagram</p>
                  </div>
                </Link>
                <Link href="#">
                  <div className="links">
                    <img
                      src="/Asessts/Images/footer-icons/youtube (2).svg"
                      alt=""
                      className="social-icons"
                    />
                    <p className="social__text">Youtube</p>
                  </div>
                </Link>
              </div>
              <div className="ppc__pages">
                <h2>Pages</h2>
                <Link href="#">
                  <li className="footer__pages">Prix immo</li>
                </Link>
                <Link href="#">
                  <li className="footer__pages">Acheter</li>
                </Link>
                <Link href="#">
                  <li className="footer__pages">Louer</li>
                </Link>
                <Link href="#">
                  <li className="footer__pages">Vacances</li>
                </Link>
                <Link href="#">
                  <li className="footer__pages">Mon espace</li>
                </Link>
              </div>
            </section>
          </div>
        </section>
      </footer> */}
    </>
  );
}
