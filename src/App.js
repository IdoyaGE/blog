//import logo from "./logo.svg";
import "./App.css";
import Blog from "./components/Blog";
import { useState, useEffect } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkmode") === true || false
  );

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <div className='App'>
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Light" : "Dark"} Mode
      </button>
      <Blog />
    </div>
  );
}

export default App;
