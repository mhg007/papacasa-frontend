import React, { useEffect } from "react";
import "./listTen.css";
import { Link, useNavigate } from "react-router-dom";
import {
  useLoginUserMutation,
  useSubmitFormDataMutation,
} from "../../redux/services/services";
import { message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { resetFormData } from "../../redux/slice/formDataSlice";

function ListTen() {
  const navigate = useNavigate();
  const intialFormData = useSelector((state) => state.multiStepForm);
  const dispatch = useDispatch(); // For resetting the form state
  console.log("intialFormData", intialFormData);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [
    loginUser,
    {
      isLoading: loginLoading,
      isSuccess: loginSuccess,
      isError: isLoginError,
      data: loginData,
      error: loginError,
    },
  ] = useLoginUserMutation();

  const token = JSON.parse(localStorage.getItem("token"))?.access;

  const [submitFormData, { isLoading, isSuccess, isError, data, error }] =
    useSubmitFormDataMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // // Login logic if no token
    // if (!token) {
    //   const loginPayload = {
    //     email: intialFormData.step9.email,
    //     password: intialFormData.step9.password,
    //   };
    //   const headers = {
    //     "Content-Type": "application/json",
    //     Accept: "*/*",
    //   };

    //   try {
    //     const response = await loginUser({
    //       payload: loginPayload,
    //       headers,
    //     }).unwrap();
    //     if (response) {
    //       console.log("Token saved successfully:", response);
    //       localStorage.setItem("token", JSON.stringify(response));
    //       navigate("/"); 
    //     }
    //   } catch (err) {
    //     console.error("Login Failed:", err);
    //     message.error(
    //       err?.data?.message || "Login failed. Please check your credentials."
    //     );
    //     return; 
    //   }
    // }

    // Listing creation payload
    // if(!token){
    //  const email = intialFormData.step9.email
    // }
    const id = JSON.parse(localStorage.getItem("id"));
    console.log("idsssssssssss",id)
    const payload = {
      user:id,
      type: {
       name: intialFormData?.step1?.propertyType[0].name,
      },
      location: {
        city: intialFormData.step3.city,
        country: intialFormData.step3.country,
        state: intialFormData.step3.state,
        address: intialFormData.step3.street,
        code_postal: intialFormData.step3.postalCode,
      },
      features: Object.keys(intialFormData.step4)
        .filter((key) => intialFormData.step4[key]) 
        .map((key) => ({ name: key })),
     photos: intialFormData.step8.image.map((img) => ({ name: img.filename, url: img.url})),

      title: "New Listing",
      description: intialFormData.step5.textArea,
      price: intialFormData.step6.price,
      surface: intialFormData.step3.superficieBrute,
      land_area: intialFormData.step3.surfaceTerrain,
      usable_area: intialFormData.step3.surfaceUtilisable,
      year_of_construction: intialFormData.step3.anneeConstruction,
      num_of_bathrooms: intialFormData.step3.bathcount,
      num_of_parking_spaces: intialFormData.step3.parkingSpaceCount,
      diagnosis: false,
      latitude: "213",
      longitude: "213",
      location: {
        city: intialFormData.step2.city,
        country: intialFormData.step2.country,
        state: intialFormData.step2.state,
        address: intialFormData.step2.street,
        code_postal: intialFormData.step2.postalCode,
      },
    };

    try {
      const response = await submitFormData(payload, token).unwrap();
      message.success("Listing Created Successfully but Your Add will be visible after email varifications");
      console.log("Listing Created Successfully", response);

      // Reset the form
      if (response) {
        dispatch(resetFormData());
        navigate("/");
      }
    } catch (error) {
      message.error("Listing Creation Failed");
      console.error("Listing Failed", error);
    }
  };

  const handleRetour = () => {
    if (token) {
      navigate("/lists/8"); 
    } else {
      navigate("/lists/9"); 
    }
  };

  return (
    <>
      <main>
        <section className="list-form-10-background">
          <div className="list-form-10-inner__container">
            <h1>Publier une annonce de vente</h1>
            <div className="progress">
              {token ? (
                <>
                  <p>09</p>
                  <span>/ 09</span>
                </>
              ) : (
                <>
                  <p>10</p>
                  <span>/10</span>
                </>
              )}
            </div>
            <div className="card">
              <h2>Votre annonce est en cours de vérification</h2>
              <div className="list-form-10-separator"></div>

              <ul className="instructions">
                {token ? (
                  <>
                    <li>
                      Votre annonce est désormais en attente de validation par
                      notre service client (du lundi au samedi, de 9h à 18h).
                    </li>
                    <li>
                      Elle sera mise en ligne dans la journée, une fois que nous
                      l'aurons examinée et validée.
                    </li>
                    <li>
                      Si vous avez des questions, n'hésitez pas à contacter nos
                      conseillers au 01 40 56 33 33.
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      Nous venons de vous envoyer un e-mail à . <br />
                      Cliquez sur le lien de confirmation pour activer votre
                      compte et gérer votre annonce.
                    </li>
                  </>
                )}
              </ul>
            </div>
            <div className="list-form-10-button-wrapper ">
              <button onClick={handleRetour} type="button" className="back">
                Retour
              </button>
              <button className="list-form-10-button" onClick={handleSubmit}>
                D'accord
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default ListTen;
