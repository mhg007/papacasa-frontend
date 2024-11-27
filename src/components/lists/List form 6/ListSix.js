import React, { useState } from "react";
import ".//listSix.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateStepData } from "../../redux/slice/formDataSlice";

function ListSix() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const intialFormData = useSelector((state) => state.multiStepForm.step6);
  const [formValues, setFormValues] = useState(
    intialFormData || {
      price: "",
    }
  );

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value });
  };

  const stepData = (e) => {
    e.preventDefault();
    dispatch(updateStepData({ step: "step6", data: formValues }));
    navigate("/lists/7");
  }
  return (
    <>
      <div>
        {/* <Navbar changeLang={changeLang} t={t}/> */}
        <main>
          <section className="list-form-6-background">
            <div className="list-form-6-inner__container">
              <h2>Publier une annonce de vente</h2>
              <div className="progress">
                <p>06</p>
                <span>/ 10</span>
              </div>
              <div className="list-form-6-form-container">
                <h3>Prix de vente</h3>
                <p className="price-hint">
                  Ne vous inquiétez pas, vous pourrez ajuster votre prix si
                  nécessaire. Les modifications d'annonce sont gratuites et
                  illimitées !
                </p>
                <div className="list-form-3-separator"></div>

                <form onSubmit={stepData}>
                  <div className="price-input">
                    <span className="currency-symbol">€</span>
                    <input
                      onChange={handleChange}
                      value={formValues.price}
                      id="price"
                      type="text"
                      placeholder="0.00"
                    />
                    <span className="currency-unit">EUR</span>
                  </div>
                  <div className="list-form-2-buttons">
                    <Link to="/lists/5" type="button" className="back">
                      Retour
                    </Link>
                    {/* <Link  to="/lists/7"> */}
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
      </div>
    </>
  );
}

export default ListSix;
