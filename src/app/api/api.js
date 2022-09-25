import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from "@firebase/firestore";
import { userActions } from "../../modules/user/actions";

export const FIRE_BASE_API_KEY = process.env.REACT_APP_FIRE_BASE_API_KEY;
export const GOOGLE_MAPS_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

// Initialize Firebase
const firebaseConfig = {
  apiKey: FIRE_BASE_API_KEY,
  authDomain: "hotel-booking-60449.firebaseapp.com",
  projectId: "hotel-booking-60449",
  storageBucket: "hotel-booking-60449.appspot.com",
  messagingSenderId: "882440171027",
  appId: "1:882440171027:web:4493ba1e0ea46bf52959e6",
  measurementId: "G-SQ274B88BW",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firebaseDatabase = getFirestore(app);

const firebaseCollectionReverences = (folder) => {
  return collection(firebaseDatabase, folder);
};

export const apiCallWrapper = (type, url) => {
  return async function (dispatch) {
    await getDocs(firebaseCollectionReverences(url))
      .then((response) => {
        dispatch({
          type: type,
          payload: response.docs.map((doc) => ({ ...doc.data(), id: doc.id })),
        });
      })
      .catch((response) => {
        console.log(response);
        dispatch({
          type: userActions.SET_ERROR,
          payload: response,
        });
      });
  };
};

export const collectionList = {
  getHotelsList: "hotels",
};
