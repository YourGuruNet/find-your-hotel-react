import axios from "axios";

export const GOOGLE_MAPS_API_KEY = "AIzaSyCcVNv09X0Cp_0OLl6iDbnh-bZUTSDfx8o";
export const apiUrl = "https://localhost:5001/api";

export const HotelsApiCall = {
  getHotelsList: axios.get(`${apiUrl}/Hotels`),
};
