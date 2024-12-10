import React from 'react'
import "./profile.css"
import image__placeholder from "./Asessts/Images/image__placeholder.png"


function Profile() {

  return (
    <>
      <main>
        <section className="profil__section">
            <div className="profil-container">
                <h1>Profil</h1>
                <div className="profil__inner__container">
                    <div className="profil-form-container">
                        <div className="profile-image">
                            <img src={image__placeholder} alt="Profile"/>
                        </div>
                        <form className="profil-form-inner-container">
                            <div className="profil-form-group">
                                <label for="civilte">Civilité*
                                    <input type="text" id="civilte" required/>
                                </label>

                            </div>
                            <div className="profil-form-group">
                                <label for="nom">Nom*
                                    <input type="text" id="nom" required/>
                                </label>
                                <label for="prenom">Prénom*
                                    <input type="text" id="prenom" required/>
                                </label>
                            </div>
                            <div className="profil-form-group">
                                <label for="telephone">Téléphone*
                                    <input type="text" id="telephone" required/>
                                </label>
                                <label for="email">Email*
                                    <input type="email" id="email" required/>
                                </label>

                            </div>

                            <button type="submit" className="submit-btn">Enregistrer</button>
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
