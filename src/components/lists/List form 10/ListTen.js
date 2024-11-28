import React, { useState } from "react";
import "./listTen.css";
import { Link, useNavigate } from "react-router-dom";
import { useSubmitFormDataMutation } from "../../redux/services/services";
import { message } from "antd";
import { useSelector } from "react-redux";

function ListTen() {
  const navigate = useNavigate();
  const intialFormData = useSelector((state) => state.multiStepForm);
  console.log("FormData",intialFormData)
//   const [formValues, setFormValues] = useState( {
//         titre: "string",
//         description: "string",
//         type: "vente",
//         prix: "string",
//         surface: "string",
//         adresse: "string",
//         code_postal: "string",
//         ville: "string",
//         latitude: "string",
//         longitude: "string",
//         photos: {},
//         date_expiration: "2024-11-25T13:46:43.423Z",
//         status: "actif",
//         utilisateur: 0,
//     }
//   );
  const [submitFormData, { isLoading, isSuccess, isError, data, error }] =
    useSubmitFormDataMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
        "type": {
          "name": intialFormData.step1.propertyType[0]
        },
        "location": {
          "city":intialFormData.step3.city,
          "country":intialFormData.step3.country,
          "state": intialFormData.step3.state,
          "address": intialFormData.step3.street,
          "code_postal": intialFormData.step3.postalCode
        },
        "features": [
          {
            "name": intialFormData.step4
          }
        ],
        "photos": intialFormData.step8.image.map((img) => {return {"name":img.name,
            "url": img.url}}),

        "title": intialFormData.step6,
        "description": intialFormData.step5.textArea,
        "price": intialFormData.step6.price,
        "surface": "123",
        "land_area":  intialFormData.step3.surfaceTerrain,
        "usable_area":  intialFormData.step3.surfaceUtilisable,
        "year_of_construction": intialFormData.step3.anneeConstruction,
        "num_of_bathrooms": intialFormData.step3.bathcount,
        "num_of_parking_spaces":  intialFormData.step3.parkingSpaceCount,
        "diagnosis": false,
        "latitude": "213",
        "longitude": "213"
      }
    // const headers = {
    //   "Content-Type": "application/json",
    //   Accept: "*/*",
    // };
    try {
      const response = await submitFormData( payload ).unwrap();
      message.success("Listing Created Successfully");
      console.log("Listing Created Successfully", response);
      navigate("/");
    } catch (error) {
      message.error("Listing Creation Failed");
      console.log("Listing Failed", error);
    }
  };

  return (
    <>
      <main>
        <section className="list-form-10-background">
          <div className="list-form-10-inner__container">
            <h1>Publier une annonce de vente</h1>
            <div className="progress">
              <p>9</p>
              <span>/ 9</span>
            </div>
            <div className="card">
              <h2>Votre annonce est en cours de vérification</h2>
              <div className="list-form-10-separator"></div>

              <ul className="instructions">
                <li>
                  Nous venons de vous envoyer un e-mail à . <br />
                  Cliquez sur le lien de confirmation pour activer votre compte
                  et gérer votre annonce.
                </li>
                <li>
                  Votre annonce est désormais en attente de validation par notre
                  service client (du lundi au samedi, de 9h à 18h).
                </li>
                <li>
                  Elle sera mise en ligne dans la journée, une fois que nous
                  l'aurons examinée et validée.
                </li>
                <li>
                  Si vous avez des questions, n'hésitez pas à contacter nos
                  conseillers au 01 40 56 33 33.
                </li>
              </ul>
            </div>
            <div className="list-form-10-button-wrapper ">
              <Link to="/lists/8" type="button" className="back">
                Retour
              </Link>
              <button className="list-form-10-button" onClick={handleSubmit}>
                D'accord
              </button>
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
  );
}

export default ListTen;
