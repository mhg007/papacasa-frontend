import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import "./listThree.css";
import { useDispatch, useSelector } from "react-redux";
import { updateStepData } from "../../redux/slice/formDataSlice";
export default function ListThree() {
  const { t, i18n } = useTranslation();
  const intialFormData = useSelector((state) => state.multiStepForm.step3);
  // const [bathcount, setBathCount] = useState(0);
  // const [parkingSpaceCount, setCount] = useState(0);
  const [formValues, setFormValues] = useState(
    intialFormData || {
      superficieBrute: "",
      surfaceTerrain: "",
      etat: "",
      classeEnergetique: "",
      anneeConstruction: "",
      surfaceUtilisable: "",
      bathcount: 0,
      parkingSpaceCount: 0,
    }
  );

  // console.log(intialFormData)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value });
  };

  const handleCounterChange = (type, operation) => {
    setFormValues((prevFormValues) => {
      const key = type === "bathrooms" ? "bathcount" : "parkingSpaceCount"; // Use correct keys
      return {
        ...prevFormValues,
        [key]: Math.max(
          0,
          (prevFormValues[key] || 0) + (operation === "increment" ? 1 : -1)
        ),
      };
    });
  };

  // const step3Data = useSelector((state) => state.MultiStepForm.step3);
  const handleStepUpdate = (e) => {
    e.preventDefault();
    if (!Object.values(formValues).includes("")) {
      const formData = {
        superficieBrute: formValues.superficieBrute,
        surfaceTerrain: formValues.surfaceTerrain,
        etat: formValues.etat,
        classeEnergetique: formValues.classeEnergetique,
        anneeConstruction: formValues.anneeConstruction,
        surfaceUtilisable: formValues.surfaceUtilisable,
        bathcount: formValues.bathcount,
        parkingSpace: formValues.parkingSpaceCount,
      };
      dispatch(updateStepData({ step: "step3", data: formData }));
      navigate("/lists/4");
    }
  };

  return (
    <>
      {/* <Navbar changeLang={changeLang} t={t} i18n={i18n} /> */}
      <main>
        <div className="list-form-3-background">
          <div className="list-form-3-inner__container">
            <div className="container">
              <h2>Publier une annonce de vente</h2>
              <div className="progress">
                <p>03</p>
                <span>/ 9</span>
              </div>
              <div className="list-form-3-form-container">
                <h3>Caractéristiques du bien</h3>
                <div className="list-form-3-separator"></div>

                <form onSubmit={handleStepUpdate}>
                  <div className="list-form-3-form-group">
                    <div className="list-form-3-form-inner">
                      <label htmlFor="superficie-brute">
                        Superficie brute (m2)
                      </label>
                      <input
                        value={formValues.superficieBrute}
                        onChange={handleChange}
                        type="text"
                        id="superficieBrute"
                        placeholder=""
                      />
                    </div>
                    <div className="list-form-3-form-inner">
                      <label htmlFor="surface-terrain">
                        Surface du terrain (m2)
                      </label>
                      <input
                        value={formValues.surfaceTerrain}
                        type="text"
                        id="surfaceTerrain"
                        placeholder=""
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* <div className="list-form-3-form-group">
                    <div className="list-form-3-form-inner">
                      <label htmlFor="etat">État</label>
                      <select
                        value={formValues.etat}
                        id="etat"
                        onChange={handleChange}
                      >
                        <option></option>
                        <option>Choisir...</option>
                      </select>
                    </div>

                    <div className="list-form-3-form-inner">
                      <label htmlFor="classe-energetique">
                        Classe énergétique
                      </label>
                      <select
                        value={formValues.classeEnergetique}
                        id="classeEnergetique"
                        onChange={handleChange}
                      >
                        <option></option>
                        <option>Choisir...</option>
                      </select>
                    </div>
                  </div> */}

                  <div className="list-form-3-form-group">
                    <div className="list-form-3-form-inner">
                      <label htmlFor="annee-construction">
                        Année de construction
                      </label>
                      <input
                        value={formValues.anneeConstruction}
                        type="text"
                        id="anneeConstruction"
                        placeholder=""
                        onChange={handleChange}
                      />
                    </div>

                    <div className="list-form-3-form-inner">
                      <label htmlFor="surface-utilisable">
                        Surface utilisable (m2)
                      </label>
                      <input
                        value={formValues.surfaceUtilisable}
                        type="text"
                        id="surfaceUtilisable"
                        placeholder=""
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="list-form-3-form-group-range">
                    <div className="list-form-3-form-group-range-inner">
                      <label>Salles de bains</label>
                      <div className="counter">
                        <button
                          onClick={() =>
                            handleCounterChange("bathrooms", "decrement")
                          }
                          type="button"
                          className="minus"
                        >
                          −
                        </button>
                        <span>{formValues.bathcount || 0}</span>
                        {/* Display default as 0 */}
                        <button
                          onClick={() =>
                            handleCounterChange("bathrooms", "increment")
                          }
                          type="button"
                          className="plus"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="list-form-3-form-group-range-inner">
                      <label>Places de parking</label>
                      <div className="counter">
                        <button
                          onClick={() =>
                            handleCounterChange("parkingSpaces", "decrement")
                          }
                          type="button"
                          className="minus"
                        >
                          −
                        </button>
                        <span>{formValues.parkingSpaceCount || 0}</span>
                        {/* Display default as 0 */}
                        <button
                          onClick={() =>
                            handleCounterChange("parkingSpaces", "increment")
                          }
                          type="button"
                          className="plus"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="list-form-2-buttons">
                    <Link to="/lists/2" type="button" className="back">
                      Retour
                    </Link>
                    <button type="submit" className="next">
                      Suivant
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
