import { useState } from "react";
import "./ToggleSwitch.css";
import { IoIosSwitch } from "react-icons/io";

export const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);
  const handleToggleSwitch = () => {
    setIsOn(!isOn);
  };
  const cheakIsOn = isOn ? "on" : "off";
  return (
    <>
    <h1 style={{color: "black", textAlign: "center" }}>Toggle Switch <IoIosSwitch  style={{color: "orange", textAlign: "center" }}/></h1>
    <div
      className="toggle-switch"
      style={{ backgroundColor: isOn ? "#4caf50" : "#f44336" }}
      onClick={handleToggleSwitch}
    >
      <div className={`switch ${cheakIsOn}`}>
        <span className="switch-state">{cheakIsOn}</span>
      </div>
    </div>
    </>
  );
};
