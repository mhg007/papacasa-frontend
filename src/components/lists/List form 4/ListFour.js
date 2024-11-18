import React from 'react'
import Navbar from '../../navbar/Navbar'
import { Footer } from '../../footer/Footer'
import ".//listFour.css"
import { useTranslation } from 'react-i18next';

function ListFour() {
    const { t, i18n } = useTranslation();
      
        const changeLang = (lang) => {
          i18n.changeLanguage(lang);
          console.log("clicked",lang)
        };
  return (
    <>
      <div>
      <Navbar changeLang={changeLang} t={t}/>        <main>
        <div class="list-form-4-background">
            <div class="list-form-4-inner__container">
                <h2>Publier une annonce de vente</h2>
                <div class="progress">
                    <p>04</p>
                    <span>/ 10</span>
                </div>
                <div class="list-form-4-form-container">
                    <h3>Caractéristiques</h3>
                    <div class="list-form-4-separator"></div>

                    <form>
                        <div class="checkbox-group">
                            <label><input type="checkbox"checked /> Climatisation</label>
                            <label><input type="checkbox"checked /> Alarme</label>
                            <label><input type="checkbox"checked /> Armoires</label>

                            <label><input type="checkbox"/> Balcon</label>
                            <label><input type="checkbox"checked /> Ascenseur</label>
                            <label><input type="checkbox"/> Cuisine équipée</label>

                            <label><input type="checkbox"/> Meublé</label>
                            <label><input type="checkbox"/> Double vitrage</label>
                            <label><input type="checkbox"/> Chauffage collectif</label>

                            <label><input type="checkbox"checked /> Vidéosurveillance</label>
                            <label><input type="checkbox"/> Résidence fermée</label>
                            <label><input type="checkbox"/> Garage</label>

                            <label><input type="checkbox"checked /> Proche de la plage</label>
                            <label><input type="checkbox"/> Proche du métro</label>
                            <label><input type="checkbox"/> Finitions de luxe</label>

                            <label><input type="checkbox"/> Penthouse</label>
                            <label><input type="checkbox"/> Kitchenette</label>
                            <label><input type="checkbox"/> Terrasse</label>

                            <label><input type="checkbox"/> Bon ensoleillement</label>
                            <label><input type="checkbox"/> Suite</label>
                            <label><input type="checkbox"/> Cellier</label>

                            <label><input type="checkbox"/> Piscine</label>
                            <label><input type="checkbox"/> Débarras</label>
                            <label><input type="checkbox"/> Jardin</label>
                        </div>


                    </form>
                </div>
                <div class="list-form-4-form-buttons">
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
                    <img src="/Asessts/Images/mobile menu icons/li_home.svg" />
                    <p>Accueil</p>
                </a>
            </div>
            <div class="mobile__menu__item">
                <a href="">
                    <img src="/Asessts/Images/mobile menu icons/cart-icon.svg" />
                    <p>Acheter</p>
                </a>
            </div>
            <div class="mobile__menu__item">
                <a href="">
                    <img src="/Asessts/Images/mobile menu icons/post-ad-icon.svg" />
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

export default ListFour
