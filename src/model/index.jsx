import { createSlice, configureStore } from "@reduxjs/toolkit";

const mainSlice = createSlice({
  name: "userInfo",
  initialState: {},
  reducers: {
    updateUserInfo: (state, actions) => {
      state["userInfo"] = actions.payload;
    },
  },
});

export const { updateUserInfo } = mainSlice.actions;

export const store = configureStore({
  reducer: mainSlice.reducer,
});
