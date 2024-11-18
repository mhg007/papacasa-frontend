import React from 'react'
import Navbar from '../../navbar/Navbar'
import { Footer } from '../../footer/Footer'
import ".//listTwo.css"
import currentLocation from "./Asessts/Images/current-location-icon.svg"
import liHome from "./Asessts/Images/mobile menu icons/li_home.svg"
import cartIcon from "./Asessts/Images/mobile menu icons/cart-icon.svg"
import postAdIcon from "./Asessts/Images/mobile menu icons/post-ad-icon.svg"
import { useTranslation } from 'react-i18next';

function ListTow() {
    const { t, i18n } = useTranslation();
      
        const changeLang = (lang) => {
          i18n.changeLanguage(lang);
          console.log("clicked",lang)
        };
  return (
    <>
    <div>
        <Navbar changeLang={changeLang} t={t}/>
       <main>
        <div class="list-form-2-background">
            <div class="list-form-2-inner__container">
                <h2>Publier une annonce de vente</h2>
                <div class="progress">
                    <span>02 / 10</span>
                </div>
                <div class="list-form-2-form-container">
                    <h3>Où se trouve votre maison à vendre ?</h3>
                    <div class="list-form-2-separator"></div>
                    <div class="location-option">
                        <img src={currentLocation} />
                        <p>Use current location</p>
                    </div>

                    <form class="country__info__form">
                        <label for="list-form-2-country">Country/Region</label>
                        <select id="country">
                            <option>France</option>
                            <option>Germany</option>
                            <option>Spain</option>
                            {/* <!-- Add more countries as needed --> */}
                        </select>

                        <label for="street">Street</label>
                        <input type="text" id="street"/>

                        <div class="address-group">
                            <div class="address-group-inner">
                                <label for="city">City</label>
                                <input type="text" id="city"/>
                            </div>
                            <div class="address-group-inner">
                                <label for="state">State</label>
                                <input type="text" id="state"/>
                            </div>
                            <div class="address-group-inner">
                                <label for="postal-code">Postal code</label>
                                <input type="text" id="postal-code"/>
                            </div>
                        </div>

                        <div class="detailed-address">
                            <h5>Detailed address</h5>
                                <h4>New Road, 42 Rue de Rivoli, 75001 Paris</h4>
                        </div>


                        <div class="map-placeholder">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11426922.61546134!2d-7.988112082935941!3d45.63523546072285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd54a02933785731%3A0x6bfd3f96c747d9f7!2sFrance!5e0!3m2!1sen!2s!4v1731099145878!5m2!1sen!2s"
                                width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"></iframe>

                        </div>


                    </form>

                </div>
                <div class="list-form-2-buttons">
                    <button type="button" class="back">Retour</button>
                    <button type="submit" class="next">Suivant</button>
                </div>
            </div>
        </div>
    </main>
    <section class="mobile__menu__section">
        <div class="mobile__menu__wrapper">
            <div class="mobile__menu__item">
                <a href="">
                    <img src={liHome} />
                    <p>Accueil</p>
                </a>
            </div>
            <div class="mobile__menu__item">
                <a href="">
                    <img src={cartIcon} />
                    <p>Acheter</p>
                </a>
            </div>
            <div class="mobile__menu__item">
                <a href="">
                    <img src={postAdIcon} />
                    <p>Annonce</p>
                </a>
            </div>
            <div class="mobile__menu__item">
                <a href="">
                    <img src="/Asessts/Images/mobile menu icons/vendre-icon.svg" />
                    <p>Vendre</p>
                </a>
            </div>
            <div class="mobile__menu__item">
                <a href="">
                    <img src="/Asessts/Images/mobile menu icons/info-icon.svg" />
                    <p>À propos</p>
                </a>
            </div>

        </div>
    </section>
    <Footer/>
    </div>
    </>
  )
}

export default ListTow
