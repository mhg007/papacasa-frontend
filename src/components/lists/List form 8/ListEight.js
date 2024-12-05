import React, { useState } from "react";
import "./listEight.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateStepData } from "../../redux/slice/formDataSlice";
import upload_placeholder_delete_icon from "./Asessts/Images/upload_placeholder_delete_icon.svg";
import upload_placeholder_icon from "./Asessts/Images/upload_placeholder_icon.svg";
import { useUploadFileMutation } from "../../redux/services/services";
import { message } from "antd";

function ListEight() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = JSON.parse(localStorage.getItem("token"))?.access;


  const [sendFile, setSendFile] = useState([]);
  const [uploadFile, { isLoading, isSuccess, isError, data, error }] =
    useUploadFileMutation();

  // Fetch initial data from Redux store
  const intialFormData = useSelector((state) => state.multiStepForm.step8);
  //   console.log(intialFormData,"jhhhhhhhhhhhhh")
  const [files, setFiles] = useState(intialFormData?.image || []);

  const handleFileDrop = (e) => {
    e.preventDefault();
    console.log(e.target.files);

    const droppedFiles = Array.from(e.dataTransfer.files);
    addFiles(droppedFiles);
  };

  const handleFileChange = async (e) => {
    const selectedFiles = Array.from(e.target.files || []);
    const formData = new FormData();

    try {
      for (const file of selectedFiles) {
        formData.append("base_path", "papacasa/listing/");
        formData.append("artifact_type", "photos");
        formData.append("dataFiles", file);
        formData.append("filename", file.name);

        const response = await uploadFile({
          payload:formData , 
          headers: { headers: {
            "Content-Type": "multipart/form-data",
          } }
        }).unwrap();

        console.log(response, "response");

        const image = {
          url: response.files[0].path,
          filename: response.files[0].filename,
          file, // Include the file object for further use
        };

        setFiles((prevFiles) => [...prevFiles, image]);
      }
    } catch (error) {
      console.error("Image upload failed", error);
    }
  };

  const addFiles = (newFiles) => {
    const fileURLs = newFiles.map((file) => ({
      file,
      url: URL.createObjectURL(file),
      filename: file.name || "", // Ensure filename is available
    }));

    setFiles((prevFiles) => [...prevFiles, ...fileURLs]);
  };

  const removeFile = (index) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  const handleStepUpdate = (event) => {
    event.preventDefault();

    // Normalize the file data
    const fileData = files.map((fileObj) => ({
      filename: fileObj.filename || fileObj.file?.name || "Unknown", // Handle missing filename
      url: fileObj.url,
    }));

    if (fileData.length === 0) {
      message.error("Please upload at least one image");
      return;
    }

    dispatch(updateStepData({ step: "step8", data: { image: fileData } }));
    if(token){
        navigate("/lists/10");
    }
    else{
        navigate("/lists/9");
    }
  };

  console.log(sendFile, "sendFile");
  console.log(files, "Files");
  return (
    <>
      <main>
        <section className="list-form-8-background">
          <div className="list-form-8-inner__container">
            <h1>Publier une annonce de vente</h1>
            <div className="progress">
            {token ? (
              <>
                <p>08</p>
                <span>/ 9</span>
              </>
            ) : (
              <>
                <p>08</p>
                <span>/10</span>
              </>
            )}
            </div>
            <div className="list-form-8-form-section">
              <h2>Vos photos</h2>
              <p>
                Vous pouvez télécharger jusqu'à 12 photos. <br />
                Pas d'inquiétude : vos photos peuvent être ajoutées ou modifiées
                plus tard gratuitement.
              </p>
              {isLoading?
              <>Loading</>:
              <span className="photo-label">Photo de couverture</span>
            }

              {/* Photo Gallery */}
              <div className="photo-gallery">
                {files.map((fileObj, index) => (
                  <div className="photo" key={index}>
                    <img
                      src={fileObj.url}
                      alt={`Uploaded ${index + 1}`}
                      className="upload-selected-image"
                    />
                    <img
                      src={upload_placeholder_delete_icon}
                      className="delete-icon"
                      alt="Delete"
                      onClick={() => removeFile(index)}
                    />
                  </div>
                ))}
              </div>

              {/* Upload Section */}
              <div className="placeholder__text">
                <h3>Télécharger l'image</h3>
              </div>
              <div
                className="upload-box w-full bg-white border-dashed border-2 border-black-300 p-4 text-center cursor-pointer"
                onDragOver={(e) => e.preventDefault()}
              >
                <img src={upload_placeholder_icon} alt="Upload Placeholder" />
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                  id="fileUpload"
                />
                <label
                  htmlFor="fileUpload"
                  className="cursor-pointer text-sm mt-2 text-black-500"
                >
                  <p>
                    <a>Télécharger un fichier</a> ou faites glisser et déposez
                  </p>
                  <h5 className="upload-info">PNG, JPG, GIF jusqu'à 10 Mo</h5>
                </label>
              </div>
            </div>

            {/* Buttons */}
            <div className="list-form-8-form-buttons">
              <Link to="/lists/7" type="button" className="back">
                Retour
              </Link>
              {!token?
              <button type="button" className="next" onClick={handleStepUpdate}>
              Suivant
              </button>:
              <button type="button" className="next" onClick={handleStepUpdate}>
              Publier mon annonce
              </button>

              }
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default ListEight;
