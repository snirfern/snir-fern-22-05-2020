import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import StarIcon from "@material-ui/icons/Star";
import enums from "../../Enums";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import WCard from "../Cards/WCard";
import { removeFromFavorites } from "../../redux/actions";
import {
  lsSetItem,
  lsRemoveItem,
  lsGetLength,
  lsGetItem,
} from "../../utils/utils";
function ContentHeader(props) {
  const classes = useStyles();
  const [isSaved, setIsSaved] = useState(false);
  let key = props.currentWeather && props.currentWeather.Key;
  React.useEffect(() => {
    let ls = lsGetLength();
    let doesExist = lsGetItem(key);
    if (ls !== undefined && ls !== null && ls > 0 && doesExist.length > 0) {
      setIsSaved(true);
    }
  }, [key, props.currentWeather]);
  let Temperature =
    props.currentWeather && props.currentWeather.Temperature
      ? props.currentWeather.Temperature.Metric.Value
      : null;
  let Name =
    props.currentWeather && props.currentWeather.City
      ? props.currentWeather.City
      : null;

  let icon = props.currentWeather && props.currentWeather.WeatherIcon;
  return (
    <div className={classes.content_header}>
      <div className={classes.left_head}>
        <WCard
          method={props.temp}
          flexD={"row"}
          Day={enums[icon]}
          singleDayForecast
          Name={Name}
          Temperature={Temperature}
          icon={icon}
        />
      </div>
      <div className={classes.right_head}>
        {!isSaved && (
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            startIcon={
              <StarIcon style={{ color: isSaved > 0 ? "yellow" : "white" }} />
            }
            onClick={() => {
              if (key !== null) lsSetItem(key, props.currentWeather.City);
              setIsSaved(!isSaved);
            }}
          >
            Add to Favorites
          </Button>
        )}
        {isSaved && (
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            startIcon={
              <StarIcon style={{ color: isSaved > 0 ? "yellow" : "white" }} />
            }
            onClick={() => {
              lsRemoveItem(key);
              props.removeFromFavorites(key);
              setIsSaved(!isSaved);
            }}
          >
            Remove from Favorites
          </Button>
        )}
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  content_header: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    paddingLeft: 90,
    paddingRight: 90,
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      padding: 0,
      display: "flex",
      flexDirection: "column",
      marginTop: 20,
      justifyContent: "space-between",
      alignItems: "center",
    },
  },

  left_head: {
    display: "flex",
    flexDirection: "row",
    minHeight: 100,
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      alignItems: "stretch",
    },
  },
  right_head: {},
  button: {
    textTransform: "none",
  },
  icon: { height: 100 },
}));
const mapStateToProps = (state) => ({
  temp: state.tempMethod,
  currentWeather: state.selectedCityWeather,
  favorites: state.favorites,
});

const mapDispatchToProps = (dispatch) => ({
  removeFromFavorites: (Key) => dispatch(removeFromFavorites(Key)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ContentHeader);
