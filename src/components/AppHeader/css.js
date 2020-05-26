import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  buttons: {
    display: "flex",
    justifyContent: "space-between",
    width: 350,
  },
  theme: {
    verticalAlign: "middle",
    padding: 5,
    display: "inline-block",
  },
  typography: {
    fontFamily: "Shadows Into Light",
    [theme.breakpoints.down("sm")]: {
      padding: 10,
    },
  },
  root: {
    display: "flex",
    justifyContent: "space-evenly",
    padding: 0,
  },
  toolbar: {
    display: "flex",
    padding: 10,
    justifyContent: "space-between",
    direction: "rtl",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",

      justifyContent: "space-evenly",
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
}));
