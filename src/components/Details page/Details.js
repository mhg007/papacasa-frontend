import React from 'react'

function Details() {
  return (
    <main>
    <section class="background__image__section">
        <div class="hero__section">
            <div class="hero__container">
                <div class="hero__first__block">
                    <img src="/Asessts/Images/House with lawn1.png" />
                </div>
                <div class="hero__second__block">
                    <div class="hero__second__inner__block">
                        <img src="/Asessts/Images/house with lawn 2.png" />
                        <img src="/Asessts/Images/house with lawn 3.png" />
                    </div>
                    <div class="hero__second__inner__block">
                        <img src="/Asessts/Images/4th image.png" />
                        <img src="/Asessts/Images/5th image.png" />
                    </div>
                </div>
            </div>

        </div>
        <div class="second__section__wrapper">
            <div class="container">
                <section class="second__section">
                    <div class="inner__container">
                        <div class="left-section">
                            <div class="left__inner__section">
                                <div class="status-wrapper">
                                    <span class="status">À vendre</span>
                                </div>
                                <ul class="upload-wrapper">
                                    <li>Partager</li>
                                    <li>Enregistrer</li>
                                </ul>
                            </div>
                            <div class="left-section-heading">
                                <h1>Maison de campagne à Collingwood</h1>
                            </div>

                            <ul class="location-wrapper">

                                <li>Paris, France</li>
                                <li>Publié par Kevin Francis</li>

                            </ul>
                            <ul class="features">
                                <li>3 Chambres</li>
                                <li>3 Salles de bains</li>
                                <li>2 Cuisines</li>
                                <li>1 Parking</li>
                                <li>1 Jardin</li>
                            </ul>
                        </div>
                    </div>
                    <div class="right-section">
                        <div class="price-wrapper">
                            <div class="price">100 000 €</div>
                            <div class="prix">
                                <p>prix</p>
                            </div>
                        </div>
                        <div class="seller-info">
                            <img src="/Asessts/Images/Kevin-image.png" alt="Kevin" class="seller-image"/>
                            <p>Kevin</p>
                        </div>
                        <button class="contact-button">Contactez le vendeur</button>
                    </div>
                </section>
                <div class="inner__container">

                    <section class="information">

                        <h2>Plus d'informations</h2>
                        <div class="separator"></div>
                        <p>Découvrez votre nouveau sanctuaire dans cette belle maison, parfaitement située au cœur
                            de
                            l'Espagne. Cette propriété offre :</p>
                        <ul>
                            <li>✨Intérieurs spacieux - Profitez de grands espaces de vie ouverts, de chambres
                                généreuses
                                et
                                d'une cuisine gastronomique conçue pour les réunions de famille et les
                                divertissements.
                            </li>
                            <li>🌳 Paradis extérieur - Imprégnez-vous d'une oasis de jardin paysagé privé, parfait
                                pour
                                la
                                détente et les activités en plein air.</li>
                            <li>🚗 Commodités pratiques - Proche des écoles, des centres commerciaux, des transports
                                en
                                commun
                                et des parcs récréatifs.</li>
                        </ul>
                        <h5>Que vous cherchiez à vous agrandir ou à investir, cette propriété a tout pour plaire. Ne
                            manquez
                            pas votre chance de faire de cette magnifique maison la vôtre !</h5>
                    </section>
                </div>
                <div class="inner__container">
                    <section class="amenities">
                        <h2>Commodités</h2>
                        <p>À propos des commodités de la propriété</p>
                        <div class="separator"></div>

                        <ul class="amenities-list">
                            <li>Espaces de vie spacieux</li>
                            <li>Cuisine moderne</li>
                            <li>Suite principale avec dressing</li>
                            <li>Salles de bains luxueuses</li>
                            <li>Bureau à domicile / Etude</li>
                            <li>Fonctionnalités de maison intelligente</li>
                            <li>Buanderie</li>
                            <li>Jardin privé</li>
                            <li>Parking dans l'allée</li>
                            <li>Balcon</li>
                            <li>Piscine</li>
                        </ul>
                    </section>
                </div>
                <div class="inner__container">
                    <div class="map-wrapper">
                        <h3>Emplacement</h3>
                        <p>New Road, 42 Rue de Rivoli, 75001 Paris</p>
                        <div class="separator"></div>

                        <div class="map-placeholder">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11426922.61546134!2d-7.988112082935941!3d45.63523546072285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd54a02933785731%3A0x6bfd3f96c747d9f7!2sFrance!5e0!3m2!1sen!2s!4v1731099145878!5m2!1sen!2s"
                                width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"></iframe>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</main>
  )
}

export default Details
