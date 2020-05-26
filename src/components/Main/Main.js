import React, { useContext, useState } from "react";
import { connect } from "react-redux";
import { initPage } from "../../redux/actions";
import Content from "../Content/Content";
import Errors from "../Errors/Errors";
import { ThemeContext } from "../Theme/Theme";
import Spinner from "../Spinner/Spinner";
function Main(props) {
  const [errors, setErrors] = useState([]);
  const themeState = useContext(ThemeContext);
  const main_container = {
    backgroundColor: themeState.theme.primary,
    paddingTop: 5,
    flexGrow: 1,

    paddingLeft: 100,
    paddingRight: 100,

    textAlign: "center",
  };
  React.useEffect(() => {
    if (props.errors.length >= 2) setErrors(props.errors);
  }, [props]);
  if (props.loading)
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: themeState.theme.primary,
        }}
      >
        <Spinner />
      </div>
    );

  if (errors.length >= 2) return <Errors errors={props.errors} />;
  return (
    <div style={main_container}>
      <div
        style={{
          padding: "50 150",
        }}
      >
        {<Content />}
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  selectedCity: state.selectedCityWeather,
  errors: state.errors,
  loading: state.loading,
  forecast: state.forecast,
});

const mapDispatchToProps = (dispatch) => ({
  init: () => dispatch(initPage()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
