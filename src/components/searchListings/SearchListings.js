import React, { useState, useEffect, useMemo } from "react";
import "../homepage/css/homepage.css";
import "./sarchListings.css";
import heart_Icon from "../homepage/Assests/Images/heart_Icon.svg";
import location_Icon from "../homepage/Assests/Images/location_Icon.svg";
import searchicon from "../homepage/Assests/Images/search-icon.svg";
import {
  useDropDownDataQuery,
  useFavoritesIconMutation,
  useGetListingsQuery,
  useListOneDataQuery,
} from "../redux/services/services";
import { Carousel, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { filterListings } from "../redux/slice/filterCardsList";

function SearchListings() {
    // console.log("intialFilterData",intialFilterData)
   
      
      
   
    

 const { data:filterData, isError, isLoading } = useListOneDataQuery();

  
  const [favoritesIcon] = useFavoritesIconMutation();

  const intialFilterData = useSelector((state) => state.filterCardsList?.filterList.undefined || {});
  console.log("intialFilterData",intialFilterData)

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState(intialFilterData,{
    searchType: "",
    citys: "",
    minMaxPrice: "",
    pieces: "",
    propType: "",
  });
  console.log('***',intialFilterData)
  useEffect(() => {
    if (intialFilterData && JSON.stringify(intialFilterData) !== JSON.stringify(formValues)) {
      setFormValues((prevValues) => ({
        ...prevValues,
        ...intialFilterData,
      }));
    }
  }, [intialFilterData]);
  

  const handleFavortiesIcons = async (item) => {
    const payload = {
      utilisateur: item.utilisateur,
      annonce: item.id,
    };
    const headers = {
      "Content-Type": "application/json",
      Accept: "*/*",
    };

    try {
      const response = await favoritesIcon({ payload, headers }).unwrap();
      message.success("Added to favorites!");
    } catch (error) {
      message.error("Failed to add to favorites!");
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
  };

  const handleSelect = () => {
    const [minPrice, maxPrice] = formValues.minMaxPrice
      ? formValues.minMaxPrice.split("-").map(Number)
      : [null, null];

    const filterDropData = {
      ...formValues,
      minPrice,
      maxPrice,
    };

    // Dispatch to Redux store
    dispatch(filterListings({ filterCard: "filterList", data: filterDropData }));
    navigate("/search-listings");
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
  
  
  const {
    data: listingsData,
    isLoading: isListingsLoading,
  } = useGetListingsQuery(getFilters);
  console.log("listingsData",listingsData)

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
  
  return (
    <>
      <div className="container flex flex-col gap-5">
        <div className="search__list w-[85vw] max-w-[1280px] p-[20px] rounded-[130px] bg-[#FFFFFFCC]">
          <form className="search__form flex flex-wrap gap-4 items-center">
            {/* Type de recherche */}
            <div className="search__types-1 w-full md:w-auto">
              <h2 className="text-sm font-medium mb-1">Type de recherche</h2>
              <select
                id="searchType"
                value={formValues.searchType}
                className="m-0 w-full border border-gray-300 rounded p-2"
                onChange={handleChange}
              >
                <option value="">Sélectionner</option>
                <option value="achat">Achat</option>
              </select>
            </div>

            {/* Localisation */}
            <div className="search__types w-full md:w-auto">
              <h2 className="text-sm font-medium mb-1">Localisation</h2>
              <select
                id="citys"
                value={formValues.citys}
                className="m-0 w-full border border-gray-300 rounded p-2"
                onChange={handleChange}
              >
                <option value="">Sélectionner</option>
                <option value="karachi">Karachi</option>
              </select>
            </div>

            {/* Types de bien */}
            <div className="search__types w-full md:w-auto">
              <h2 className="text-sm font-medium mb-1">Types de bien</h2>
              <select
                id="propType"
                value={formValues.propType}
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
                value={formValues.pieces}
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
              <select
                id="minMaxPrice"
                value={formValues.minMaxPrice}
                className="m-0 w-full border border-gray-300 rounded p-2"
                onChange={handleChange}
              >
                <option value="">Ajouter Prix (€)</option>
                <option value="100-200">€100 - €200</option>
                <option value="200-500">€200 - €500</option>
                <option value="500-1000">€500 - €1000</option>
                <option value="1000-2000">€1000 - €2000</option>
                <option value="10000-200000">€10000 - €200000</option>
                <option value="80000-200000">€80000 - €200000</option>
              </select>
            </div>

            {/* Search Button */}
            <div className="search__icon relative w-full md:w-auto flex items-center">
              <img
                src={searchicon}
                alt="Search Icon"
                className="w-10 h-10 cursor-pointer bg-[#F03836] p-2 rounded-full"
                onClick={handleSelect}
              />
            </div>
          </form>
        </div>

        <div className="properties__grid w-full mt-8">
          {(listData|| []).map((item, index) => (
            <div className="cards w-full" key={index}>
              <div className="properties__top__block">
                <Carousel arrows infinite={false}>
                  {item.photos?.map((photo, photoIndex) => (
                    <div key={photoIndex} className="carousel-slide">
                      <img
                        src={photo.url}
                        alt={`Property ${index + 1} - Image ${photoIndex + 1}`}
                        className="property-image"
                      />
                    </div>
                  ))}
                </Carousel>
                <div className="favorite__icon">
                  <img
                    src={heart_Icon}
                    alt="Favorite Icon"
                    className="cursor-pointer"
                    onClick={() => handleFavortiesIcons(item)}
                  />
                </div>
              </div>
              <div className="properties__bottom__block">
                <h4>{item.type?.name || "Property Type"}</h4>
                <p className="description">
                  {item.description?.slice(0, 100) || "No description available."}
                </p>
                <div className="location">
                  <img src={location_Icon} alt="Location Icon" />
                  <p>{item.location?.city}</p>
                  <p>, {item.location?.country}</p>
                  <p>, {item.location?.code_postal}</p>
                </div>
                <h5>{item.price} €</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SearchListings;
