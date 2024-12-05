import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { updateStepData } from "../../redux/slice/formDataSlice";
import "./listOne.css";
import { useListOneDataQuery } from "../../redux/services/services";

function ListOne() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const step1Data = useSelector((state) => state.multiStepForm.step1);
  const [selectedTypes, setSelectedTypes] = useState(
    step1Data?.propertyType || []
  );

  const token = JSON.parse(localStorage.getItem("token"))?.access;

  const { data, isError, isLoading } = useListOneDataQuery();
  console.log("userListingsData", data);

  const handleChange = (type) => {
    setSelectedTypes((prevSelectedTypes) => {
      if (prevSelectedTypes.includes(type)) {
        return prevSelectedTypes.filter((t) => t !== type);
      } else {
        return [...prevSelectedTypes, type];
      }
    });
    console.log(selectedTypes)
  };

  const handleStepUpdate = () => {
    // Dispatch the updated list to Redux
    if (selectedTypes.length !== 0) {
      const formData = {
        propertyType: selectedTypes,
      };
      dispatch(updateStepData({ step: "step1", data: formData }));
      navigate("/lists/2");
    }
  };

  return (
    <main>
      <div className="list-form-1-background">
        <div className="list-form-1__inner__container">
          <h2>Publier une annonce de vente</h2>
          <div className="progress">
            {token ? (
              <>
                <p>01</p>
                <span>/ 9</span>
              </>
            ) : (
              <>
                <p>01</p>
                <span>/10</span>
              </>
            )}
          </div>
          <form>
            <div className="list-form-1-form-container">
              <h3>Choisissez votre type de bien</h3>
              <div className="property-types">
                {(data || []).map((type) => (
                  <button
                    key={type.name} // Ensure unique key
                    type="button"
                    className={`property-button ${
                      selectedTypes.includes(type) ? "selected" : ""
                    }`}
                    onClick={() => handleChange(type)}
                  >
                    {type.name}
                  </button>
                ))}
              </div>
            </div>
            <div className="buttons">
              <Link to="/lists/1">
                <button className="back" type="button">
                  Retour
                </button>
              </Link>
              <button
                className="next"
                type="button"
                onClick={handleStepUpdate}
              >
                Suivant
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default ListOne;
