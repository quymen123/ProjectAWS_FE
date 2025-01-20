import User from "@/interfaces/User";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { deleteCookie, setCookie } from "cookies-next";

export interface UserState {
  user?: User;
  isLoggedIn?: boolean;
  accessToken?: string;
  loading?: boolean
}

export interface authState {
  isLoggedIn: boolean;
  accessToken: string;
}

const initialState: UserState = {
  user: {},
  isLoggedIn: false,
  accessToken: "",
  loading: false
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UserState>) => {
      const { accessToken, user } = action.payload;
      state.accessToken = accessToken;
      state.isLoggedIn = true;
      state.user = user

      setCookie("auth", true)
    },

    logout: (state) => {
      state.user = {};
      state.accessToken = "";
      state.isLoggedIn = false;

      deleteCookie("auth")
    },

    startLoading: (state) => {
      state.loading = true
    },

    endLoading: (state) => {
      state.loading = false
    },
  },
});

export const {
  login,
  logout,
  startLoading,
  endLoading
} = authSlice.actions;
export const authReducer = authSlice.reducer;
