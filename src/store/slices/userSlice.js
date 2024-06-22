import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: {
    isLoggedIn: false,
    isSeller: false,
    username: "admin",
    userId: "",
    fullName: "",
    email: "",
  },
  initialized: false,
  initializeError: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.userInfo = action.payload;
    },
  },
});
export default userSlice;
const userActions = userSlice.actions;
export { userActions };
