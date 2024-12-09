import React, { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./css/homepage.css";
import newlogo from "./Assests/Images/new-logo.svg";
import Hero_image from "./Assests/Images/Hero_image.webp";
import search_icon from "./Assests/Images/search-icon.svg";
import service_1 from "./Assests/Images/service_1.png";
import service_2 from "./Assests/Images/service_2.png";
import service_3 from "./Assests/Images/service_3.png";
import service_4 from "./Assests/Images/service_4.png";
import blk_right_arrow from "./Assests/Images/blk_right_arrow.svg";
import heart_Icon from "./Assests/Images/heart_Icon.svg";
import location_Icon from "./Assests/Images/location_Icon.svg";
import Badge_1 from "./Assests/Images/Badge (1).png";
import Badge_2 from "./Assests/Images/Badge (2).png";
import Badge_3 from "./Assests/Images/Badge3.png";
import why_papacasa_image from "./Assests/Images/why_papacasa_image.png";
import comas from "./Assests/Images/comas.png";
import previous_icon from "./Assests/Images/previous_icon.svg";
import next_icon from "./Assests/Images/next-icon.svg";
import Farm_house from "./Assests/Images/Farm house.png";
import Scenic_home from "./Assests/Images/Scenic home.png";
import Apartments from "./Assests/Images/Apartments.png";
import home_pictures from "./Assests/Images/home pictures.png";
import searchicon from "./Assests/Images/search-icon.svg";
import {
  useDropDownDataQuery,
  useFavoritesIconMutation,
  useGetListingsQuery,
  useListOneDataQuery,
  useSearchFilterQuery,
} from "../redux/services/services";
import { Carousel, Dropdown, message, Slider } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { filterListings } from "../redux/slice/filterCardsList";
function HomPage() {
  const [priceRange, setPriceRange] = useState([0, 20000000]);
  const [formValues, setFormValues] = useState({
    searchType: "",
    citys: "",
    minMaxPrice: "",
    pieces: "",
    type: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target || {}; // Get the target id and value
    const isSlider = Array.isArray(value); // Check if the value is from the slider

    setFormValues((prevValues) => ({
      ...prevValues,
      [id]: isSlider ? `${value[0]}-${value[1]}` : value, // Handle slider and other inputs
    }));
    if (isSlider) {
      setPriceRange(value);
    }
    console.log("Updated formValues:", formValues);
  };

  const getFilters = useMemo(() => {
    const { searchType, citys, minMaxPrice, pieces, propType } = formValues;
    const [minPrice, maxPrice] = minMaxPrice
      ? minMaxPrice.split("-").map(Number)
      : [null, null];

    const filters = {};

    if (searchType) filters.searchType = searchType;
    if (citys) filters.city = citys;
    if (minPrice !== null) filters.min_price = minPrice;
    if (maxPrice !== null) filters.max_price = maxPrice;
    if (pieces) filters.no_of_rooms = pieces;
    if (propType) filters.type = propType;

    return filters;
  }, [formValues]);

  // const filteredCards = useMemo(() => {
  //   return cards.filter((card) => {
  //     const { min_price, max_price } = getFilters;
  //     const isWithinPriceRange =
  //       (!min_price || card.price >= min_price) &&
  //       (!max_price || card.price <= max_price);

  //     return (
  //       isWithinPriceRange &&
  //       (getFilters.city ? card.city === getFilters.city : true) &&
  //       (getFilters.no_of_rooms
  //         ? card.rooms === parseInt(getFilters.no_of_rooms, 10)
  //         : true) &&
  //       (getFilters.type ? card.type === getFilters.type : true)
  //     );
  //   });
  // }, [cards, getFilters]);

  const { data: listingsData, isLoading: isListingsLoading } =
    useGetListingsQuery(getFilters);
  console.log("listingsData", listingsData);
  const intialFilterData = useSelector(
    (state) => state.filterCardsList?.filterList || {}
  );

  const { data: filterData, isError, isLoading } = useListOneDataQuery();

  const [listData, setListingsData] = useState(listingsData);
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
  // console.log("filterData", filterData);
  // console.log("filterData.localisation.citys", filterData?.localisation?.citys);
  // console.log("data");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [favoritesIcon, {}] = useFavoritesIconMutation();

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
  const contentStyle = {
    margin: 0,
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  const handleSelect = (e) => {
    e.preventDefault();
    const [minPrice, maxPrice] = formValues.minMaxPrice
      ? formValues.minMaxPrice.split("-").map(Number)
      : [null, null];

    const filterDropData = {
      ...formValues,
      minPrice,
      maxPrice,
    };
    console.log("filterDropData", filterDropData);

    // Dispatch to Redux store
    dispatch(
      filterListings({ filterCard: "filterList", data: filterDropData })
    );
    navigate("/search-listings");

  };

  const formatNumber = (value) => {
    return new Intl.NumberFormat("de-DE", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })
      .format(value)
      .replace(/\./g, " ") // Replace dots with spaces for thousands separator
      .concat("€"); // Append the euro sign directly
  };

  return (
    <>
      {/* <Navbar changeLang={changeLang} t={t}/> */}
      <main>
        <section className="hero__banner">
          <div className="container">
            <div className="hero__wrapper">
              <div className="hero__left">
                <h1 className="hero__heading">
                  Immobilier et vacances 0% de commission{" "}
                </h1>
                <p className="hero__text">
                  <strong>Trouvez</strong> ou{" "}
                  <Link>
                    <strong className="proposez">proposez</strong>
                  </Link>{" "}
                  un bien immobilier de Particulier à Particulier, sans
                  commission.
                </p>
                <Link to="/lists/1">
                  <button className="hero__btn">Publier une annonce</button>
                </Link>
              </div>
              <div className="hero__right">
                <img src={Hero_image} alt="" className="hero__image" />
              </div>
            </div>
          </div>
          <div className="divHide flex justify-center  ">
          <div className="search__list_home_page w-[100%] max-w-[1280px] rounded-[130px] bg-[#ffffffb3]">
            <form
            onSubmit={handleSelect}
            className="search__form flex flex-wrap items-center">
              {/* Type de recherche */}
              <div className="search__types-1 w-full md:w-auto">
                <h2 className="text-sm font-medium mb-1">Type de recherche</h2>
                <select
                  id="searchType"
                  className="m-0 w-full border border-gray-300 rounded p-2"
                  onChange={handleChange}
                >
                  <option value="">Sélectionner</option>
                  <option value="achat">Achat</option>
                  {/* <option value="location">Location</option> */}
                </select>
              </div>

              {/* Localisation */}
              <div className="search__types flex justify-end items-center w-full md:w-auto ">
                {/* <div className=" flex justify-center items-center bg-slate-500"> 
                </div> */}
                <div className=" h-36 flex flex-col items-center justify-end ">
                  <h2 className="text-sm font-medium">Localisation</h2>
                  <input
                    id="citys"
                    className="w-full border focus:border-gray-300 rounded"
                    onChange={handleChange}
                    type="text"
                  />
                </div>
              </div>

              {/* Types de bien */}
              <div className="search__types w-full md:w-auto">
                <h2 className="text-sm font-medium mb-1">Types de bien</h2>
                <select
                  id="propType"
                  className="m-0 w-full border border-gray-300 rounded p-2"
                  onChange={handleChange}
                >
                  <option value="">Sélectionner</option>
                  {filterData?.map((type) => (
                    <option key={type.id} value={type.name}>
                      {type.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Pièces */}
              <div className="search__types w-full md:w-auto">
                <h2 className="text-sm font-medium mb-1">Pièces</h2>
                <select
                  id="pieces"
                  className="m-0 w-full border border-gray-300 rounded p-2"
                  onChange={handleChange}
                >
                  <option value="">Sélectionner</option>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((piece) => (
                    <option key={piece} value={piece}>
                      {piece}
                    </option>
                  ))}
                </select>
              </div>

              {/* Prix maximum */}
              <div className="search__types w-full md:w-auto">
                <h2 className="text-sm font-medium mb-1">Prix maximum</h2>
                <div className="m-0 w-[15vw]">
                  <Slider
                    range
                    min={0}
                    max={20000000}
                    step={100}
                    value={
                      formValues.minMaxPrice
                        ? formValues.minMaxPrice.split("-").map(Number) // Parse stored price range
                        : [0, 20000000]
                    }
                    onChange={
                      (value) =>
                        handleChange({ target: { id: "minMaxPrice", value } }) // Pass a compatible event-like object
                    }
                    tooltip={{ formatter: (value) => formatNumber(value) }}
                  />
                  <p className="text-sm mt-2">
                    {`${formatNumber(priceRange[0])} to ${formatNumber(
                      priceRange[1]
                    )}`}
                  </p>
                </div>
              </div>

              {/* Search Button */}
              <button type="submit" className="search__icon relative w-full md:w-auto flex items-center">
                <img
                  src={searchicon}
                  height={"100%"}
                  width={"100%"}
                  alt="Search Icon"
                  className="w-10 h-10 cursor-pointer bg-[#F03836] p-2 rounded-full"
                />
              </button>
            </form>
            </div>

            <form action="" className="mobile__search__btn">
              <div className="mbl__Srch__btn__wrapper">
                <div className="mbl_srch_icon">
                  <img src={search_icon} alt="" />
                </div>
                <p>Rechercher des maisons </p>
              </div>
            </form>
          </div>
        </section>
        <section className="services__section">
          <div className="container">
            <div className="services__heading__text">
              <h2>Services</h2>
              <p>Tous les services exclusifs que nous offrons</p>
            </div>
            <div className="services__grid">
              <Link>
                <div className="services">
                  <img src={service_1} alt="" />
                  <h3>Vendez serein!</h3>
                  <p>
                    On s'occupe de votre vente ! Visite virtuelle, photos pro,
                    estimation du prix, filtrage des contacts... et 0 % de
                    commission.
                  </p>
                </div>
              </Link>
              <Link>
                <div className="services">
                  <img src={service_2} alt="" />
                  <h3>Locathèque</h3>
                  <p>
                    Grâce au dossier de location, locataires et propriétaires
                    gagnent du temps sur la mise en relation !
                  </p>
                </div>
              </Link>
              <Link>
                <div className="services">
                  <img src={service_3} alt="" />
                  <h3>Ateliers en ligne</h3>
                  <p>
                    Vendre son bien, signer un contrat de location, location
                    vacances... Pendant une heure, on vous explique tout dans
                    nos ateliers !
                  </p>
                </div>
              </Link>
              <Link>
                <div className="services">
                  <img src={service_4} alt="" />
                  <h3>Panneau A Vendre</h3>
                  <p>
                    Touchez une nouvelle cible d'acheteurs grâce au panneau A
                    vendre, offert avec votre annonce Papacasa
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>
        <section className="featured__full__width">
          <section className="featured__properties__section">
            <div className="container">
              <div className="featured__heading__text__btn__wrapper">
                <div className="featured__heading__text">
                  <h2>Nos dernières annonces</h2>
                </div>
                <div className="featured__btn w-[200px]">
                  <button>Voir plus d'annonces</button>
                  <Link>
                    <img src={blk_right_arrow} alt="" />
                  </Link>
                </div>
              </div>

              <div className="properties__grid w-full">
                {(listData || []).map((item, index) => (
                  <div className="cards w-full" key={index}>
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

        <section className="why__papacasa__section">
          <div className="container">
            <div className="why__ppc__wrapper">
              <div className="why__ppc__left">
                <h6>Why Papacasa?</h6>
                <h2>
                  Pourquoi plus de 350.000 propriétaires par an choisissent
                  Papacasa{" "}
                </h2>
                <img src={Badge_1} alt="" />
                <h3>Le n°1 de l’immobilier entre particuliers</h3>
                <p>
                  Avec 3 millions de visiteurs par mois, PAP est un
                  incontournable pour toutes les personnes qui recherchent
                  activement un logement.
                </p>
                <img src={Badge_2} alt="" />
                <h3>45 ans d'expérience</h3>
                <p>
                  Comment on survit 45 ans dans un milieu aussi concurrentiel
                  que l’immobilier ? En étant efficace, tout simplement.
                </p>
                <img src={Badge_3} alt="" />
                <h3>200 collaborateurs à votre service</h3>
                <p>
                  Derrière le site, nous sommes une équipe de 200 collaborateurs
                  qui vous accompagnent, et ça, ça change tout.
                </p>
              </div>
              <div className="why__ppc__right">
                <img src={why_papacasa_image} alt="" />
              </div>
            </div>
            <div className="why__ppc__btn">
              <button className="why__ppc__left__btn">
                J'ai un logement à vendre
              </button>
              <button className="why__ppc__right__btn">
                J'ai un logement à louer
              </button>
            </div>
          </div>
        </section>

        <section className="testimonials__section">
          <div className="container">
            <div className="testimonials">
              <div className="comas__image">
                <img src={comas} alt="" />
              </div>
              <div className="testimonials__content">
                <h3>Promesse tenue… !</h3>
                <p>
                  Il est très rare aujourd'hui de tomber sur un société qui
                  tient sa parole en terme de services rendus, de la relation
                  client en elle-même jusque dans les résultats obtenus. Un sans
                  faute sur toute la ligne !
                </p>
                <h4>Florent M.</h4>
                <p>Appartement 2 pièces • 31 m² • Paris XVI</p>
                <div className="testimonials__btn">
                  <Link className="left__arrow__btn">
                    <img src={previous_icon} alt="" />
                  </Link>
                  <Link className="right__arrow__btn">
                    <img src={next_icon} alt="" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="counters__section">
          <div className="counters__container">
            <h2>Un nombre qui compte vraiment</h2>
            <h3>
              Repellendus repellat laudantium.Notre accomplissement dans le
              parcours illustré en chiffres
            </h3>
            <div className="counters__grid">
              <div className="counters">
                <h4>40+</h4>
                <p>Clients Satisfaits</p>
              </div>
              <div className="counters">
                <h4>540+</h4>
                <p>Projets Terminés</p>
              </div>
              <div className="counters">
                <h4>300</h4>
                <p>Membres Dévoués</p>
              </div>
              <div className="counters">
                <h4>25+</h4>
                <p>Prix Remportés</p>
              </div>
            </div>
          </div>
        </section>
        <section className="blogues__section">
          <div className="container">
            <div className="blogues__heading__text">
              <h2>Blogues</h2>
            </div>
            <div className="blogues__grid">
              <Link>
                <div className="blogues">
                  <img src={Farm_house} alt="" />
                  <h3>
                    Sarcelles : la ville à ne pas zapper si vous voulez investir
                    en 2025
                  </h3>
                  <p>
                    Sarcelles is not necessarily the first city that comes to
                    mind htmlFor investment. It is...
                  </p>
                  <div className="blogues__badge">
                    <p>Immobilier</p>
                  </div>
                </div>
              </Link>
              <Link>
                <div className="blogues">
                  <img src={Scenic_home} alt="" />
                  <h3>
                    Sarcelles : la ville à ne pas zapper si vous voulez investir
                    en 2025
                  </h3>
                  <p>
                    Sarcelles is not necessarily the first city that comes to
                    mind htmlFor investment. It is...
                  </p>
                  <div className="blogues__badge">
                    <p>Immobilier</p>
                  </div>
                </div>
              </Link>
              <Link>
                <div className="blogues">
                  <img src={Apartments} alt="" />
                  <h3>
                    Sarcelles : la ville à ne pas zapper si vous voulez investir
                    en 2025
                  </h3>
                  <p>
                    Sarcelles is not necessarily the first city that comes to
                    mind htmlFor investment. It is...
                  </p>
                  <div className="blogues__badge">
                    <p>Immobilier</p>
                  </div>
                </div>
              </Link>
              <Link>
                <div className="blogues">
                  <img src={home_pictures} alt="" />
                  <h3>
                    Sarcelles : la ville à ne pas zapper si vous voulez investir
                    en 2025
                  </h3>
                  <p>
                    Sarcelles is not necessarily the first city that comes to
                    mind htmlFor investment. It is...
                  </p>
                  <div className="blogues__badge">
                    <p>Immobilier</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default HomPage;
