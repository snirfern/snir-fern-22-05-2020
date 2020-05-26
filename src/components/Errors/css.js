import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    top: "50%",
    right: "50%",
    with: "50%",
    height: "50%",
    transform: "translate(50%,-50%)",
  },
  error: {
    padding: 20,
    marginTop: 50,
    border: "1px solid #c51162",
    boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
    transition: "all 0.3s cubic-bezier(.25,.8,.25,1)",
    "&:hover": {
      boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
    },
  },
}));
