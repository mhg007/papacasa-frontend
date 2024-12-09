import React, { useEffect, useState } from "react";
import "./listFour.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateStepData } from "../../redux/slice/formDataSlice";
import { useListingFeaturesQuery } from "../../redux/services/services";

function ListFour() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = JSON.parse(localStorage.getItem("token"))?.access;
  const { data, isLoading, isError } = useListingFeaturesQuery();
  const [selectedIds, setSelectedIds] = useState([]);
  // Default state for all checkboxes
  const defaultState = {
    climatisation: false,
    alarme: false,
    armoires: false,
    balcon: false,
    ascenseur: false,
    cuisine: false,
    meublé: false,
    double: false,
    chauffage: false,
    vidéosurveillance: false,
    résidence: false,
    garage: false,
    proche: false,
    procheDuMétro: false,
    finitions: false,
    penthouse: false,
    kitchenette: false,
    terrasse: false,
    bonEnsoleillement: false,
    suite: false,
    cellier: false,
    piscine: false,
    débarras: false,
    jardin: false,
  };

  const intialFormData = useSelector((state) => state.multiStepForm.step4);

  useEffect(() => {
    if (intialFormData) {
      const selectedIds = Object.keys(intialFormData).filter((key) => intialFormData[key] === true).map(Number);
      setSelectedIds(selectedIds);
    }
  }, [intialFormData]);

  const [formValues, setFormValues] = useState({
    ...intialFormData
  });

  const handleChange = (e) => {
    const { id, checked } = e.target;
    setSelectedIds((prevSelectedIds) =>
      checked
        ? [...prevSelectedIds, Number(id)]
        : prevSelectedIds.filter((selectedId) => selectedId !== Number(id))
    );
    setFormValues((prevValues) => ({
      ...prevValues,
      [id]: checked,
    }));
  };

  const stepData = (e) => {
    e.preventDefault();
    dispatch(updateStepData({ step: "step4", data: formValues }));
    navigate("/lists/5");
  };

  return (
    <>
      <div>
        <main>
          <div className="list-form-4-background">
            <div className="list-form-4-inner__container">
              <h2>Publier une annonce de vente</h2>
              <div className="progress">
              {token ? (
              <>
                <p>04</p>
                <span>/ 9</span>
              </>
            ) : (
              <>
                <p>04</p>
                <span>/10</span>
              </>
            )}
              </div>
              <div className="list-form-4-form-container">
                <h3>Caractéristiques</h3>
                <div className="list-form-4-separator"></div>

                <form onSubmit={stepData}>
                  <div className="checkbox-group">
                    {data?.map((key, index) => (
                      <label key={index}>
                        <input
                          type="checkbox"
                          id={key.id.toString()}
                          checked={selectedIds.includes(key.id)}
                          onChange={handleChange}
                        />
                        {key.name.charAt(0).toUpperCase() + key.name.slice(1)}
                      </label>
                    ))}
                  </div>
                  <div className="list-form-2-buttons">
                    <Link to="/lists/3" type="button" className="back">
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

export default ListFour;
