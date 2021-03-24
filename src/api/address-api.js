import * as axios from "axios";

export const addressApi = {
  url: process.env.REACT_APP_ADDRESS_URL,

  getAddressByCoordinates(lat, lon) {
    return axios
      .get(
        `${this.url}/reverse?format=json&lat=${lat}&lon=${lon}&zoom=18&addressdetails=1`
      )
      .then((response) => {
        return response.data.address;
      });
  },
};
