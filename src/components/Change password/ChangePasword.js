import React from 'react'
import ".//changePassword.css"


function ChangePasword() {
  return (
    <>
       {/* <header>
          <section>
            <div className="container">
                <div className="header__main__wrapper">
                    <div className="ppc__logo__menu">
                        <div className="ppc__logo">
                            <a href="/"> <img src={newlogo}  /></a>
                        </div>
                        <div className="main-menu">
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
                    <div className="ppc__header__btn">
                        <a href="">
                            <img src={bellicon}  />
                        </a>
                        <a href="">
                            <img src={userIageIcon}  />
                        </a>
                         <a ><button className="header__btn">Publier une annonce</button></a> 
                    </div>
                     <div className="ppc__header__mobile__btn">
                        <a ><button className="header__mobile__btn">Se connecters</button></a>
                    </div> 
                </div>
            </div>
            
        </section>
    </header> */}
    <main>
        <section className="change-password-section">
            <div className="password-container">
                <h1>Changer le mot de passe</h1>
                <form className="change-password-form">
                    <div className="change-password-form-group">
                        <label for="mot-de-passe-actuel">Mot de passe actuel
                            <input type="password" id="mot-de-passe-actuel" placeholder="*********" required />
                        </label>
                    </div>
                    <div className="change-password-form-group">
                        <label for="nouveau-mot-de-passe">Nouveau mot de passe
                            <input type="password" id="nouveau-mot-de-passe" placeholder="*********" required />
                        </label>
                    </div>
                    <div className="change-password-form-group">
                        <label for="confirmer-le-nouveau-mot-de-passe">Confirmer le nouveau mot de passe
                            <input type="password" id="confirmer-le-nouveau-mot-de-passe" placeholder="*********"
                                required />
                        </label>
                    </div>
                    <button type="submit" className="submit-btn">Mettre à jour le mot de passe</button>
                </form>
            </div>
        </section>
    </main>
    {/* <section className="mobile__menu__section">
        <div className="mobile__menu__wrapper">
            <div className="mobile__menu__item">
                <a href="">
                    <img src="/Asessts/Images/mobile menu icons/announce-icon.svg"  />
                    <p>Annouce</p>
                </a>
            </div>
            <div className="mobile__menu__item">
                <a href="">
                    <img src="/Asessts/Images/mobile menu icons/vendre-icon.svg"  />
                    <p>Vendre</p>
                </a>
            </div>
            <div className="mobile__menu__item">
                <a href="">
                    <img src="/Asessts/Images/mobile menu icons/post-ad-icon.svg"  />
                    <p>Annonce</p>
                </a>
            </div>
            <div className="mobile__menu__item">
                <a href="">
                    <img src="/Asessts/Images/mobile menu icons/messages-icon.svg"  />
                    <p>Messages</p>
                </a>
            </div>
            <div className="mobile__menu__item">
                <a href="">
                    <img src="/Asessts/Images/mobile menu icons/profile-icon.svg"  />
                    <p>Profil</p>
                </a>
            </div>

        </div>
    </section>
    <footer>
        <section className="footer__section">
            <div className="footer__container">

                <section className="main__footer__wrapper">
                    <div className="ppc__logo__social">
                        <a ><img src="/Asessts/Images/new-logo.svg" className= "footer__logo"/></a>

                        <a >
                            <div className="links">
                                <img src="/Asessts/Images/footer-icons/facebook.svg" className= "social-icons" />
                                <p className="social__text">Facebook</p>
                            </div>
                        </a>
                        <a >
                            <div className="links">
                                <img src="/Asessts/Images/footer-icons/twitter (2).svg" className= "social-icons" />
                                <p className="social__text">Twitter</p>
                            </div>
                        </a>
                        <a >
                            <div className="links">
                                <img src="/Asessts/Images/footer-icons/insta.svg" className= " social-icons" />
                                <p className="social__text">Instagram</p>
                            </div>
                        </a>
                        <a >
                            <div className="links">
                                <img src="/Asessts/Images/footer-icons/youtube (2).svg" className= "social-icons" />
                                <p className="social__text">Youtube</p>
                            </div>
                        </a>
                    </div>
                    <div className="ppc__pages">
                        <h2>Pages</h2>
                        <a >
                            <li className="footer__pages">Prix immo</li>
                        </a>
                        <a >
                            <li className="footer__pages">Acheter</li>
                        </a>
                        <a >
                            <li className="footer__pages">Louer</li>
                        </a>
                        <a >
                            <li className="footer__pages">Vacances</li>
                        </a>
                        <a >
                            <li className="footer__pages">Mon espace</li>
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
