import * as axios from "axios";

export const authApi = {
  url: process.env.REACT_APP_AUTH_URL,
  key: process.env.REACT_APP_FIREBASE_API_KEY,

  signIn(signInData) {
    return axios
      .post(`${this.url}signInWithPassword?key=${this.key}`, signInData)
      .then((response) => {
        return response.data;
      });
  },

  signUp(signUpData) {
    return axios
      .post(`${this.url}signUp?key=${this.key}`, signUpData)
      .then((response) => {
        return response.data;
      });
  },

  verifyEmail(idToken) {
    return axios
      .post(`${this.url}sendOobCode?key=${this.key}`, {
        requestType: "VERIFY_EMAIL",
        idToken,
      })
      .then((response) => {
        return response.data;
      });
  },
};
