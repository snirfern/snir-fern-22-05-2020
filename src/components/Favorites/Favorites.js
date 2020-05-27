import React, { useContext, useState } from "react";
import { connect } from "react-redux";
import { ThemeContext } from "../Theme/Theme";

import { favorites, getWeatherForCity } from "../../redux/actions";
import enums from "../../Enums";
import { lsGetLength } from "../../utils/utils";
import WCard from "../Cards/WCard";
import Errors from "../Errors/Errors";

import { useStyles } from "./css.js";

function Favorites(props) {
  const themeState = useContext(ThemeContext);
  const { history } = props;
  const classes = useStyles();
  const [errors, setErrors] = useState([]);
  const { favorites } = props;
  React.useEffect(() => {
    if (props.errors.length >= 2) setErrors(props.errors);
    setErrors(props.errors);
    let ls = lsGetLength();
    if (props.selectedCity && props.selectedCity.Key) {
      if (favorites.length === 0 && ls > 0 && !props.loading) props.Favorites();
    }
  }, [favorites]);
  if (errors.length >= 2) return <Errors errors={props.errors} />;
  const container_theme = {
    backgroundColor: themeState.theme.primary,
  };
  return (
    <div className={classes.root}>
      <div
        className={[classes.favorites_container]}
        style={{ ...container_theme }}
      >
        {props.favorites &&
          props.favorites.length > 0 &&
          props.favorites.map((F, i) => {
            let Temperature = F.Temperature.Metric.Value;

            let Name = F.City;

            let icon = F.WeatherIcon;
            return (
              <div
                key={"favorites_" + i}
                className={classes.card}
                onClick={() => {
                  if (
                    props.selectedCity.Key &&
                    props.selectedCity.Key !== F.Key
                  )
                    props.getWeatherForCity(F);
                  history.push("/");
                }}
              >
                <WCard
                  method={props.temp}
                  icon={icon}
                  flexD={"row"}
                  Day={enums[icon]}
                  singleDayForecast
                  Name={Name}
                  Temperature={Temperature}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  temp: state.tempMethod,
  loading: state.loading,
  forecast: state.forecast,
  favorites: state.favorites,
  errors: state.errors,
  selectedCity: state.selectedCityWeather,
});

const mapDispatchToProps = (dispatch) => ({
  Favorites: () => dispatch(favorites()),
  getWeatherForCity: (key) => dispatch(getWeatherForCity(key)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
