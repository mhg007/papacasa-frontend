import React from 'react'
import { Link } from 'react-router-dom'
import ".//listOne.css"
import Navbar from '../../navbar/Navbar'


function ListOne() {
  return (
    <>
    <Navbar/>   
    <main>
        <div class="list-form-1-background">
            <div class="list-form-1__inner__container">
                <h2>Publier une annonce de vente</h2>
                <div class="progress">
                    <p>01</p>
                    <span>/ 10</span>
                </div>
                <form action="">
                    <div class="list-form-1-form-container">
                        <h3>Choisissez votre type de bien</h3>
                        <div class="property-types">
                            <button>Appartement</button>
                            <button>Maison</button>
                            <button>Garage / Parking</button>
                            <button>Terrain</button>
                            <button>Immeuble</button>
                            <button>Fonds de commerce</button>
                            <button>Local commercial</button>
                            <button>Autres</button>
                        </div>

                    </div>
                    <div class="buttons">
                        <button class="back">Retour</button>
                        <button class="next">Suivant</button>
                    </div>
                </form>
            </div>
        </div>
    </main>
    <section class="mobile__menu__section">
        <div class="mobile__menu__wrapper">
            <div class="mobile__menu__item">
                <Link href="">
                    <img src="/Asessts/Images/mobile menu icons/li_home.svg"  />
                    <p>Accueil</p>
                </Link>
            </div>
            <div class="mobile__menu__item">
                <Link href="">
                    <img src="/Asessts/Images/mobile menu icons/cart-icon.svg"  />
                    <p>Acheter</p>
                </Link>
            </div>
            <div class="mobile__menu__item">
                <Link href="">
                    <img src="/Asessts/Images/mobile menu icons/post-ad-icon.svg"  />
                    <p>Annonce</p>
                </Link>
            </div>
            <div class="mobile__menu__item">
                <Link href="">
                    <img src="/Asessts/Images/mobile menu icons/vendre-icon.svg"  />
                    <p>Vendre</p>
                </Link>
            </div>
            <div class="mobile__menu__item">
                <Link href="">
                    <img src="/Asessts/Images/mobile menu icons/info-icon.svg"  />
                    <p>À propos</p>
                </Link>
            </div>

        </div>
    </section>
    <footer>
        <section>
            <div class="footer__container">

                <section class="main__footer__wrapper">
                    <div class="ppc__logo__social">
                        <Link><img src="/Asessts/Images/new-logo.svg"   class="footer__logo"/></Link>

                        <Link href="#">
                            <div class="links">
                                <img src="/Asessts/Images/footer-icons/facebook.svg"   class="social-icons" />
                                <p class="social__text">Facebook</p>
                            </div>
                        </Link>
                        <Link href="#">
                            <div class="links">
                                <img src="/Asessts/Images/footer-icons/twitter (2).svg"   class="social-icons" />
                                <p class="social__text">Twitter</p>
                            </div>
                        </Link>
                        <Link href="#">
                            <div class="links">
                                <img src="/Asessts/Images/footer-icons/insta.svg"  class=" social-icons" />
                                <p class="social__text">Instagram</p>
                            </div>
                        </Link>
                        <Link href="#">
                            <div class="links">
                                <img src="/Asessts/Images/footer-icons/youtube (2).svg"   class="social-icons" />
                                <p class="social__text">Youtube</p>
                            </div>
                        </Link>
                    </div>
                    <div class="ppc__pages">
                        <h2>Pages</h2>
                        <Link href="#">
                            <li class="footer__pages">Prix immo</li>
                        </Link>
                        <Link href="#">
                            <li class="footer__pages">Acheter</li>
                        </Link>
                        <Link href="#">
                            <li class="footer__pages">Louer</li>
                        </Link>
                        <Link href="#">
                            <li class="footer__pages">Vacances</li>
                        </Link>
                        <Link href="#">
                            <li class="footer__pages">Mon espace</li>
                        </Link>
                    </div>

                </section>

            </div>
        </section>
    </footer>
    </>
  )
}

export default ListOne
