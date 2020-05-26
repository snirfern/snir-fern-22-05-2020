import React, { useState } from "react";
import { connect } from "react-redux";
import { searchCity, getWeatherForCity } from "../../redux/actions";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { useStyles } from "./css.js";
import ArrowDropDown from "@material-ui/icons/ArrowDropDown";

import { CircularProgress } from "@material-ui/core";

let timeout = undefined;
function SearchInput(props) {
  const classes = useStyles();
  const [autoCompleteLoading, setAutoCompleteLoading] = useState(false);
  const [value, setValue] = useState("");

  React.useEffect(() => {
    if (props.options.length > 0) setAutoCompleteLoading(false);
    setTimeout(() => {
      if (props.options.length === 0) setAutoCompleteLoading(false);
    }, 5000);
  }, [props.options]);
  function handleChange(v) {
    let cityKey = props.options.filter(
      (o) =>
        o.LocalizedName.toString().toLowerCase() === v.toString().toLowerCase()
    );

    let key = cityKey !== undefined && cityKey.length > 0 ? cityKey[0].Key : "";
    if (key !== "") {
      props.getWeatherForCity({
        Key: key,
        City: cityKey[0].LocalizedName,
      });
    }
  }

  return (
    <div style={{ paddingTop: 5, paddingBottom: 5 }}>
      <div className={classes.root}>
        <Autocomplete
          disabled={props.errors.length >= 2}
          id="cities_autocomplete"
          style={{ width: 400, backgroundcolor: "white" }}
          options={props.options.map((o) => {
            return o.LocalizedName;
          })}
          value={value}
          onChange={(event, newValue) => {
            if (newValue !== "" && newValue !== null && newValue !== undefined)
              handleChange(newValue);
          }}
          onInputChange={(event, newInputValue) => {
            if (
              newInputValue !== null &&
              newInputValue !== undefined &&
              newInputValue !== ""
            ) {
              clearTimeout(timeout);
              setAutoCompleteLoading(true);

              timeout = setTimeout(() => {
                props.searchCity(newInputValue);
              }, 2000);
            }

            setValue(newInputValue);
          }}
          popupIcon={
            !autoCompleteLoading ? (
              <ArrowDropDown />
            ) : (
              <CircularProgress
                style={{
                  display: "inline-block",
                  verticalAlign: "middle",
                  height: 20,
                  width: 20,
                }}
              />
            )
          }
          renderInput={(params) => (
            <TextField
              placeholder={"Search for city"}
              {...params}
              style={{
                direction: "ltr",
                backgroundColor: "white",
                borderRadius: 5,
              }}
              variant="outlined"
            ></TextField>
          )}
        />
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  options: state.autocomplete_options,
  errors: state.errors,
  loading: state.loading,
});

const mapDispatchToProps = (dispatch) => ({
  searchCity: (city) => dispatch(searchCity(city)),
  getWeatherForCity: (key) => dispatch(getWeatherForCity(key)),
});
export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);
