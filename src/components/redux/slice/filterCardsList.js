import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filterList: {
    listing_type: "",
    city: "",
    pieces: "",
    price_ranges: "",
    search_type: "",
  },
};

const filterCardsSlice = createSlice({
  name: "filterCardsList",
  initialState,
  reducers: {
    filterListings: (state, action) => {
      const { filterKey, data } = action.payload; // Expecting 'filterKey' and 'data' in payload
      state.filterList[filterKey] = data; // Dynamically update the specific filter key
      console.log("filterListings",data)
      console.log("filterList action",action)
      console.log("filterList state",state)

    },
    // Reset the filters to initial state
    resetFilterListingsData: () => initialState,
  },
});

export const { filterListings, resetFilterListingsData } = filterCardsSlice.actions;
export default filterCardsSlice.reducer;

