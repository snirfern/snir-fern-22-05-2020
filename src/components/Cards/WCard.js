import React from "react";
import Card from "@material-ui/core/Card";

import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import CardHeader from "@material-ui/core/CardHeader";
import { cTOf } from "../../utils/utils";
import { useStyles, colors } from "./css.js";

export default function WCard(props) {
  const classes = useStyles();

  const {
    icon,
    DateTime,
    Day,

    IconPhrase,
    Name,
    Temperature,
    singleDayForecast,
    flexD,
    method,
  } = props;

  let selectedStyle = colors[2];
  if (icon <= 4) selectedStyle = colors[0];
  else if (icon < 29 && icon > 12) selectedStyle = colors[1];

  return (
    <Card className={classes.root} style={{ backgroundImage: selectedStyle }}>
      {singleDayForecast && (
        <CardHeader
          style={{
            boxShadow: "0",
            display: "flex",
            flexDirection: flexD,
            backgroundImage: selectedStyle,
          }}
          title={Name}
          subheader={
            <>
              <Typography gutterBottom style={{ minWidth: 150, fontSize: 22 }}>
                <span>{method ? Temperature : cTOf(Temperature)}</span>
                {method ? <span> &#8451;</span> : <span> &#8457;</span>}
              </Typography>

              <Typography>{IconPhrase}</Typography>
            </>
          }
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              <img alt={"day type"} src={Day} />
            </Avatar>
          }
        />
      )}

      {!singleDayForecast && (
        <>
          <CardHeader
            className={classes.card_header}
            style={{ display: "flex", flexDirection: "column" }}
            title={DateTime}
            subheader={
              <>
                <Typography
                  gutterBottom
                  style={{ minWidth: 150, fontSize: 22 }}
                >
                  <span>{method ? Temperature : cTOf(Temperature)}</span>
                  {method && <span> &#8451;</span>}
                  {!method && <span> &#8457;</span>}
                </Typography>

                <Typography>{IconPhrase}</Typography>
              </>
            }
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                <img alt={"day type"} src={Day} />
              </Avatar>
            }
          />
        </>
      )}
    </Card>
  );
}
