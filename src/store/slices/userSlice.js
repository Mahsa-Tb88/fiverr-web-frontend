import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: {
    isLoggedIn: false,
    isAdmin: false,
    username: "admin",
    image: "",
  },
  initialized: false,
  initializeError: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
  },
});
export default userSlice;
const userActions = userSlice.actions;
export { userActions };
