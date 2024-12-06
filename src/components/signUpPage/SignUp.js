import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./signUp.css";
import { useTranslation } from "react-i18next";
import { useSignUpUserMutation } from "../redux/services/services";
import { message } from "antd";
import facebook_coloured from "./Asessts/Images/facebook-colored-logo.svg";
import google_colored from "./Asessts/Images/google-colored-icon.svg";
import twitter_colored from "./Asessts/Images/twitter-colored-icon.svg";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [type, setType] = useState("password");
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const [signUpUser, { isLoading, isSuccess, isError, data, error }] =
    useSignUpUserMutation();
  // const changeLang = (lang) => {
  //   i18n.changeLanguage(lang);
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      first_name: e.target.first_name.value,
      last_name: e.target.last_name.value,
      email: e.target.email.value,
      telephone: e.target.telephone.value,
      password: e.target.password.value,
    };
    const headers = {
      "Content-Type": "application/json",
      Accept: "*/*",
    };
    try {
      const response = await signUpUser({ payload, headers }).unwrap();
      message.success("User Created Successfully");
      console.log("User Created Successfully", response);
      navigate("/");
    } catch (error) {
      message.error("User Creation Failed");
      console.log("User Failed", error);
    }
  };
  return (
    <>
      {/* <Navbar changeLang={changeLang} t={t} i18n={i18n} /> */}
      <main>
        <div className="red-background-container"></div>
        <div className="background">
          <div className="login-container">
            <div className="login-inner-container">
              <h2>{t("Inscrivez-vous")}</h2>
              <p>{t("Bienvenue chez Papacasa")}</p>
              <div>
                <form className="flex" onSubmit={handleSubmit}>
                  <div className=" sign-up__nom__premon__wrapper flex  gap-3 p-0 m-0">
                    <div className="sign-up__prenom text-start">
                      <label htmlFor="text">{t("Prénom*")}</label>
                      <input
                        name="last_name"
                        type="text"
                        required
                        className="ppc__sign-up__names w-[100%] outline-none"
                      />
                    </div>
                    <div className="sign-up__nom text-start">
                      <label htmlFor="text">{t("Nom*")}</label>
                      <input
                        name="first_name"
                        type="text"
                        required
                        className="ppc__sign-up__names w-[100%] outline-none"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="email">{t("Courriel")}</label>
                    <input
                      name="email"
                      type="email"
                      id="email"
                      placeholder="papa@casa.com"
                      required
                      className="ppc__login__email"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="number">{t("Téléphone")}</label>
                    <input
                      name="telephone"
                      type="tel"
                      id="number"
                      placeholder="+351 (0) 123 456 789"
                      required
                      className="ppc__login__pwd"
                    />
                  </div>
                  <div className="flex flex-col relative max-h-20 ">
                    <label htmlFor="password">{t("Mot de passe")}</label>
                    {/* <div className="w-full"> */}
                    <input
                      name="password"
                      type={
                        type === "password"
                          ? showPassword
                            ? "text"
                            : "password"
                          : type || "text"
                      }
                      id="password"
                      placeholder="********"
                      required
                      className="ppc__login__pwd " // Added padding-right for icon space
                    />
                    {/* Icon positioning fixed without affecting layout */}
                    {type === "password" && (
                      <div className="absolute top-[60%] right-4 transform -translate-y-1/2 cursor-pointer z-10">
                        {showPassword ? (
                          <MdOutlineVisibility
                            onClick={() => setShowPassword(false)}
                          />
                        ) : (
                          <MdOutlineVisibilityOff
                            onClick={() => setShowPassword(true)}
                          />
                        )}
                      </div>
                    )}
                  </div>
                  {/* </div> */}
                  <div className="w-full mt-2">
                    <button
                      type="submit"
                      className="sign-up-button w-full"
                      disabled={isLoading}
                    >
                      {" "}
                      {t("S'inscrire")}
                    </button>
                  </div>
                </form>
                <div>
                  <p className="register-link">
                    {t("Nouvel utilisateur ?")}{" "}
                    <Link to="/login">{t("Créer un compte")}</Link>
                  </p>

                  <div className="separator">
                    <p>{t("OU")}</p>
                  </div>
                </div>
                <div className="social-login">
                  <button className="facebook">
                    <img src={facebook_coloured} alt="" />
                    {t("Continuer avec Facebook")}
                  </button>
                  <button className="google">
                    <img src={google_colored} alt="" />
                    {t("Continuer avec Google")}
                  </button>
                  <button className="twitter">
                    <img src={twitter_colored} alt="" />
                    {t("Continuer avec Twitter")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
export default SignUp;
