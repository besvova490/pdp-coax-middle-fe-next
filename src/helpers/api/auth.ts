/* eslint-disable @typescript-eslint/no-explicit-any */
import fetch from "./customFetch";
import Cookies from "universal-cookie";
import jwtDecode from "jwt-decode";

//types
import { InterfaceLoginData, InterfaceRegisterData } from "src/types/api/auth";

const auth = {
  login: async (data: InterfaceLoginData) => {
    const cookies = new Cookies();

    try {
      const result = await fetch({
        url: "/auth",
        method: "POST",
        data
      });

      const decodedAccessToken = jwtDecode(result.accessToken);
      const accessTokenExpTime = decodedAccessToken && new Date((decodedAccessToken as Record<string, any>).exp * 1000);
      cookies.set("accessToken", result.accessToken, { expires: (accessTokenExpTime as Date), path: "/" });
      cookies.set("refreshToken", result.refreshToken, { path: "/" });

      return result;
    } catch (err: any) {
      if (err.data) {
        throw err.data;
      }
      throw err;
    }
  },

  register: async (data: InterfaceRegisterData) => {
    try {
      const result = await fetch({
        url: "/auth/register",
        method: "POST",
        data
      });

      return result;
    } catch (err: any) {
      if (err.data) {
        throw err.data;
      }
      throw err;
    }
  }
};

export default auth;
