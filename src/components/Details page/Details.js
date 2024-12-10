import React, { useState } from "react";
import { Image } from "antd";
import { useParams, useSearchParams } from "react-router-dom";
import {
  useGetDetailQuery,
  useGetListingsQuery,
} from "../redux/services/services";
import "./details.css";
import ProfileLogo from "../profileLogo/ProfileLogo";

function Details() {
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  // console.log("🚀 ~ Details ~ id:", id);
  // const { data, setData } = useState(null);
  const { data: cardData, isLoading: isCardDataLoading } =
    useGetDetailQuery(id);
  console.log("🚀 ~ Details ~ cardData:", cardData);
  // useGetListingsQuery()
  // console.log(cardData);
  // return <></>
  const formatNumber = (value) => {
    return new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(value);
  };
  return (
    <main>
      {/* {cardData?.map((item)=>( */}
      <section className="background__image__section">
        {/* {cardData?.photos.map((item, index) => ( */}
        <div className="hero__section">
          <div className=" w-[100%]  flex items-center  h-[100%]  justify-center">
            <div className="flex justify-end w-[50%] p-6 ">
              <img
                className="rounded-xl"
                width={"100%"}
                src={cardData?.photos[0]?.url}
                alt=""
              />
            </div>
            <div className=" flex items-end justify-center flex-col w-[43%] h-[31vw] ">
              <div className=" flex space-x-2 p-2 w-[100%] ">
                <img
                  className="rounded-xl"
                  width={"50%"}
                  src={cardData?.photos[1]?.url}
                  alt=""
                />
                <img
                  className="rounded-2xl"
                  width={"50%"}
                  src={cardData?.photos[2]?.url}
                  alt=""
                />
              </div>
              <div className=" flex  p-2 w-[100%] space-x-2">
                <img
                  className="rounded-xl"
                  width={"50%"}
                  src={cardData?.photos[1]?.url}
                  alt=""
                />
                <img
                  className="rounded-2xl"
                  width={"50%"}
                  src={cardData?.photos[2]?.url}
                  alt=""
                />
              </div>
              {/* <div className="flex w-[100%] bg-pink-300">
                <img
                  className="rounded-xl"
                  width={"52%"}
                  src={cardData?.photos[1]?.url}
                  alt=""
                />
                <img
                  className="rounded-xl"
                  width={"50%"}
                  src={cardData?.photos[0]?.url}
                  alt=""
                />
              </div> */}
            </div>
          </div>
        </div>
        {/* ))} */}

        <div className="second__section__wrapper">
          <div className="container">
            <section className="second__section ">
              <div className="inner__container">
                <div className="left-section ">
                  <div className="left__inner__section">
                    <div className="status-wrapper">
                      <span className="status">À vendre</span>
                    </div>
                    <ul className="upload-wrapper">
                      <li>Partager</li>
                      <li>Enregistrer</li>
                    </ul>
                  </div>
                  <div className="left-section-heading">
                    <h1>{cardData?.type?.name}</h1>
                  </div>

                  <ul className="location-wrapper">
                    <li>
                      {cardData?.location.country}, {cardData?.location?.city}
                    </li>
                    <div className="flex items-center ">
                      <div className="">
                        {cardData?.user?.profile_image !== null ? (
                          <img
                          
                            src={cardData?.user?.profile_image}
                            alt=""
                          />
                        ) : (
                          <ProfileLogo />
                        )}{" "}
                      </div>
                      <div>

                      <li className="">
                        {cardData?.user?.first_name} {cardData?.user?.last_name}
                      </li>
                      </div>
                    </div>
                  </ul>
                  <ul className="features">
                    <li>3 Chambres</li>
                    <li>{`${cardData?.num_of_bathrooms} Salles de bains`}</li>
                    <li>2 Cuisines</li>
                    <li>{`${cardData?.num_of_parking_spaces} Parking`}</li>
                    <li>1 Jardin</li>
                  </ul>
                </div>
              </div>
              <div className="right-section">
                <div className="price-wrapper flex justify-between items-center">
                  <div className="price">{formatNumber(cardData?.price)}</div>
                  <div className="text-xl font-semibold">
                    <p>prix</p>
                  </div>
                </div>
                <div className="seller-info">
                  {cardData?.user?.profile_image !== null ? (
                    <img
                      className="bg-slate-400"
                      src={cardData?.user?.profile_image}
                      alt=""
                    />
                  ) : (
                    <ProfileLogo />
                  )}
                  <p>
                    {cardData?.user?.first_name} {cardData?.user?.last_name}
                  </p>
                </div>
                <button className="contact-button">Contactez le vendeur</button>
              </div>
            </section>
            <div className="w-full">
              <div className="inner__container">
                <section className="information">
                  <h2>Plus d'informations</h2>
                  <div className="separator"></div>
                  <p>
                    Découvrez votre nouveau sanctuaire dans cette belle maison,
                    parfaitement située au cœur de l'Espagne. Cette propriété
                    offre :
                  </p>
                  <ul>
                    <li>{cardData?.description}</li>
                  </ul>
                  <h5>
                    Que vous cherchiez à vous agrandir ou à investir, cette
                    propriété a tout pour plaire. Ne manquez pas votre chance de
                    faire de cette magnifique maison la vôtre !
                  </h5>
                </section>
              </div>
              <div className="inner__container">
                <section className="amenities">
                  <h2>Commodités</h2>
                  <p>À propos des commodités de la propriété</p>
                  <div className="separator"></div>

                  <ul className="amenities-list">
                    {cardData?.features?.map((f, index) => (
                      <li key={index}>{f.name}</li>
                    ))}
                  </ul>
                </section>
              </div>
              <div className="inner__container">
                <div className="map-wrapper">
                  <h3>Emplacement</h3>
                  <p>New Road, 42 Rue de Rivoli, 75001 Paris</p>
                  <div className="separator"></div>

                  <div className="map-placeholder">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11426922.61546134!2d-7.988112082935941!3d45.63523546072285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd54a02933785731%3A0x6bfd3f96c747d9f7!2sFrance!5e0!3m2!1sen!2s!4v1731099145878!5m2!1sen!2s"
                      width="400"
                      height="450"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* // ))} */}
    </main>
  );
}

export default Details;
