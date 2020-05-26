export const api_routes = {
  autocomplete:
    "http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=" +
    process.env.REACT_APP_API +
    "&q=",
  currentconditions:
    "http://dataservice.accuweather.com/currentconditions/v1/213181?apikey=" +
    process.env.REACT_APP_API,
  fivedays: "http://dataservice.accuweather.com/forecasts/v1/daily/5day/",
  cityByLocation:
    "http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=" +
    process.env.REACT_APP_API +
    "&q=",
};
