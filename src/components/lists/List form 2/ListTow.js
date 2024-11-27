import React, { useState } from "react";
import ".//listTwo.css";
import currentLocation from "./Asessts/Images/current-location-icon.svg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateStepData } from "../../redux/slice/formDataSlice";

function ListTwo() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Default values for form fields
  const defaultFormValues = {
    country: "",
    street: "",
    state: "",
    city: "",
    postalCode: "",
  };

  const intialFormData = useSelector((state) => state.multiStepForm.step2);
  const [formValues, setFormValues] = useState({
    ...defaultFormValues,
    ...intialFormData, // Merge initial data with defaults
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormValues({ ...formValues, [id]: value });
  };

  const handleStepUpdate = (event) => {
    event.preventDefault();
    if (!Object.values(formValues).includes("")) {
      dispatch(updateStepData({ step: "step2", data: formValues }));
      navigate("/lists/3");
    }
  };

  return (
    <>
      <div>
        <main>
          <div className="list-form-2-background">
            <div className="list-form-2-inner__container">
              <h2>Publier une annonce de vente</h2>
              <div className="progress">
                <span>02 / 10</span>
              </div>
              <div className="list-form-2-form-container">
                <h3>Où se trouve votre maison à vendre ?</h3>
                <div className="list-form-2-separator"></div>
                <div className="location-option">
                  <img src={currentLocation} alt="Current Location Icon" />
                  <p>Use current location</p>
                </div>

                <form
                  onSubmit={handleStepUpdate}
                  className="country__info__form"
                >
                  <label htmlFor="country">Country/Region</label>
                  <select
                    value={formValues.country || ""}
                    id="country"
                    onChange={handleChange}
                  >
                    <option value="">Select Region</option>
                    <option value="France">France</option>
                    <option value="Germany">Germany</option>
                    <option value="Spain">Spain</option>
                    {/* Add more countries as needed */}
                  </select>

                  <label htmlFor="street">Street</label>
                  <input
                    value={formValues.street || ""}
                    onChange={handleChange}
                    type="text"
                    id="street"
                  />

                  <div className="address-group">
                    <div className="address-group-inner">
                      <label htmlFor="city">City</label>
                      <input
                        value={formValues.city || ""}
                        onChange={handleChange}
                        type="text"
                        id="city"
                      />
                    </div>
                    <div className="address-group-inner">
                      <label htmlFor="state">State</label>
                      <input
                        value={formValues.state || ""}
                        onChange={handleChange}
                        type="text"
                        id="state"
                      />
                    </div>
                    <div className="address-group-inner">
                      <label htmlFor="postalCode">Postal code</label>
                      <input
                        value={formValues.postalCode || ""}
                        onChange={handleChange}
                        type="text"
                        id="postalCode"
                      />
                    </div>
                  </div>

                  <div className="detailed-address">
                    <h5>Detailed address</h5>
                    <h4>New Road, 42 Rue de Rivoli, 75001 Paris</h4>
                  </div>

                  <div className="map-placeholder">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11426922.61546134!2d-7.988112082935941!3d45.63523546072285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd54a02933785731%3A0x6bfd3f96c747d9f7!2sFrance!5e0!3m2!1sen!2s!4v1731099145878!5m2!1sen!2s"
                      width="600"
                      height="450"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>

                  <div className="list-form-2-buttons">
                    <Link to="/lists/1" type="button" className="back">
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
        </main>
      </div>
    </>
  );
}

export default ListTwo;
