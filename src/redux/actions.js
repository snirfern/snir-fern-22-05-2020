import axios from "axios";

import { lsGetKeys } from "../utils/utils";
import { api_routes } from "./api_routes";
const SET_AUTOCOMPLETE_OPTIONS = "SET_AUTOCOMPLETE_OPTIONS";
const SET_CURRENT_CITY_WEATHER_REPORT = "SET_CURRENT_CITY_WEATHER_REPORT";
const SET_NEXT_DAYS_FORECAST = "SET_NEXT_DAYS_FORECAST";
const SET_FAVORITES = "SET_FAVORITES";
const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";
const SET_LOADING = "SET_LOADING";
const SET_TEMP_METHOD = "SET_TEMP_METHOD";

export const setTempMethod = (method) => {
  return (dispatch) =>
    dispatch({ type: SET_TEMP_METHOD, payload: method ? 1 : 0 });
};
export const searchCity = (cityName) => {
  return (dispatch) => {
    dispatch({ type: SET_LOADING, payload: "none" });

    axios({
      url: api_routes.autocomplete + cityName,
      method: "GET",
    })
      .then(function (response) {
        dispatch({ type: SET_AUTOCOMPLETE_OPTIONS, payload: response.data });
      })
      .catch(function (error) {
        if (error.toString().indexOf("Network Error") > -1)
          dispatch({
            type: "SET_ERROR",
            payload:
              "Network error occured. Probably API limit.  Please come back in 24 hours.",
          });
      });
  };
};
const getCoordinateByLocation = async () => {
  return new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lng = position.coords.longitude;
      resolve({ lat: lat, lng: lng });
    });
  });
};
export const initPage = () => {
  return async (dispatch) => {
    dispatch({ type: SET_LOADING, payload: "set loading..." });

    let coordinates = await getCoordinateByLocation();
    if (coordinates !== undefined && coordinates.lng && coordinates.lat)
      dispatch(getCityByCoordinates(coordinates));
    else dispatch(getWeatherForCity({ Key: "215793", City: "Tel Aviv" }));
  };
};

const getCityByCoordinates = (coordinates) => {
  return (dispatch) => {
    const { lng, lat } = coordinates;

    axios({
      url: api_routes.cityByLocation + lat + "," + lng,
      method: "GET",
    })
      .then((response) => {
        if (response.data && response.data.Key && response.data.EnglishName)
          dispatch(
            getWeatherForCity({
              Key: response.data.Key,
              City: response.data.EnglishName,
            })
          );
        else
          dispatch(
            getWeatherForCity({
              Key: "215793",
              City: "Tel Aviv",
            })
          );
      })
      .catch((error) => {
        if (error.toString().indexOf("Network Error") > -1)
          dispatch({
            type: "SET_ERROR",
            payload:
              "Network error occured.Probably API limit. Please come back in 24 hours.",
          });
      });
  };
};
export const getWeatherForCity = (cityDat) => {
  return (dispatch) => {
    dispatch({ type: SET_LOADING, payload: "none" });

    axios({
      url: api_routes.currentconditions,
      method: "GET",
    })
      .then(function (response) {
        response.data[0].Key = cityDat.Key;
        response.data[0].City = cityDat.City;
        dispatch({
          type: SET_CURRENT_CITY_WEATHER_REPORT,
          payload: response.data[0],
        });
        dispatch(getNextDaysForecast(dispatch, cityDat.Key));
      })
      .catch(function (error) {
        if (error.toString().indexOf("Network Error") > -1)
          dispatch({
            type: "SET_ERROR",
            payload:
              "Network error occured.Probably API limit. Please come back in 24 hours.",
          });
      });
  };
};

export const favorites = (key, cityName) => {
  return (dispatch) => {
    dispatch({ type: SET_LOADING, payload: "none" });

    let keys = lsGetKeys();
    if (keys === undefined || keys.length === 0) {
      dispatch({ type: SET_FAVORITES, payload: [] });
      return;
    }

    const promises = [];
    keys.forEach((key) =>
      promises.push(
        axios.get(
          "https://dataservice.accuweather.com/currentconditions/v1/" +
            key.Key +
            "?apikey=" +
            process.env.REACT_APP_API
        )
      )
    );
    axios
      .all(promises)
      .then((responses) => {
        let resArr = [...responses.map((r) => r.data)];
        let arr = [];
        for (let r = 0; r < resArr.length; r++) {
          arr = [...arr, ...resArr[r]];
        }

        for (let r = 0; r < arr.length; r++) {
          arr[r].Key = keys[r].Key;
          arr[r].City = keys[r].City;
        }

        dispatch({ type: SET_FAVORITES, payload: arr });
      })
      .catch((e) =>
        dispatch({
          type: "ERROR",
          payload: "Error encountered in Favorites API. Please refresh",
        })
      );
  };
};
export const removeFromFavorites = (Key) => {
  return (dispatch) => dispatch({ type: REMOVE_FROM_FAVORITES, payload: Key });
};
export const getNextDaysForecast = (dispatch, Key) => {
  dispatch({ type: SET_LOADING, payload: "none" });

  axios({
    url: api_routes.fivedays + Key + "?apikey=" + process.env.REACT_APP_API,
    method: "GET",
  })
    .then(function (response) {
      dispatch({
        type: SET_NEXT_DAYS_FORECAST,
        payload:
          response.data && response.data.DailyForecasts
            ? response.data.DailyForecasts
            : [],
      });
    })
    .catch(function (error) {
      if (error.toString().indexOf("Network Error") > -1)
        dispatch({
          type: "SET_ERROR",
          payload:
            "Network error occured.Probably API limit. Please come back in 24 hours.",
        });
    });
};
