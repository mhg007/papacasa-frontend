import { createSlice } from "@reduxjs/toolkit";

const multiStepFormSlice = createSlice({
  name: "multiStepForm",
  initialState: {
    step1: {},
    step2: {},
    step3: {},
    step4: {},
    step5: {},
    step6: {},
    step7: {},
    step8: {},
    step9: {},
    step10: {},
  },
  reducers: {
    updateStepData: (state, action) => {
      const { step, data } = action.payload;
      console.log("HEREE")
      state[step] = data;
    },
    resetFormData: () => ({
      step1: {},
      step2: {},
      step3: {},
      step4: {},
      step5: {},
      step6: {},
      step7: {},
      step8: {},
      step9: {},
      step10: {},
    }),
  },
});

export const { updateStepData, resetFormData } = multiStepFormSlice.actions;
export default multiStepFormSlice.reducer;
