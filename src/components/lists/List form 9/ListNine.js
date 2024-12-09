import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./listNine.css";
import { useDispatch, useSelector } from "react-redux";
import { updateStepData } from "../../redux/slice/formDataSlice";
import { message } from "antd";
import { useSignUpUserMutation } from "../../redux/services/services";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";

function ErrorAlertMessage(props) {
  const { error = {}, field = {} } = props;
  return (
    error?.data &&
    field &&
    error?.data[field] &&
    Array.isArray(error.data[field]) &&
    error.data[field]?.length > 0 && (
      <span className="text-red-700">{error.data[field][0]}</span>
    )
  );
}

function ListNine() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const intialFormData = useSelector((state) => state.multiStepForm.step9);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  //   const [id, setId] = useState({
  //     "password":"password",
  //     "confirmPassword":"confirmPassword"});
  const [formValues, setFormValues] = useState(
    intialFormData || {
      civilite: "",
      first_name: "",
      last_name: "",
      email: "",
      telephone: "",
      password: "",
      confirmPassword: "",
      cgu: false,
      data: false,
      newsletter: false,
    }
  );
  const token = JSON.parse(localStorage.getItem("token"))?.access;

  const [signUpUser, { isLoading, isSuccess, isError, data, error }] =
    useSignUpUserMutation();

  const handleChange = (e) => {
    const { id, value, checked, type } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  const showError = (msg) => (msg ? message.error(msg) : null);

  const handleStepUpdate = async (e) => {
    e.preventDefault();

    if (
      !formValues.civilite &&
      !formValues.first_name &&
      !formValues.last_name &&
      !formValues.email &&
      !formValues.telephone &&
      !formValues.password &&
      !formValues.confirmPassword
    ) {
      showError("All fields marked with * are required.");
      return;
    }

    if (formValues.password !== formValues.confirmPassword) {
      showError("Passwords do not match.");
      return;
    }

    const payload = {
      civilite: formValues.civilite,
      first_name: formValues.first_name,
      last_name: formValues.last_name,
      email: formValues.email,
      telephone: formValues.telephone,
      password: formValues.password,
      confirmPassword: formValues.confirmPassword,
      newsletter: formValues.newsletter,
      data: formValues.data,
      cgu: formValues.cgu,
    };

    try {
      const response = await signUpUser({ payload }).unwrap();
      if (response) {
        dispatch(updateStepData({ step: "step9", data: payload }));
        navigate("/lists/10");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    showError(isError && error?.data?.detail ? error.data.detail : null);
  }, [isError, error?.data]);

  return (
    <main>
      <section className="list-form-9-background">
        <div className="list-form-9-inner__container">
          <h1>Publier une annonce de vente</h1>
          <div className="progress">
            {token ? (
              <>
                <p>09</p>
                <span>/ 09</span>
              </>
            ) : (
              <>
                <p>09</p>
                <span>/10</span>
              </>
            )}
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
                <div className="row ">
                  {/* <div className="list-form-9-form-group-first-field">
                    <label htmlFor="civilite">Civilité*</label>
                    <input
                      value={formValues.civilite}
                      onChange={handleChange}
                      type="text"
                      id="civilite"
                      name="civilite"
                      className=""
                    />
                  </div> */}
                  <div className="list-form-9-form-group-first-field">
                  <label htmlFor="country">Civilité*</label>
                  <select value={formValues.civilite}
                      onChange={handleChange}
                      type="text"
                      id="civilite"
                      name="civilite"
                      className=""
                  >
                    <option value="">Select Civilité</option>
                    <option value="Mr">Mr</option>
                    <option value="Mme">Mme</option>
                    {/* Add more countries as needed */}
                  </select>
                  </div>
                </div>
                <div className="row">
                  <div className="list-form-9-form-group">
                    <label htmlFor="first_name">Nom*</label>
                    <input
                      value={formValues.first_name}
                      onChange={handleChange}
                      type="text"
                      id="first_name"
                      name="first_name"
                    />
                  </div>
                  <div className="list-form-9-form-group">
                    <label htmlFor="last_name">Prénom*</label>
                    <input
                      value={formValues.last_name}
                      onChange={handleChange}
                      type="text"
                      id="last_name"
                      name="last_name"
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
                    <div className="password-wrapper">
                      <label htmlFor="password">Mot de passe*</label>
                      <input
                        value={formValues.password}
                        onChange={handleChange}
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                      />
                      {showPassword ? (
                        <MdOutlineVisibilityOff
                          onClick={() => setShowPassword(false)}
                          className="password-toggle"
                        />
                      ) : (
                        <MdOutlineVisibility
                          onClick={() => setShowPassword(true)}
                          className="password-toggle"
                        />
                      )}
                      {/* <ErrorAlertMessage error={error} field="password" />   */}
                    </div>
                  </div>
                  <div className="list-form-9-form-group">
                    <div className="password-wrapper">
                      <label htmlFor="confirmPassword">
                        Confirmer le mot de passe*
                      </label>
                      <input
                        value={formValues.confirmPassword}
                        onChange={handleChange}
                        type={showConfirmPassword ? "text" : "password"}
                        id="confirmPassword"
                        name="confirmPassword"
                      />
                      {showConfirmPassword ? (
                        <MdOutlineVisibilityOff
                          onClick={() => setShowConfirmPassword(false)}
                          className="password-toggle"
                        />
                      ) : (
                        <MdOutlineVisibility
                          onClick={() => setShowConfirmPassword(true)}
                          className="password-toggle"
                        />
                      )}
                      {/* <ErrorAlertMessage error={error} field="confirmPassword" />   */}
                    </div>
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
                    <label htmlFor="cgu">Conditions générales de vente.</label>
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
                      Politique de protection des données personnelles.
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
                      Je souhaite m'inscrire à la newsletter et me tenir au
                      courant des actualités Papacasa.
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
  );
}

export default ListNine;
