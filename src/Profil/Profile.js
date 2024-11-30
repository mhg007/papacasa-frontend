import React from 'react'
import "./profile.css"
import image__placeholder from "./Asessts/Images/image__placeholder.png"


function Profile() {

  return (
    <>
      <main>
        <section class="profil__section">
            <div class="profil-container">
                <h1>Profil</h1>
                <div class="profil__inner__container">
                    <div class="profil-form-container">
                        <div class="profile-image">
                            <img src={image__placeholder} alt="Profile"/>
                        </div>
                        <form class="profil-form-inner-container">
                            <div class="profil-form-group">
                                <label for="civilte">Civilité*
                                    <input type="text" id="civilte" required/>
                                </label>

                            </div>
                            <div class="profil-form-group">
                                <label for="nom">Nom*
                                    <input type="text" id="nom" required/>
                                </label>
                                <label for="prenom">Prénom*
                                    <input type="text" id="prenom" required/>
                                </label>
                            </div>
                            <div class="profil-form-group">
                                <label for="telephone">Téléphone*
                                    <input type="text" id="telephone" required/>
                                </label>
                                <label for="email">Email*
                                    <input type="email" id="email" required/>
                                </label>

                            </div>

                            <button type="submit" class="submit-btn">Enregistrer</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </main>
    </>
  )
}

export default Profile
