import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  [theme.breakpoints.down("sm")]: {
    padding: 0,
    flexDirection: "column",
  },
}));

export const classes = useStyles();
