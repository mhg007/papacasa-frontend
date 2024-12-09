import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import location_Icon from "./Assests/Images/location_Icon.svg"
import heart_Icon from "./Assests/Images/heart_Icon.svg"
import announceIcon from "./Asessts/Images/mobile menu icons/announce-icon.svg";
import vendorIcon from "./Assests/Images/vendre-icon.svg";
import postAdIcon from "./Assests/Images/post-ad-icon.svg";
import messageIcon from "./Asessts/Images/mobile menu icons/messages-icon.svg";
import ProfileIcon from "./Asessts/Images/mobile menu icons/profile-icon.svg";
import buildingFront from "./Assests/Images/Building_front.png";
import grid2 from "./Assests/Images/grid_2.png";
import grid3 from "./Assests/Images/grid_3.png";
import grid4 from "./Assests/Images/grid_4.png";
import grid5 from "./Assests/Images/grid_5.png";
import grid6 from "./Assests/Images/grid_6.png";
import grid7 from "./Assests/Images/grid_7.png";
import grid8 from "./Assests/Images/grid_8.png";
import { Footer } from "../footer/Footer";
import "./mylisting.css";
import { useGetListingsQuery } from "../redux/services/services";
export const MyListing = () => {
    const { data: listingsData, isLoading: isListingsLoading } =
    useGetListingsQuery({userId:1});
    const [listData, setListingsData] = useState(listingsData);
    console.log("listingsData", listingsData);
    useEffect(() => {
        if (listingsData && Array.isArray(listingsData)) {
          const sortedData = [...listingsData].sort((a, b) => {
            const dateA = a.created_at ? new Date(a.created_at) : new Date(0); // Fallback to earliest date
            const dateB = b.created_at ? new Date(b.created_at) : new Date(0);
            return dateB - dateA;
          });
          setListingsData(sortedData);
        }
      }, [listingsData]);
  return (
    <>
      <body>
        <main>
          <section className="featured__full__width">
            <section className="featured__properties__section">
              <div className="container">
                <div className="featured__heading__text__btn__wrapper">
                  <div className="featured__heading__text">
                    <h2>Ma liste</h2>
                  </div>
                  <div className="featured__btn">
                    <button>Mon Annonce</button>
                    <p>Préféré</p>
                  </div>
                </div>

                <div className="properties__grid">
                  <div className="properties">
                    <div
                      style={{backgroundImage: `url(${buildingFront})`}}
                      className="properties__top__block"
                    >
                      <div className="price__block">
                        <p>-10% aujourd'hui</p>
                      </div>
                      <div className="favorite__icon">
                        <img src={heart_Icon} alt="" />
                      </div>
                    </div>
                    <div className="properties__bottom__block">
                      <p>3 lits</p>
                      <h4>Appartement Meublé</h4>
                      <div className="location">
                        <img src={location_Icon} alt="" />
                        <p>Paris, France</p>
                      </div>
                      <div className="divider"></div>
                      <h5>100 000 €</h5>
                    </div>
                  </div>
                  <div className="properties">
                    <div
                      style={{backgroundImage: `url(${grid2})`}}
                      className="properties__top__block"
                    >
                      <div className="price__block">
                        <p>-10% aujourd'hui</p>
                      </div>
                      <div className="favorite__icon">
                        <img src={heart_Icon} alt="" />
                      </div>
                    </div>
                    <div className="properties__bottom__block">
                      <p>3 lits</p>
                      <h4>Appartement Meublé</h4>
                      <div className="location">
                        <img src={location_Icon}  />
                        <p>Paris, France</p>
                      </div>
                      <div className="divider"></div>
                      <h5>100 000 €</h5>
                    </div>
                  </div>
                  <div className="properties">
                    <div
                      style={{backgroundImage: `url(${grid3})`}}
                      className="properties__top__block"
                    >
                      <div className="price__block">
                        <p>-10% aujourd'hui</p>
                      </div>
                      <div className="favorite__icon">
                        <img src={heart_Icon} alt="" />
                      </div>
                    </div>
                    <div className="properties__bottom__block">
                      <p>3 lits</p>
                      <h4>Appartement Meublé</h4>
                      <div className="location">
                        <img src={location_Icon} alt="" />
                        <p>Paris, France</p>
                      </div>
                      <div className="divider"></div>
                      <h5>100 000 €</h5>
                    </div>
                  </div>
                  <div className="properties">
                    <div
                      style={{backgroundImage: `url(${grid4})`}}
                      className="properties__top__block"
                    >
                      <div className="price__block">
                        <p>-10% aujourd'hui</p>
                      </div>
                      <div className="favorite__icon">
                        <img src={heart_Icon} alt="" />
                      </div>
                    </div>
                    <div className="properties__bottom__block">
                      <p>3 lits</p>
                      <h4>Appartement Meublé</h4>
                      <div className="location">
                        <img src={location_Icon} alt="" />
                        <p>Paris, France</p>
                      </div>
                      <div className="divider"></div>
                      <h5>100 000 €</h5>
                    </div>
                  </div>
                  <div className="properties">
                    <div
                      style={{backgroundImage: `url(${grid5})`}}
                      className="properties__top__block"
                    >
                      <div className="price__block">
                        <p>-10% aujourd'hui</p>
                      </div>
                      <div className="favorite__icon">
                        <img src={heart_Icon} alt="" />
                      </div>
                    </div>
                    <div className="properties__bottom__block">
                      <p>3 lits</p>
                      <h4>Appartement Meublé</h4>
                      <div className="location">
                        <img src={location_Icon} alt="" />
                        <p>Paris, France</p>
                      </div>
                      <div className="divider"></div>
                      <h5>100 000 €</h5>
                    </div>
                  </div>
                  <div className="properties">
                    <div
                      style={{backgroundImage: `url(${grid6})`}}
                      className="properties__top__block"
                    >
                      <div className="price__block">
                        <p>-10% aujourd'hui</p>
                      </div>
                      <div className="favorite__icon">
                        <img src={heart_Icon} alt="" />
                      </div>
                    </div>
                    <div className="properties__bottom__block">
                      <p>3 lits</p>
                      <h4>Appartement Meublé</h4>
                      <div className="location">
                        <img src={location_Icon} alt="" />
                        <p>Paris, France</p>
                      </div>
                      <div className="divider"></div>
                      <h5>100 000 €</h5>
                    </div>
                  </div>
                  <div className="properties">
                    <div
                      style={{backgroundImage: `url(${grid7})`}}
                      className="properties__top__block"
                    >
                      <div className="price__block">
                        <p>-10% aujourd'hui</p>
                      </div>
                      <div className="favorite__icon">
                        <img src={heart_Icon} alt="" />
                      </div>
                    </div>
                    <div className="properties__bottom__block">
                      <p>3 lits</p>
                      <h4>Appartement Meublé</h4>
                      <div className="location">
                        <img src={location_Icon} alt="" />
                        <p>Paris, France</p>
                      </div>
                      <div className="divider"></div>
                      <h5>100 000 €</h5>
                    </div>
                  </div>
                  <div className="properties">
                    <div
                      style={{backgroundImage: `url(${grid8})`}}
                      className="properties__top__block"
                    >
                      <div className="price__block">
                        <p>-10% aujourd'hui</p>
                      </div>
                      <div className="favorite__icon">
                        <img src={heart_Icon} alt="" />
                      </div>
                    </div>
                    <div className="properties__bottom__block">
                      <p>3 lits</p>
                      <h4>Appartement Meublé</h4>
                      <div className="location">
                        <img src={location_Icon} alt="" />
                        <p>Paris, France</p>
                      </div>
                      <div className="divider"></div>
                      <h5>100 000 €</h5>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </section>
        </main>
        <section className="mobile__menu__section">
          <div className="mobile__menu__wrapper">
            <div className="mobile__menu__item">
              <Link >
                <img
                  src={announceIcon}
                  alt=""
                />
                <p>Annouce</p>
              </Link>
            </div>
            <div className="mobile__menu__item">
              <Link >
                <img
                  src={vendorIcon}
                  alt=""
                />
                <p>Vendre</p>
              </Link>
            </div>
            <div className="mobile__menu__item">
              <Link >
                <img
                  src={postAdIcon}
                  alt=""
                />
                <p>Annonce</p>
              </Link>
            </div>
            <div className="mobile__menu__item">
              <Link >
                <img
                  src={messageIcon}
                  alt=""
                />
                <p>Messages</p>
              </Link>
            </div>
            <div className="mobile__menu__item">
              <Link >
                <img
                  src={ProfileIcon}
                  alt=""
                />
                <p>Profil</p>
              </Link>
            </div>
          </div>
        </section>
        <Footer/>
      </body>
    </>
  );
};
