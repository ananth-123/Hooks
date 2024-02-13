import { useCallback, useContext } from "react";
import { ThemeContext } from "./App";

const Theme = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const changeTheme = useCallback(
    (e) => {
      setTheme(() => {
        return e.target.value;
      });
    },
    [theme]
  );
  return (
    <div>
      <input type="color" value={theme} onChange={changeTheme} />
      <button onClick={changeTheme}>Reset Color</button>
    </div>
  );
};

export default Theme;
