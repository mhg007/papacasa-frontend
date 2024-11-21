import React from 'react'
import "./listEight.css"
import FrontOfAhouse from "./Asessts/Images/Front of a house.png"
import upload_placeholder_delete_icon from "./Asessts/Images/upload_placeholder_delete_icon.svg" 
import upload_placeholder_icon from "./Asessts/Images/upload_placeholder_icon.svg"
import { Link } from 'react-router-dom'

function ListEight() {
  return (
    <>

       <main>
        <section className="list-form-8-background">
            <div className="list-form-8-inner__container">
                <h1>Publier une annonce de vente</h1>
                <div className="progress">
                    <p>08</p>
                    <span>/ 10</span>
                </div>
                <div className="list-form-8-form-section">
                    <h2>Vos photos</h2>
                    <p>Vous pouvez télécharger jusqu'à 12 photos. <br/>
                        Pas d'inquiétude : vos photos peuvent être ajoutées ou modifiées plus tard gratuitement.</p>
                    <span className="photo-label">Photo de couverture</span>


                    <div className="photo-gallery">
                        <div className="photo">
                            <img src={FrontOfAhouse} alt="Photo 1" className="upload-selected-image"/>
                            <img src={upload_placeholder_delete_icon} className="delete-icon"/>
                        </div>
                        <div className="photo">
                            <img src={FrontOfAhouse} alt="Photo 2" className="upload-selected-image"/>
                            <img src={upload_placeholder_delete_icon} className="delete-icon"/>

                        </div>
                        <div className="photo">
                            <img src={FrontOfAhouse} alt="Photo 3" className="upload-selected-image"/>
                            <img src={upload_placeholder_delete_icon} className="delete-icon"/>

                        </div>
                    </div>

                    <div className="placeholder__text">
                        <h3>Télécharger l'image</h3>
                    </div>
                    <div className="upload-box">
                        <img src={upload_placeholder_icon} />
                        <p><a href="#">Télécharger un fichier</a> ou faites glisser et déposez</p>
                        <h5 className="upload-info">PNG, JPG, GIF jusqu'à 10 Mo</h5>
                    </div>
                </div>
                <div className="list-form-8-form-buttons">
                <Link to="/lists/7" type="button"  className="back">
                  Retour
                </Link>
                <Link  to="/lists/9">
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

export default ListEight
