import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    width: 400,
    display: "flex",
    alignItems: "center",
    borderRadius: "10px!important",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {},
  divider: {
    height: 22,
    margin: 4,
  },
}));
