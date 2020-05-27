import React from "react";
import "./App.css";
import Header from "./components/AppHeader/Header";
import Favorites from "./components/Favorites/Favorites";
import Main from "./components/Main/Main";
import { connect } from "react-redux";
import { initPage } from "./redux/actions";
import { Route, HashRouter as Router } from "react-router-dom";

function App(props) {
  const { selectedCity, errors, loading, init } = props;

  React.useEffect(() => {
    if (selectedCity === undefined && errors.length === 0 && !loading) {
      init();
    }
  }, [selectedCity, errors, loading, init]);
  return (
    <div className="App">
      <Router>
        <Header />
        <Route exact path="/" component={(props) => <Main {...props} />} />
        <Route
          path="/favorites"
          component={(props) => <Favorites {...props} />}
        />
      </Router>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
