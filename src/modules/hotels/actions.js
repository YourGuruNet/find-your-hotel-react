import { apiCallWrapper, collectionList } from "../../app/api/api";
export const hotelsActions = {
  GET_HOTELS_LIST: "GET_HOTELS_LIST",
};

export const getHotelList = () => {
  return apiCallWrapper(
    hotelsActions.GET_HOTELS_LIST,
    collectionList.getHotelsList
  );
};
