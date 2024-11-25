import React from "react";
import { Link } from "react-router-dom";
import "./css/homepage.css";
import newlogo from "./Assests/Images/new-logo.svg";
import Hero_image from "./Assests/Images/Hero_image.webp";
import search_icon from "./Assests/Images/search-icon.svg";
import service_1 from "./Assests/Images/service_1.png";
import service_2 from "./Assests/Images/service_2.png";
import service_3 from "./Assests/Images/service_3.png";
import service_4 from "./Assests/Images/service_4.png";
import blk_right_arrow from "./Assests/Images/blk_right_arrow.svg";
import heart_Icon from "./Assests/Images/heart_Icon.svg";
import location_Icon from "./Assests/Images/location_Icon.svg";
import Badge_1 from "./Assests/Images/Badge (1).png";
import Badge_2 from "./Assests/Images/Badge (2).png";
import Badge_3 from "./Assests/Images/Badge3.png";
import why_papacasa_image from "./Assests/Images/why_papacasa_image.png";
import comas from "./Assests/Images/comas.png";
import previous_icon from "./Assests/Images/previous_icon.svg";
import next_icon from "./Assests/Images/next-icon.svg";
import Building_front from "./Assests/Images/Buildingfront.png";
import grid_2 from "./Assests/Images/grid_2.png";
import grid_3 from "./Assests/Images/grid_3.png";
import grid_4 from "./Assests/Images/grid_4.png";
import grid_5 from "./Assests/Images/grid_5.png";
import grid_6 from "./Assests/Images/grid_6.png";
import grid_7 from "./Assests/Images/grid_7.png";
import grid_8 from "./Assests/Images/grid_8.png";
import Farm_house from "./Assests/Images/Farm house.png";
import Scenic_home from "./Assests/Images/Scenic home.png";
import Apartments from "./Assests/Images/Apartments.png";
import home_pictures from "./Assests/Images/home pictures.png";
// import footericonsyoutube from "./Assests/Images/youtube (2).svg";
// import footericonstwitter from "./Assests/Images/insta.svg";
// import footericonsinsta from "./Assests/Images/twitter (2).svg";
// import footericonsfacebook from "./Assests/Images/facebook.svg";
// import li_home from "./Assests/Images/mobile menu icons/li_home.svg";
// import cart_icon from "./Assests/Images/mobile menu icons/cart-icon.svg";
// import post_ad_icon from "./Assests/Images/mobile menu icons/post-ad-icon.svg";
// import vendre_icon from "./Assests/Images/mobile menu icons/vendre-icon.svg";
// import info_icon from "./Assests/Images/mobile menu icons/info-icon.svg";
import searchicon from "./Assests/Images/search-icon.svg";
import {
  useFavoritesIconMutation,
  useGetListingsQuery,
} from "../redux/services/services";
import { message } from "antd";
// import { useTranslation } from "react-i18next";
// import Navbar from "../navbar/Navbar";
// import MobileNavbar from "../mobileNav/MobileNavbar";

function HomPage() {
  const token = localStorage.getItem("token");
  console.log(token);
  const {
    data: listingsData,
    error: listingsError,
    isLoading: isListingsLoading,
  } = useGetListingsQuery(token);
  console.log("Daataaaaaaa", listingsData);
  const [favoritesIcon, {}] = useFavoritesIconMutation(token);

  const handleFavortiesIcons = async (e) => {
    const payload = {
      utilisateur: e.utilisateur,
      annonce: e.id,
    };
    const headers = {
      "Content-Type": "application/json",
      Accept: "*/*",
    };
    try {
      const response = await favoritesIcon({ payload, headers }).unwrap();
      message.success("Favorites Successfully");
      console.log("Favorites Successfully", response);
      // navigate("/");
    } catch (error) {
      message.error("Favorites Failed");
      console.log("Favorites Failed", error);
    }
  };
  return (
    <>
      {/* <Navbar changeLang={changeLang} t={t}/> */}
      <main>
        <section className="hero__banner">
          <div className="container">
            <div className="hero__wrapper">
              <div className="hero__left">
                <h1 className="hero__heading">
                  Immobilier et vacances 0% de commission{" "}
                </h1>
                <p className="hero__text">
                  <strong>Trouvez</strong> ou{" "}
                  <Link>
                    <strong className="proposez">proposez</strong>
                  </Link>{" "}
                  un bien immobilier de Particulier à Particulier, sans
                  commission.
                </p>
                <button className="hero__btn">Publier une annonce</button>
              </div>
              <div className="hero__right">
                <img src={Hero_image} alt="" className="hero__image" />
              </div>
            </div>
            <div className="search__bar">
              <form className="search__form">
                <div className="search__types-1">
                  <h2>Type de recherche</h2>
                  <label htmlFor="">
                    <select className="m-0" name="" id="">
                      <option className="" value="">
                        Sélectionner
                      </option>
                    </select>
                  </label>
                </div>
                <div className="search__types">
                  <h2>Localisation</h2>
                  <label htmlFor="">
                    <select className="m-0" name="" id="">
                      <option value="">Sélectionner</option>
                    </select>
                  </label>
                </div>
                <div className="search__types">
                  <h2>Types de bien</h2>
                  <label htmlFor="">
                    <select className="m-0" name="" id="">
                      <option value="">Sélectionner</option>
                    </select>
                  </label>
                </div>
                <div className="search__types">
                  <h2>Pièces</h2>
                  <label htmlFor="">
                    <select className="m-0" name="" id="">
                      <option value="">Sélectionner</option>
                    </select>
                  </label>
                </div>
                <div className="search__types">
                  <h2>Prix maximum</h2>
                  <label htmlFor="">
                    <select className="m-0" name="" id="">
                      <option value="">Ajouter Prix (€)</option>
                    </select>
                  </label>
                </div>
                <div className="search__icon">
                  <Link>
                    {" "}
                    <img src={searchicon} alt="" />
                  </Link>
                </div>
              </form>
            </div>

            <form action="" className="mobile__search__btn">
              <div className="mbl__Srch__btn__wrapper">
                <div className="mbl_srch_icon">
                  <img src={search_icon} alt="" />
                </div>
                <p>Rechercher des maisons </p>
              </div>
            </form>
          </div>
        </section>
        <section className="services__section">
          <div className="container">
            <div className="services__heading__text">
              <h2>Services</h2>
              <p>Tous les services exclusifs que nous offrons</p>
            </div>
            <div className="services__grid">
              <Link>
                <div className="services">
                  <img src={service_1} alt="" />
                  <h3>Vendez serein!</h3>
                  <p>
                    On s'occupe de votre vente ! Visite virtuelle, photos pro,
                    estimation du prix, filtrage des contacts... et 0 % de
                    commission.
                  </p>
                </div>
              </Link>
              <Link>
                <div className="services">
                  <img src={service_2} alt="" />
                  <h3>Locathèque</h3>
                  <p>
                    Grâce au dossier de location, locataires et propriétaires
                    gagnent du temps sur la mise en relation !
                  </p>
                </div>
              </Link>
              <Link>
                <div className="services">
                  <img src={service_3} alt="" />
                  <h3>Ateliers en ligne</h3>
                  <p>
                    Vendre son bien, signer un contrat de location, location
                    vacances... Pendant une heure, on vous explique tout dans
                    nos ateliers !
                  </p>
                </div>
              </Link>
              <Link>
                <div className="services">
                  <img src={service_4} alt="" />
                  <h3>Panneau A Vendre</h3>
                  <p>
                    Touchez une nouvelle cible d'acheteurs grâce au panneau A
                    vendre, offert avec votre annonce Papacasa
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>
        <section className="featured__full__width">
          <section className="featured__properties__section">
            <div className="container">
              <div className="featured__heading__text__btn__wrapper">
                <div className="featured__heading__text">
                  <h2>Lieux en Vedette</h2>
                  <p>Lieux populaires à Vendre</p>
                </div>
                <div className="featured__btn">
                  <button>Rechercher plus</button>
                  <Link>
                    <img src={blk_right_arrow} alt="" />
                  </Link>
                </div>
              </div>
              {(listingsData || []).map((item) => (
                <div className="properties__grid">
                  <div className="properties">
                    <div
                      style={{ backgroundImage: `url(${Building_front})` }}
                      className="properties__top__block"
                    >
                      <div className="price__block">
                        <p>-10% aujourd'hui</p>
                      </div>
                      <div className="favorite__icon">
                        <img
                          name="favIcon"
                          onClick={() => handleFavortiesIcons(item)}
                          src={heart_Icon}
                          alt=""
                          className="cursor-pointer"
                        />
                      </div>
                    </div>
                    <div className="properties__bottom__block">
                      <p>3 lits</p>
                      <h4>{item.titre}</h4>
                      <div className="location">
                        <img src={location_Icon} alt="" />
                        <p className="">
                          {item.adresse} <span>,</span>
                        </p>
                        <p className="">{item.ville}</p>
                      </div>
                      <div className="divider"></div>
                      <h5>{item.prix}</h5>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </section>

        <section className="why__papacasa__section">
          <div className="container">
            <div className="why__ppc__wrapper">
              <div className="why__ppc__left">
                <h6>Why Papacasa?</h6>
                <h2>
                  Pourquoi plus de 350.000 propriétaires par an choisissent
                  Papacasa{" "}
                </h2>
                <img src={Badge_1} alt="" />
                <h3>Le n°1 de l’immobilier entre particuliers</h3>
                <p>
                  Avec 3 millions de visiteurs par mois, PAP est un
                  incontournable pour toutes les personnes qui recherchent
                  activement un logement.
                </p>
                <img src={Badge_2} alt="" />
                <h3>45 ans d'expérience</h3>
                <p>
                  Comment on survit 45 ans dans un milieu aussi concurrentiel
                  que l’immobilier ? En étant efficace, tout simplement.
                </p>
                <img src={Badge_3} alt="" />
                <h3>200 collaborateurs à votre service</h3>
                <p>
                  Derrière le site, nous sommes une équipe de 200 collaborateurs
                  qui vous accompagnent, et ça, ça change tout.
                </p>
              </div>
              <div className="why__ppc__right">
                <img src={why_papacasa_image} alt="" />
              </div>
            </div>
            <div className="why__ppc__btn">
              <button className="why__ppc__left__btn">
                J'ai un logement à vendre
              </button>
              <button className="why__ppc__right__btn">
                J'ai un logement à louer
              </button>
            </div>
          </div>
        </section>

        <section className="testimonials__section">
          <div className="container">
            <div className="testimonials">
              <div className="comas__image">
                <img src={comas} alt="" />
              </div>
              <div className="testimonials__content">
                <h3>Promesse tenue… !</h3>
                <p>
                  Il est très rare aujourd'hui de tomber sur un société qui
                  tient sa parole en terme de services rendus, de la relation
                  client en elle-même jusque dans les résultats obtenus. Un sans
                  faute sur toute la ligne !
                </p>
                <h4>Florent M.</h4>
                <p>Appartement 2 pièces • 31 m² • Paris XVI</p>
                <div className="testimonials__btn">
                  <Link className="left__arrow__btn">
                    <img src={previous_icon} alt="" />
                  </Link>
                  <Link className="right__arrow__btn">
                    <img src={next_icon} alt="" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="counters__section">
          <div className="counters__container">
            <h2>Un nombre qui compte vraiment</h2>
            <h3>
              Repellendus repellat laudantium.Notre accomplissement dans le
              parcours illustré en chiffres
            </h3>
            <div className="counters__grid">
              <div className="counters">
                <h4>40+</h4>
                <p>Clients Satisfaits</p>
              </div>
              <div className="counters">
                <h4>540+</h4>
                <p>Projets Terminés</p>
              </div>
              <div className="counters">
                <h4>300</h4>
                <p>Membres Dévoués</p>
              </div>
              <div className="counters">
                <h4>25+</h4>
                <p>Prix Remportés</p>
              </div>
            </div>
          </div>
        </section>
        <section className="blogues__section">
          <div className="container">
            <div className="blogues__heading__text">
              <h2>Blogues</h2>
            </div>
            <div className="blogues__grid">
              <Link>
                <div className="blogues">
                  <img src={Farm_house} alt="" />
                  <h3>
                    Sarcelles : la ville à ne pas zapper si vous voulez investir
                    en 2025
                  </h3>
                  <p>
                    Sarcelles is not necessarily the first city that comes to
                    mind htmlFor investment. It is...
                  </p>
                  <div className="blogues__badge">
                    <p>Immobilier</p>
                  </div>
                </div>
              </Link>
              <Link>
                <div className="blogues">
                  <img src={Scenic_home} alt="" />
                  <h3>
                    Sarcelles : la ville à ne pas zapper si vous voulez investir
                    en 2025
                  </h3>
                  <p>
                    Sarcelles is not necessarily the first city that comes to
                    mind htmlFor investment. It is...
                  </p>
                  <div className="blogues__badge">
                    <p>Immobilier</p>
                  </div>
                </div>
              </Link>
              <Link>
                <div className="blogues">
                  <img src={Apartments} alt="" />
                  <h3>
                    Sarcelles : la ville à ne pas zapper si vous voulez investir
                    en 2025
                  </h3>
                  <p>
                    Sarcelles is not necessarily the first city that comes to
                    mind htmlFor investment. It is...
                  </p>
                  <div className="blogues__badge">
                    <p>Immobilier</p>
                  </div>
                </div>
              </Link>
              <Link>
                <div className="blogues">
                  <img src={home_pictures} alt="" />
                  <h3>
                    Sarcelles : la ville à ne pas zapper si vous voulez investir
                    en 2025
                  </h3>
                  <p>
                    Sarcelles is not necessarily the first city that comes to
                    mind htmlFor investment. It is...
                  </p>
                  <div className="blogues__badge">
                    <p>Immobilier</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>
      {/* <MobileNavbar/> */}
      {/* <section className="mobile__menu__section">
        <div className="mobile__menu__wrapper">
          <div className="mobile__menu__item">
            <Link>
              <img src={li_home} alt="" />
              <p>Accueil</p>
            </Link>
          </div>
          <div className="mobile__menu__item">
            <Link>
              <img src={cart_icon} alt="" />
              <p>Acheter</p>
            </Link>
          </div>
          <div className="mobile__menu__item">
            <Link>
              <img src={post_ad_icon} alt="" />
              <p>Annonce</p>
            </Link>
          </div>
          <div className="mobile__menu__item">
            <Link>
              <img src={vendre_icon} alt="" />
              <p>Vendre</p>
            </Link>
          </div>
          <div className="mobile__menu__item">
            <Link>
              <img src={info_icon} alt="" />
              <p>À propos</p>
            </Link>
          </div>
        </div>
      </section> */}
      {/* <footer>
        <section>
          <div className="footer__container">
            <section className="main__footer__wrapper">
              <div className="ppc__logo__social flex flex-col gap-5 pb-10 ">
                <Link>
                  <img
                    src="/Asessts/Images/new-logo.svg"
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
              <div className="ppc__pages">
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
        </section>
      </footer> */}
    </>
  );
}

export default HomPage;
