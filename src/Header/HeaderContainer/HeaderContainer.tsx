import { use } from "react";
import NavBar from "../NavBar/NavBar";
import classes from "./HeaderContainer.module.css";
import { ThemeContext } from "../../contexts/Theme/ThemeContext";
import { BackgroundContext } from "../../contexts/Background/BackgroundContext";

export default function HeaderContainer() {
  const { theme, toggleTheme } = use(ThemeContext);
  const { three, toggleThree } = use(BackgroundContext);
  return (
    <div className={classes[theme]}>
      <div>Sang Won Cho</div>
      <NavBar />
      <div className={classes.buttons}>
        <button onClick={toggleTheme}>{String(theme)}</button>
        <button onClick={toggleThree}>{String(three)}</button>
      </div>
    </div>
  );
}
