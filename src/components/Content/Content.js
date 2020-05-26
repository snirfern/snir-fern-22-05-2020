import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ContentHeader from "../Content/ContentHeader";
import { connect } from "react-redux";
import enums from "../../Enums";
import WCard from "../Cards/WCard";
function Content(props) {
  const classes = useStyles();
  const [method, setMethod] = React.useState(props.temp);
  React.useEffect(() => {
    if (props.temp !== method) setMethod(props.temp);
  }, [props, method]);

  return (
    <div className={classes.content_container}>
      <div>
        <ContentHeader />
      </div>
      <div style={{ textAlign: "center", padding: 70, fontSize: 20 }}>
        {props.selectedCityForecast
          ? props.selectedCityForecast.WeatherText
          : null}
      </div>
      <div className={classes.sub_container}>
        {props.forecast !== undefined &&
          props.forecast.length > 0 &&
          props.forecast.map((item, i) => (
            <div style={{ marginTop: 20 }} key={"content_child_" + i}>
              <WCard
                method={method}
                Temperature={item.Temperature.Minimum.Value}
                maxTemp={item.Temperature.Maximum.Value}
                minTemp={item.Temperature.Minimum.Value}
                Day={enums[item.Day.Icon]}
                icon={item.Day.Icon}
                IconPhrase={item.Day.IconPhrase}
                DateTime={new Date(item.Date.toString()).toLocaleString(
                  "en-us",
                  {
                    weekday: "long",
                  }
                )}
              />
            </div>
          ))}
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  content_container: {
    paddingTop: 100,
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "stretch",
      padding: 0,
    },
  },
  sub_container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",

    justifyContent: "space-evenly",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "stretch",
    },
  },
}));
const mapStateToProps = (state) => ({
  temp: state.tempMethod,
  forecast: state.forecast,
  selectedCityForecast: state.selectedCityWeather,
});

export default connect(mapStateToProps)(Content);
