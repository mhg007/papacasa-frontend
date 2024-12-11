import React, { useEffect, useState } from "react";
import axios from "axios";
import "./profile.css";
import image__placeholder from "./Asessts/Images/image__placeholder.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  useGetListingsQuery,
  useProfileUpdateMutation,
  useUserDataQuery,
} from "../components/redux/services/services";
import { message } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function Profile() {
  const { id } = useParams();
  const [image, setImage] = useState(image__placeholder);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { data: userData, isLoading: isListingsLoading } = useUserDataQuery(id);
  console.log("🚀 ~ Profile ~ userData:", userData);
  
  
  const [formValues, setFormValues] = useState(
    userData || {
      first_name: "",
      last_name: "",
      role: "",
      addresse: "",
      telephone: "",
      email: "",
      civilite: "",
      filename: "",
      url:"",
    }
  );

  const navigate = useNavigate();

  const [profileUpdate, { isLoading, isSuccess, isError, data, error }] =
    useProfileUpdateMutation();
  // useEffect(() => {
  //   // Get user data from localStorage
  //   const token = JSON.parse(localStorage.getItem("token"))?.access;
  //   if (storedUser) {
  //     setUserData({
  //       civilte: storedUser.first_name || "",
  //       nom: storedUser.last_name || "",
  //       prenom: storedUser.prenom || "",
  //       email: storedUser.email || "",
  //     });
  //     setPhoneNumber(storedUser.telephone || "");
  //     setImage(storedUser.image || image__placeholder);
  //   } else {
  //     toast.error("No user data found in localStorage.");
  //   }
  // }, []);

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    setPhoneNumber(value);

    const frenchPhoneRegex = /^(?:\+33|0033|0)\s?[1-9](?:\s?\d{2}){4}$/;

    if (!value) {
      setErrorMessage("");
      return;
    }

    if (!frenchPhoneRegex.test(value)) {
      setErrorMessage(
        "Veuillez entrer un numéro de téléphone valide en France."
      );
    } else {
      setErrorMessage("");
    }
  };

  const handleChange = (e) => {
    const { id, value, checked, type } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const payload = {
      first_name: formValues.first_name,
      last_name: formValues.last_name,
      email: formValues.email,
      telephone: formValues.telephone,
      gender: formValues.civilite,
      role: formValues.role,
      profile_image: {name:formValues.filename,url:formValues.url},
      addresse: formValues.addresse,
    };
    // if (formValues.filename) {
    //   payload.append("profile_image", formValues.filename); // Add the file
    // }
  
    try {
      const response = await profileUpdate({payload}).unwrap(); // Send FormData
      message.success("Profile updated successfully!");
      console.log("Profile updated successfully:", response);
    } catch (error) {
      message.error("Profile update failed!");
      console.error("Error updating profile:", error);
    }
  };
  
  useEffect(() => {
    if (userData) {
      setFormValues({
        first_name: userData.first_name || "",
        last_name: userData.last_name || "",
        role: userData.role || "",
        addresse: userData.addresse || "",
        telephone: userData.telephone || "",
        email: userData.email || "", // Email should remain read-only
        civilite: userData.gender || "",
        filename: userData.profile_image || null, // Preload image if needed
        url:""
      });
      if (userData.profile_image) {
        setImage(userData.profile_image); // Display the image if available
      }
    }
  }, [userData]);
  
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormValues((prevValues) => ({
        ...prevValues,
        filename: file.name,
        url:URL.createObjectURL(file),
      }));
      setImage(URL.createObjectURL(file)); // For preview
    }
  };
  
  return (
    <main>
      <section className="profil__section" onSubmit={handleSubmit}>
        <div className="profil-container">
          <h1>Profil</h1>
          <div className="profil__inner__container">
            <div className="profil-form-container">
              <div className="profile-image">
                <label htmlFor="filename" className="image-upload-label">
                  <img
                    src={image}
                    alt="Profile"
                    className="profile-placeholder"
                  />
                </label>
                <input
                  type="file"
                  id="filename"
                  name="filename"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </div>
              <form className="profil-form-inner-container">
                <div className="profil-form-group">
                  <div className="flex flex-col w-full">
                    <label htmlFor="civilite">Civilité*</label>
                    <input
                    className="mt-4"
                      value={formValues.civilite}
                      onChange={handleChange}
                      type="text"
                      id="civilite"
                      name="civilite"
                    />
                  </div>
                </div>
                <div className="profil-form-group">
                  {/* <div className="list-form-9-form-group"> */}
                  <label htmlFor="first_name ">Nom*</label>
                  <input
                  className="mr-14 mb-10"
                    value={formValues.first_name}
                    onChange={handleChange}
                    type="text"
                    id="first_name"
                    name="first_name"
                  />
                  {/* </div> */}
                  {/* <div className="list-form-9-form-group"> */}
                  <label htmlFor="last_name">Prénom*</label>
                  <input
                   className="mr-14 mb-10"
                    value={formValues.last_name}
                    onChange={handleChange}
                    type="text"
                    id="last_name"
                    name="last_name"
                  />
                  {/* </div> */}
                </div>
                <div className="profil-form-group">
                  <label htmlFor="telephone">
                    Téléphone*
                    <input
                     className="mt-4"
                      type="text"
                      id="telephone"
                      value={formValues.telephone}
                      onChange={handlePhoneChange}
                      required
                    />
                    {errorMessage && (
                      <span className="error-message">{errorMessage}</span>
                    )}
                  </label>

                  {/* <div className="list-form-9-form-group"> */}
                  <label htmlFor="email">Email*</label>
                  <input
                    value={formValues.email}
                    onChange={handleChange}
                    type="email"
                    id="email"
                    name="email"
                    readOnly
                  />
                  {/* </div> */}
                </div>

                <button type="submit" className="submit-btn">
                  Enregistrer
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <ToastContainer />
    </main>
  );
}

export default Profile;
