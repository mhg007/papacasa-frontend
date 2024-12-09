import { useLoginUserMutation } from "../redux/services/services";
import "./css/login.css";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import GoogleLogin from "react-google-login";
import twittercoloredicon from "./Asessts/Images/twitter-colored-icon.svg";
import googlecoloredicon from "./Asessts/Images/google-colored-icon.svg";
import facebookcoloredlogo from "./Asessts/Images/facebook-colored-logo.svg";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [type, setType] = useState("password");
  const { t } = useTranslation();

  const [loginUser, { isLoading, isSuccess, isError, data, error }] =
  useLoginUserMutation();
  console.log("🚀 ~ Login ~ data:", data)

    

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      email: e.target.username.value,
      password: e.target.password.value,
    };
    const headers = {
      "Content-Type": "application/json",
      Accept: "*/*",
    };
    try {
      const response = await loginUser({ payload, headers }).unwrap();

      // const token = response.access;
      // const refreshToken = response.refresh;
      if (response) {
        // console.log("Token saved successfully:", response);
        localStorage.setItem("token", JSON.stringify(response));
        localStorage.setItem("id", JSON.stringify(response.id));
        navigate("/"); // Redirect after successful login
      }
    } catch (err) {
      console.error("Login Failed:", err);
    }
  };


  // useEffect(() => {

  // }, [handleSubmit]);

  return (
    <>
      <div>
        <main>
          <div className="red-background-container"></div>
          <div className="background">
            <div className="login-container">
              <div className="login-inner-container">
                <h2>{t("Connection")}</h2>
                <p>{t("Welcome to PapaCasa")}</p>
                <form onSubmit={handleSubmit}>
                  <label htmlFor="email">{t("E-mail")}</label>
                  <input
                    type="text"
                    name="username"
                    id="userName"
                    placeholder="papa@casa.com"
                    required
                    className="ppc__login__email"
                  />
                  <label htmlFor="password">{t("Password")}</label>
                  <div className="relative mb-2 pb-0 h-12">
                    <input
                      type={
                        type === "password"
                          ? showPassword
                            ? "text"
                            : "password"
                          : type || "text"
                      }
                      name="password"
                      id="password"
                      placeholder="********"
                      required
                      className="ppc__login__pwd w-[100%] mb-0 pb-0 h-fit "
                    />
                    {type === "password" &&
                      (showPassword ? (
                        <MdOutlineVisibility
                          className="relative cursor-pointer top-[-125%] left-[90%]   bg-white font-bold z-10"
                          onClick={() => setShowPassword(false)}
                        />
                      ) : (
                        <MdOutlineVisibilityOff
                          className="relative cursor-pointer top-[-98%] left-[90%] bg-white font-bold z-10"
                          onClick={() => setShowPassword(true)}
                        />
                      ))}
                  </div>
                  <button
                    type="submit"
                    className="login-button"
                    disabled={isLoading}
                  >
                    {isLoading ? t("Logging in...") : t("Log in")}
                  </button>
                </form>
                {isError && (
                  <p className="error">Login Failed: {error?.data?.message}</p>
                )}
                {isSuccess && <p className="success">Login Successful!</p>}
                <p className="register-link">
                  {t("New user ?")}{" "}
                  <Link to={"/signup"}>{t("Create an account")}</Link>
                </p>

                <div className="separator mt-6">
                  <p>{t("Or")}</p>
                </div>

                <div className="social-login">
                  <button className="social-button facebook">
                    <img src={facebookcoloredlogo} alt="" className="icon" />
                    {t("Continue with Facebook")}
                  </button>
                  <button className="social-button google">
                    <img src={googlecoloredicon} alt="" className="icon" />
                    {t("Continue with Google")}
                  </button>
                  <button className="social-button twitter">
                    <img src={twittercoloredicon} alt="" className="icon" />
                    {t("Continue with Twitter")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Login;
