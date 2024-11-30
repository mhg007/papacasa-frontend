import React from 'react'
import ".//changePassword.css"
import  newlogo from "./Asessts/Images/new-logo.svg"
import  bellicon from "./Asessts/Images/bell-icon.png"
import  userIageIcon from "./Asessts/Images/user-image-icon.svg"

function ChangePasword() {
  return (
    <>
       {/* <header>
          <section>
            <div class="container">
                <div class="header__main__wrapper">
                    <div class="ppc__logo__menu">
                        <div class="ppc__logo">
                            <a href="/"> <img src={newlogo}  /></a>
                        </div>
                        <div class="main-menu">
                            <nav>
                                <ul>
                                    <a href="">
                                        <li>Announces</li>
                                    </a>
                                    <a href="">
                                        <li>Messages</li>
                                    </a>
                                    <a href="">
                                        <li>Profil</li>
                                    </a>

                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div class="ppc__header__btn">
                        <a href="">
                            <img src={bellicon}  />
                        </a>
                        <a href="">
                            <img src={userIageIcon}  />
                        </a>
                         <a ><button class="header__btn">Publier une annonce</button></a> 
                    </div>
                     <div class="ppc__header__mobile__btn">
                        <a ><button class="header__mobile__btn">Se connecters</button></a>
                    </div> 
                </div>
            </div>
            
        </section>
    </header> */}
    <main>
        <section class="change-password-section">
            <div class="password-container">
                <h1>Changer le mot de passe</h1>
                <form class="change-password-form">
                    <div class="change-password-form-group">
                        <label for="mot-de-passe-actuel">Mot de passe actuel
                            <input type="password" id="mot-de-passe-actuel" placeholder="*********" required />
                        </label>
                    </div>
                    <div class="change-password-form-group">
                        <label for="nouveau-mot-de-passe">Nouveau mot de passe
                            <input type="password" id="nouveau-mot-de-passe" placeholder="*********" required />
                        </label>
                    </div>
                    <div class="change-password-form-group">
                        <label for="confirmer-le-nouveau-mot-de-passe">Confirmer le nouveau mot de passe
                            <input type="password" id="confirmer-le-nouveau-mot-de-passe" placeholder="*********"
                                required />
                        </label>
                    </div>
                    <button type="submit" class="submit-btn">Mettre à jour le mot de passe</button>
                </form>
            </div>
        </section>
    </main>
    {/* <section class="mobile__menu__section">
        <div class="mobile__menu__wrapper">
            <div class="mobile__menu__item">
                <a href="">
                    <img src="/Asessts/Images/mobile menu icons/announce-icon.svg"  />
                    <p>Annouce</p>
                </a>
            </div>
            <div class="mobile__menu__item">
                <a href="">
                    <img src="/Asessts/Images/mobile menu icons/vendre-icon.svg"  />
                    <p>Vendre</p>
                </a>
            </div>
            <div class="mobile__menu__item">
                <a href="">
                    <img src="/Asessts/Images/mobile menu icons/post-ad-icon.svg"  />
                    <p>Annonce</p>
                </a>
            </div>
            <div class="mobile__menu__item">
                <a href="">
                    <img src="/Asessts/Images/mobile menu icons/messages-icon.svg"  />
                    <p>Messages</p>
                </a>
            </div>
            <div class="mobile__menu__item">
                <a href="">
                    <img src="/Asessts/Images/mobile menu icons/profile-icon.svg"  />
                    <p>Profil</p>
                </a>
            </div>

        </div>
    </section>
    <footer>
        <section class="footer__section">
            <div class="footer__container">

                <section class="main__footer__wrapper">
                    <div class="ppc__logo__social">
                        <a ><img src="/Asessts/Images/new-logo.svg" class= "footer__logo"/></a>

                        <a >
                            <div class="links">
                                <img src="/Asessts/Images/footer-icons/facebook.svg" class= "social-icons" />
                                <p class="social__text">Facebook</p>
                            </div>
                        </a>
                        <a >
                            <div class="links">
                                <img src="/Asessts/Images/footer-icons/twitter (2).svg" class= "social-icons" />
                                <p class="social__text">Twitter</p>
                            </div>
                        </a>
                        <a >
                            <div class="links">
                                <img src="/Asessts/Images/footer-icons/insta.svg" class= " social-icons" />
                                <p class="social__text">Instagram</p>
                            </div>
                        </a>
                        <a >
                            <div class="links">
                                <img src="/Asessts/Images/footer-icons/youtube (2).svg" class= "social-icons" />
                                <p class="social__text">Youtube</p>
                            </div>
                        </a>
                    </div>
                    <div class="ppc__pages">
                        <h2>Pages</h2>
                        <a >
                            <li class="footer__pages">Prix immo</li>
                        </a>
                        <a >
                            <li class="footer__pages">Acheter</li>
                        </a>
                        <a >
                            <li class="footer__pages">Louer</li>
                        </a>
                        <a >
                            <li class="footer__pages">Vacances</li>
                        </a>
                        <a >
                            <li class="footer__pages">Mon espace</li>
                        </a>
                    </div>

                </section>

            </div>
        </section>
    </footer> */}
    </>
  )
}

export default ChangePasword
