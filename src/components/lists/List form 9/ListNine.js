import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./listNine.css";
import { useDispatch, useSelector } from "react-redux";
import { updateStepData } from "../../redux/slice/formDataSlice";
import { message } from "antd";

function ListNine() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const intialFormData = useSelector((state) => state.multiStepForm.step9);
  const [formValues, setFormValues] = useState(
    intialFormData || {
      civilite: "",
      nom: "",
      prenom: "",
      email: "",
      telephone: "",
      password: "",
      confirmPassword: "",
      cgu: false,
      data: false,
      newsletter: false,
    }
  );

  const handleChange = (e) => {
    const { id, value ,checked ,type} = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [id]: type === "checkbox"? checked: value,
    }));
  };

  const handleStepUpdate = (e) => {
    e.preventDefault();

    if (!Object.values(formValues).includes("")) {
      const formData = {
        civilite: formValues.civilite,
        nom: formValues.nom,
        prenom: formValues.prenom,
        email: formValues.email,
        telephone: formValues.telephone,
        password: formValues.password,
        confirmPassword: formValues.confirmPassword,
        cgu: formValues.cgu,
        data: formValues.data,
        newsletter: formValues.newsletter,
      };

      dispatch(updateStepData({ step: "step9", data: formData }));

      navigate("/lists/10");
    } else {
      message.error("Please fill out the form before proceeding.");
    }
  };
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
              <form onSubmit={handleStepUpdate}>
                <fieldset>
                  <legend>Vos coordonnées</legend>
                  <p className="info">
                    Ces informations sont confidentielles, elles ne seront pas
                    publiées dans l'annonce ni communiquées à des tiers.
                  </p>
                  <div className="list-form-9-separator"></div>
                  <div className="row">
                    <div className="list-form-9-form-group-first-field">
                      <label htmlFor="civilite">Civilité*</label>
                      <input
                        value={formValues.civilite}
                        onChange={handleChange}
                        type="text"
                        id="civilite"
                        name="civilite"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="list-form-9-form-group">
                      <label htmlFor="nom">Nom*</label>
                      <input
                        value={formValues.nom}
                        onChange={handleChange}
                        type="text"
                        id="nom"
                        name="nom"
                      />
                    </div>
                    <div className="list-form-9-form-group">
                      <label htmlFor="prenom">Prénom*</label>
                      <input
                        value={formValues.prenom}
                        onChange={handleChange}
                        type="text"
                        id="prenom"
                        name="prenom"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="list-form-9-form-group">
                      <label htmlFor="email">Email*</label>
                      <input
                        value={formValues.email}
                        onChange={handleChange}
                        type="email"
                        id="email"
                        name="email"
                      />
                    </div>
                    <div className="list-form-9-form-group">
                      <label htmlFor="telephone">Téléphone*</label>
                      <input
                        value={formValues.telephone}
                        onChange={handleChange}
                        type="tel"
                        id="telephone"
                        name="telephone"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="list-form-9-form-group">
                      <label htmlFor="password">Mot de passe*</label>
                      <input
                        value={formValues.password}
                        onChange={handleChange}
                        type="password"
                        id="password"
                        name="password"
                      />
                    </div>
                    <div className="list-form-9-form-group">
                      <label htmlFor="confirm-password">
                        Confirmer le mot de passe*
                      </label>
                      <input
                        type="password"
                        id="confirmPassword"
                        name="confirm-password"
                        value={formValues.confirmPassword}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="checkbox-group">
                    <div className="checkbox__inner">
                      <input
                        checked={formValues.cgu || false}
                        onChange={handleChange}
                        type="checkbox"
                        id="cgu"
                        name="cgu"
                      />
                      <label htmlFor="cgu">CGU/CGV/Vie privée</label>
                    </div>
                    <div className="checkbox__inner">
                      <input
                        checked={formValues.data || false}
                        onChange={handleChange}
                        type="checkbox"
                        id="data"
                        name="data"
                      />
                      <label htmlFor="data">
                        récupération de data de l'utilisateur et la partager
                        avec partenaires
                      </label>
                    </div>
                    <div className="checkbox__inner">
                      <input
                        checked={formValues.newsletter || false}
                        onChange={handleChange}
                        type="checkbox"
                        id="newsletter"
                        name="newsletter"
                      />
                      <label htmlFor="newsletter">
                        inscription à la newsletter
                      </label>
                    </div>
                  </div>
                </fieldset>
                <div className="list-form-9-form-buttons">
                  <Link to="/lists/8" type="button" className="back">
                    Retour
                  </Link>
                  {/* <Link  to="/lists/10"> */}
                  <button type="submit" className="next">
                    Suivant
                  </button>
                  {/* </Link> */}
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default ListNine;
