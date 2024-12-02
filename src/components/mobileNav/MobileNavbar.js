import React from 'react'
import li_home from "./mobile menu icons/li_home.svg";
import cart_icon from "./mobile menu icons/cart-icon.svg";
import post_ad_icon from "./mobile menu icons/post-ad-icon.svg";


function MobileNavbar() {
  return (
    <>
       <section  className="mobile__menu__section">
          <div  className="mobile__menu__wrapper">
            <div  className="mobile__menu__item">
              <a href="">
                <img src={li_home} />
                <p>Accueil</p>
              </a>
            </div>
            <div  className="mobile__menu__item">
              <a href="">
                <img src={cart_icon} />
                <p>Acheter</p>
              </a>
            </div>
            <div  className="mobile__menu__item">
              <a href="">
                <img src={post_ad_icon} />
                <p>Annonce</p>
              </a>
            </div>
            <div  className="mobile__menu__item">
              <a href="">
                <img src="/Asessts/Images/mobile menu icons/vendre-icon.svg" />
                <p>Vendre</p>
              </a>
            </div>
            <div  className="mobile__menu__item">
              <a href="">
                <img src="/Asessts/Images/mobile menu icons/info-icon.svg" />
                <p>À propos</p>
              </a>
            </div>
          </div>
        </section>
    </>
  )
}

export default MobileNavbar
