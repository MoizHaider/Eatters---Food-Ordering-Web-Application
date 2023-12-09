import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "../Authentication/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

export const singup = createAsyncThunk(
  "singup",
  async ({ firstName, email, password }) => {
    const singup = await createUserWithEmailAndPassword(auth, email, password);
    console.log(singup);
    return { firstName: firstName, user: singup.user };
  }
);

export const login = createAsyncThunk("login", async ({ email, password }) => {
  const singIn = await signInWithEmailAndPassword(auth, email, password);
  console.log(singIn.user);
  //return singIn.user;
});
let initialState = {
  userData: {
    name: "",
    email: "",
    password: "",
    longitude: 0,
    latitude: 0,
    locationName: "",
  },
  loading: false,
};
const userSlice = createSlice({
  name: "Authentication",
  initialState,
  reducers: {
    getCoordinates(state, action) {
      state.longitude = action.payload.longitude;
      state.latitude = action.payload.latitude;
    },
    LogOut(state, action) {
      state.name = "";
      state.longitude = 0;
      state.latitude = 0;
      state.locationName = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(singup.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(singup.fulfilled, (state, action) => {
      state.loading = false;

      state.userData.name = action.payload.firstName;
    });
    builder.addCase(singup.rejected, (state, action) => {
      state.loading = false;
    });

    builder.addCase(login.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(login.rejected, (state) => {
      state.loading = false;
    });
  },
});
export default userSlice.reducer;

export const userData = (state) => state.userData.userData;

export const { LogOut } = userSlice.actions;
