import React from 'react'
import { Link } from 'react-router-dom'
import "./listNine.css"

function ListNine() {
  return (
    <>
      <main>
        <section className="list-form-9-background">
            <div className="list-form-9-inner__container">
                <h1>Publier une annonce de vente</h1>
                <div className="progress">
                    <p>09</p>
                    <span>/ 10</span>
                </div>
                <div className="list-form-9-form-card">
                    <form>
                        <fieldset>
                            <legend>Vos coordonnées</legend>
                            <p className="info">
                                Ces informations sont confidentielles, elles ne seront pas publiées dans l'annonce ni
                                communiquées à des tiers.
                            </p>
                            <div className="list-form-9-separator"></div>
                            <div className="row">
                                <div className="list-form-9-form-group-first-field">
                                    <label htmlFor="civilite">Civilité*</label>
                                    <input type="text" id="civilite" name="civilite"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="list-form-9-form-group">
                                    <label htmlFor="nom">Nom*</label>
                                    <input type="text" id="nom" name="nom"/>
                                </div>
                                <div className="list-form-9-form-group">
                                    <label htmlFor="prenom">Prénom*</label>
                                    <input type="text" id="prenom" name="prenom"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="list-form-9-form-group">
                                    <label htmlFor="email">Email*</label>
                                    <input type="email" id="email" name="email"/>
                                </div>
                                <div className="list-form-9-form-group">
                                    <label htmlFor="telephone">Téléphone*</label>
                                    <input type="tel" id="telephone" name="telephone"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="list-form-9-form-group">
                                    <label htmlFor="password">Mot de passe*</label>
                                    <input type="password" id="password" name="password"/>
                                </div>
                                <div className="list-form-9-form-group">
                                    <label htmlFor="confirm-password">Confirmer le mot de passe*</label>
                                    <input type="password" id="confirm-password" name="confirm-password"/>
                                </div>
                            </div>
                            <div className="checkbox-group">
                                <div className="checkbox__inner">
                                    <input type="checkbox" id="cgu" name="cgu"/>
                                    <label htmlFor="cgu">CGU/CGV/Vie privée</label>
                                </div>
                                <div className="checkbox__inner">
                                    <input type="checkbox" id="data" name="data"/>
                                    <label htmlFor="data">récupération de data de l'utilisateur et la partager avec
                                        partenaires</label>
                                </div>
                                <div className="checkbox__inner">
                                    <input type="checkbox" id="newsletter" name="newsletter"/>
                                    <label htmlFor="newsletter">inscription à la newsletter</label>
                                </div>
                            </div>

                        </fieldset>

                    </form>

                </div>
                <div className="list-form-9-form-buttons">
                <Link to="/lists/8" type="button"  className="back">
                  Retour
                </Link>
                <Link  to="/lists/10">
                <button type="submit"  className="next">
                  Suivant
                </button>
                </Link>
                </div>
            </div>
        </section>
    </main>
    </>
  )
}

export default ListNine
