import { makeStyles } from "@material-ui/core/styles";
export const colors = [
  "radial-gradient(#FFE79B,#FFECB3,#FFECB3)",
  "radial-gradient(#B1E9FF,#CFF2FF,#B2E9FF)",
  "radial-gradient(#D6E3E9,#DFEBEF,#D6E3E9)",
];
export const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
    transition: "all 0.3s cubic-bezier(.25,.8,.25,1)",
    "&:hover": {
      boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
    },
  },

  media: {
    height: 140,
  },
  avatar: {
    width: 100,
    height: 50,
    borderRadius: 0,
    backgroundColor: "transparent",
  },
  card_content: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  card_header: {
    //backgroundImage: "radial-gradient(#FFE79B,#FFECB3,#FFECB3)",
  },
}));
