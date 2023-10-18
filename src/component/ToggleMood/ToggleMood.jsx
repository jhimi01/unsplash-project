import React, { useEffect, useState } from "react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import "./ToggleMood.css";

const ToggleMood = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const htmlElement = document.querySelector("html");
    if (htmlElement) {
      htmlElement.setAttribute("data-theme", theme);
    }
  }, [theme]);

  const handleToggle = () => {
    setTheme(theme === "light" ? "black" : "light");
    // console.log(checked)
  };

  return (
    <>
      <p>{theme === "light" ? "Dark Mood" : "Light Mood"}</p>

      <div className="checkbox-wrapper-3">
        <input
          type="checkbox"
          id="cbx-3"
        //   checked={theme === "black"}
          onChange={handleToggle}
          className="hidden"
        />
        <label htmlFor="cbx-3" onChange={handleToggle} className="toggle" checked={theme === "black"}>
          <span></span>
        </label>
      </div>
      <button className="text-3xl" onClick={handleToggle}>
        {theme === "black" ? <BsFillMoonFill /> : <BsFillSunFill />}
      </button>
    </>
  );
};

export default ToggleMood;
