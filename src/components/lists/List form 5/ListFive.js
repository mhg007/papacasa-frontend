import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./listFive.css";
import { useDispatch, useSelector } from "react-redux";
import { updateStepData } from "../../redux/slice/formDataSlice";
export default function ListFive() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const intialFormData = useSelector((state)=> state.multiStepForm.step5)

  const [formValues, setFormValues] = useState(intialFormData||{
    textArea: ""
  });
  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value });
  };

  const stepData = (e) => {
    e.preventDefault();
    dispatch(updateStepData({ step: "step5", data: formValues }));
    navigate("/lists/6");
  };
  return (
    <body>
      {/* <Navbar changeLang={changeLang} t={t} /> */}
      <main>
        <section className="list-form-5-background">
          <div className="list-form-5-inner__container">
            <h2>Publier une annonce de vente</h2>
            <div className="progress">
              <p>05</p>
              <span>/ 10</span>
            </div>
            <div className="list-form-5-form-container">
              <h3>Descriptif du bien</h3>

              <p className="description-hint">
                Environnement, liste des pièces, prestations, mode de chauffage,
                proximité des commerces, transports et écoles, charges et
                impôts...
              </p>
              <div className="list-form-5-separator"></div>

              <form onSubmit={stepData}>
                <textarea value={formValues.textArea} onChange={handleChange} id="textArea" placeholder=""></textarea>
                <div className="list-form-2-buttons">
                  <Link to="/lists/4" type="button" className="back">
                    Retour
                  </Link>
                  {/* <Link  to="/lists/6"> */}
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
    </body>
  );
}
