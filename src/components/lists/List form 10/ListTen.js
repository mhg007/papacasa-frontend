import React from 'react'
import "./listTen.css"
import { Link } from 'react-router-dom'

function ListTen() {
  return (
    <>
       <main>
        <section className="list-form-10-background">
            <div className="list-form-10-inner__container">
                <h1>Publier une annonce de vente</h1>
                <div className="progress">
                    <p>10</p>
                    <span>/ 10</span>
                </div>
                <div className="card">
                    <h2>Votre annonce est en cours de vérification</h2>
                    <div className="list-form-10-separator"></div>

                    <ul className="instructions">
                        <li>Nous venons de vous envoyer un e-mail à . <br/>
                            Cliquez sur le lien de confirmation pour activer
                            votre
                            compte et gérer votre annonce.</li>
                        <li>Votre annonce est désormais en attente de validation par notre service client (du lundi au
                            samedi,
                            de 9h à 18h).</li>
                        <li>Elle sera mise en ligne dans la journée, une fois que nous l'aurons examinée et validée.
                        </li>
                        <li>Si vous avez des questions, n'hésitez pas à contacter nos conseillers au 01 40 56 33 33.
                        </li>
                    </ul>

                </div>
                <div className="list-form-10-button-wrapper ">
                <Link to="/lists/9" type="button"  className="back">
                  Retour
                </Link>
                    <button className="list-form-10-button">D'accord</button>
                    {/* <div className="list-form-9-form-buttons"> */}
                {/* <Link  to="/lists/10">
                <button type="submit"  className="next">
                  Suivant
                </button>
                </Link> */}
                {/* </div> */}
                </div>
            </div>

        </section>
    </main>
    </>
  )
}

export default ListTen
