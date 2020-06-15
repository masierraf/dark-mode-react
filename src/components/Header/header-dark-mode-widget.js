import React, { useRef } from "react";
import "./dark-mode.css";

export default function HeaderWidget({ darkMode, setDarkMode }) {
  const ref = useRef(null);

  function handleChange(event) {
    setDarkMode(ref.current.checked);
  }

  return (
    <div className="dark-mode">
      <p className="dark-mode-tittle">Dark Mode</p>
      <input
        type="checkbox"
        onChange={handleChange}
        ref={ref}
        checked={darkMode}
        className="checkbox"
        id="checkbox"
      />
      <label className="switch" htmlFor="checkbox">
        {" "}
      </label>
    </div>
  );
}
