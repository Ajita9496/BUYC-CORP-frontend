import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
  },
  content: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    fontWeight: 500,
    fontSize: 22,
    opacity: "40%",
  },
}));

const DividerWithText = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <span className={classes.content}>{children}</span>
    </div>
  );
};
export default DividerWithText;
