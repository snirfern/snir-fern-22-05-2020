import React, { useContext } from "react";
import "./Spinner.css";
import { ThemeContext } from "../Theme/Theme";
export default function Spinner() {
  const themeState = useContext(ThemeContext);

  return (
    <div className={themeState.theme.type === "dark" ? "loader2" : "loader"}>
      Loading...
    </div>
  );
}
