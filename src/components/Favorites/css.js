import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
  },
  favorites_container: {
    padding: 50,
    flexGrow: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    [theme.breakpoints.down("sm")]: {
      marginTop: 0,
      alignItems: "stretch",
      flexFlow: "column wrap",

      padding: 0,
    },
    [theme.breakpoints.down("md")]: {
      flexDirection: "row",
      alignItems: "flex-start",
      justifyContent: "space-evenly",

      flexFlow: "column wrap",

      padding: 0,
    },
  },

  card: {
    marginTop: 50,
    [theme.breakpoints.down("sm")]: {
      marginTop: 10,
      padding: 5,
      width: "100%",
    },
  },
}));
