import React from "react";
import { Link, useNavigate } from "react-router-dom";
import newLogo from "./Assets/new-logo.svg";
import bellIcon from "./Assets/bell-icon.png";
import ".//navbar.css";
import ProfileIcon from "./ProfileIcon";

function Navbar({ changeLang, t, i18n }) {
  
  const navigate = useNavigate();
  const token = JSON.parse(localStorage.getItem("token"))?.access;
  // console.log(token)
  return (
    <>
      <header>
        <section>
          <div className="container">
            <div className="header__main__wrapper w-[100%] flex min-w-[60%]">
              <div className="ppc__logo__menu  min-w-[60%]">
                <div className="ppc__logo ">
                  <Link to={"/"}>
                    <img src={newLogo} alt="" />
                  </Link>
                </div>
                <div className="main-menu flex flex-wrap">
                  <nav className="">
                    <ul>
                      <Link>
                        <li>{t("Buy")}</li>
                      </Link>
                      <Link to="/lists/1">
                        <li>{t("Sell")}</li>
                      </Link>
                      <Link>
                        <li>{t("About")}</li>
                      </Link>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="hideDiv w-full flex flex-row justify-between">
                <div className="flex w-[100%] justify-center items-center gap-9 ">
                  {!token ? (
                    <Link to={"/login"}>
                      <button className="header__btn">{t("Log in")}</button>
                    </Link>
                  ) : (
                    <Link to={"/lists/1"}>
                      <button className="header__btn">{t("Post an ad")}</button>
                    </Link>
                  )}

                  <div className=" flex gap-5 ">
                    <button onClick={() => changeLang("en")}>En</button>
                    <button onClick={() => changeLang("fr")}>Fr</button>
                  </div>
                </div>
                <div className="flex justify-center items-center gap-3 w-[170px] mr-5">
                  {token?
                  <>
                  <div>
                    <Link>
                      <img src={bellIcon} />
                    </Link>
                  </div>
                    <ProfileIcon/>
                  </>:
                    
                    null

                  }
                  <div>
                  </div>
                </div>
              </div>
              {!token ? (
                <div className="ppc__header__mobile__btn">
                  <Link>
                    <button className="header__mobile__btn text-black font-extrabold text-8xl">
                      Se connecters
                    </button>
                  </Link>
                </div>
              ) : null}
            </div>
          </div>
        </section>
      </header>
    </>
  );
}

export default Navbar;
