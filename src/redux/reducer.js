const initialState = {
  autocomplete_options: [],
  selectedCityWeather: undefined,
  forecast: [],
  favorites: [],
  loading: false,
  errors: [],
  currentError: undefined,
  tempMethod: true,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LOADING": {
      return { ...state, loading: true };
    }
    case "SET_ERROR": {
      const error = action.payload;

      return {
        ...state,
        loading: false,
        errors: [...state.errors, error],
      };
    }
    case "REMOVE_FROM_FAVORITES": {
      const Key = action.payload;
      return {
        ...state,
        loading: false,
        favorites: [...state.favorites].filter((f) => {
          return f.Key !== Key;
        }),
      };
    }

    case "SET_FAVORITES": {
      return {
        ...state,
        loading: false,
        favorites: [...state.favorites, ...action.payload],
      };
    }
    case "SET_AUTOCOMPLETE_OPTIONS": {
      const newOptions = action.payload;
      return {
        ...state,
        loading: false,
        autocomplete_options: [...newOptions],
      };
    }
    case "SET_CURRENT_CITY_WEATHER_REPORT": {
      const wReport = action.payload;
      return {
        ...state,
        loading: false,
        selectedCityWeather: { ...wReport },
      };
    }
    case "SET_NEXT_DAYS_FORECAST": {
      const aheadForecast = action.payload;
      return { ...state, loading: false, forecast: aheadForecast };
    }
    case "SET_TEMP_METHOD": {
      const method = action.payload;
      return { ...state, tempMethod: Boolean(method) };
    }
    default:
      return state;
  }
};

export default reducer;
