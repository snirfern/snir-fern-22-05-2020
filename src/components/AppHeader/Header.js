import React, { useState, useContext } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { withRouter } from "react-router-dom";
import SearchInput from "../SearchInput/SearchInput";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import { ThemeContext } from "../Theme/Theme";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { connect } from "react-redux";
import { setTempMethod } from "../../redux/actions";
import { useStyles } from "./css.js";
import Switch from "@material-ui/core/Switch";

function Header(props) {
  const themeState = useContext(ThemeContext);
  const classes = useStyles();
  function navigationHandler(newPath) {
    props.history.push(newPath);
  }
  const [themeIcon, setThemeIcon] = useState(true);
  const [switchState, setSwitchState] = useState(true);
  return (
    <div className={classes.root}>
      <AppBar className={classes.toolbar} position="static">
        <Toolbar variant="dense" className={classes.toolbar}>
          <div variant="h6" className={classes.buttons}>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => navigationHandler("/")}
            >
              Home
            </Button>
            &nbsp;&nbsp;
            <Button
              variant="contained"
              color="secondary"
              onClick={() => navigationHandler("favorites")}
            >
              Favorites
            </Button>
            &nbsp;&nbsp; &nbsp;&nbsp;
            <div className={classes.theme}>
              <WbSunnyIcon
                fontSize="large"
                onClick={() => {
                  setThemeIcon(!themeIcon);
                  themeState.setTheme(themeState.theme.type);
                }}
                style={{ color: themeIcon ? "white" : "black" }}
              />
            </div>
            <div>
              <FormControlLabel
                style={{ width: "100px" }}
                control={
                  <Switch
                    checked={switchState}
                    onChange={() => {
                      props.setTempMethod(!switchState);
                      setSwitchState(!switchState);
                    }}
                  />
                }
                label={
                  <span style={{ fontSize: 16 }}>
                    {!switchState ? " ℃ " : " ℉ "}
                  </span>
                }
              />
            </div>
          </div>

          <div className={classes.typography}>
            <SearchInput />
          </div>
          <div
            variant="h4"
            style={{ fontSize: 30 }}
            className={classes.typography}
          >
            Herolo weather task
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => ({
  setTempMethod: (method) => dispatch(setTempMethod(method)),
});
export default connect(null, mapDispatchToProps)(withRouter(Header));
