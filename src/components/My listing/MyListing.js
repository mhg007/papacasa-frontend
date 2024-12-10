import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import location_Icon from "./Assests/Images/location_Icon.svg";
import heart_Icon from "./Assests/Images/heart_Icon.svg";
import announceIcon from "./Asessts/Images/mobile menu icons/announce-icon.svg";
import vendorIcon from "./Assests/Images/vendre-icon.svg";
import postAdIcon from "./Assests/Images/post-ad-icon.svg";
import messageIcon from "./Asessts/Images/mobile menu icons/messages-icon.svg";
import ProfileIcon from "./Asessts/Images/mobile menu icons/profile-icon.svg";
import buildingFront from "./Assests/Images/Building_front.png";
import grid2 from "./Assests/Images/grid_2.png";
import grid3 from "./Assests/Images/grid_3.png";
import grid4 from "./Assests/Images/grid_4.png";
import grid5 from "./Assests/Images/grid_5.png";
import grid6 from "./Assests/Images/grid_6.png";
import grid7 from "./Assests/Images/grid_7.png";
import grid8 from "./Assests/Images/grid_8.png";
import "./mylisting.css";
import { useFavoritesIconMutation, useGetListingsQuery } from "../redux/services/services";
import { Carousel, message } from "antd";
export const MyListing = () => {
  const { data: listingsData, isLoading: isListingsLoading } =
    useGetListingsQuery({ userId: 1 });
  const [listData, setListingsData] = useState(listingsData);
  console.log("listingsData", listingsData);
  const navigate = useNavigate();
  const [favoritesIcon, {}] = useFavoritesIconMutation();
  useEffect(() => {
    if (listingsData && Array.isArray(listingsData)) {
      const sortedData = [...listingsData].sort((a, b) => {
        const dateA = a.created_at ? new Date(a.created_at) : new Date(0); // Fallback to earliest date
        const dateB = b.created_at ? new Date(b.created_at) : new Date(0);
        return dateB - dateA;
      });
      setListingsData(sortedData);
    }
  }, [listingsData]);
  const handleFavortiesIcons = async (e) => {
    console.log(e.utilisateur);
    const payload = {
      utilisateur: e.utilisateur,
      annonce: e.id,
    };
    const headers = {
      "Content-Type": "application/json",
      Accept: "*/*",
    };
    try {
      const response = await favoritesIcon({ payload, headers }).unwrap();
      message.success("Favorites Successfully");
      console.log("Favorites Successfully", response);
      // navigate("/");
    } catch (error) {
      message.error("Favorites Failed");
      console.log("Favorites Failed", error);
    }
  };
  const handleShowMore = (index) => {
    const updatedListings = [...listData];
    updatedListings[index].isExpanded = !updatedListings[index].isExpanded;

    setListingsData(updatedListings);
  };
  const goToDetailsPage = (id) => {
    navigate(`/details/${id}`);
    console.log(id)
  };
  return (
    <>
      <body>
        <main>
          <section className="featured__full__width">
            <section className="featured__properties__section">
              <div className="container">
                <div className="featured__heading__text__btn__wrapper">
                  <div className="featured__heading__text">
                    <h2>Ma liste</h2>
                  </div>
                  <div className="featured__btn">
                    <button>Mon Annonce</button>
                    <p>Préféré</p>
                  </div>
                </div>

                <div className="properties__grid">
                  {(listData || []).map((item, index) => (
                    <div onClick={()=>goToDetailsPage(item.id)} className="cards w-full" key={index}>
                      <div className="properties__top__block">
                        {/* Carousel for Multiple Images */}
                        <Carousel arrows infinite={false}>
                          {item.photos?.map((photo, photoIndex) => (
                            <div key={photoIndex} className="carousel-slide">
                              <img
                                src={photo.url} // Access the `url` key for each photo object
                                alt={`Property ${index + 1} - Image ${
                                  photoIndex + 1
                                }`}
                                className="property-image"
                              />
                            </div>
                          ))}
                        </Carousel>

                        <div className="favorite__icon">
                          <img
                            name="favIcon"
                              onClick={() => handleFavortiesIcons(item)}
                            src={heart_Icon}
                            alt="Favorite Icon"
                            className="cursor-pointer"
                          />
                        </div>
                      </div>
                      <div className="properties__bottom__block">
                        <h4>{item.type?.name || "Property Type"}</h4>
                        <p className="description">
                          {item.description?.length > 100 ? (
                            <>
                              {item.description.slice(0, 100)}...
                              <button
                                className="show-more"
                                  onClick={() => handleShowMore(index)}
                              >
                                Show More
                              </button>
                            </>
                          ) : (
                            item.description || "No description available."
                          )}
                        </p>
                        <div className="location">
                          <img src={location_Icon} alt="Location Icon" />
                          <p>{item.location?.city}</p>
                          <p>, {item.location?.country}</p>
                          <p>, {item.location?.code_postal}</p>
                        </div>
                        <div className="divider"></div>
                        <h5>{item.price} €</h5>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </section>
        </main>
      </body>
    </>
  );
};
