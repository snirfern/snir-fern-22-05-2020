import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";

import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";
import "./ContentBody.css";

const useStyles = makeStyles((theme) => ({
  forecast: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
}));
export default function ContentBody(props) {
  const classes = useStyles();
  const forecast = { props };
  return (
    <div className={classes.forecast}>
      {props.forecast.map((f) => (
        <div className={forecast_item} style={{ width: "18%", marginTop: 10 }}>
          {f}
        </div>
      ))}
    </div>
  );
}
