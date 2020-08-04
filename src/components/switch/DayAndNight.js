import React, { useState } from "react";
import "./style.css";

export const DayAndNight = () => {
  const [checked, setChecked] = useState(true);

  const handleChecked = (e) => {
    setChecked(e.target.value);
  };

  return (
    <div className="toggle">
      <input
        className="toggle-input"
        type="checkbox"
        value={checked}
        onChange={handleChecked}
      />
      <div className="toggle-bg"></div>
      <div className="toggle-switch">
        <div className="toggle-switch-figure"></div>
        <div className="toggle-switch-figureAlt"></div>
      </div>
    </div>
  );
};
