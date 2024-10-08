import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  fullName: '',
  nationalID: '',
  createdAt: '',
};
const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    createCustomer: {
      prepare(fullName, nationalID, createdAt) {
        return {
          payload: {
            fullName,
            nationalID,
            createdAt: new Date.toString(),
          },
        };
      },
      reducer(state, action) {
        state.fullName = action.payload.fullName;
        state.nationalID = action.payload.nationalID;
        state.createdAt = action.payload.createdAt;
      },
    },
    nameUpdate(state, action) {
      state.fullName = action.payload;
    },
  },
});
export const { createCustomer, nameUpdate } = customerSlice.actions;

export default customerSlice.reducer;
