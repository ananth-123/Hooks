import Home from "./Home";
import Theme from "./Theme";
import "./App.css";
import { createContext, useEffect, useRef, useState } from "react";

export const ThemeContext = createContext();

const App = () => {
  const [theme, setTheme] = useState("#242424");
  const mainRef = useRef();

  useEffect(() => {
    mainRef.current.style.backgroundColor = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <main ref={mainRef}>
        <Home />
        <Theme />
      </main>
    </ThemeContext.Provider>
  );
};

export default App;
