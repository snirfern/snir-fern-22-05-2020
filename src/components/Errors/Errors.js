import React from "react";
import { useStyles } from "./css.js";
export default function Errors(props) {
  const classes = useStyles();
  const { errors } = props;

  return (
    <div className={classes.root}>
      {errors.map((err, i) => {
        return (
          <div key={"Error_" + i} className={classes.error}>
            {err}
          </div>
        );
      })}
    </div>
  );
}
