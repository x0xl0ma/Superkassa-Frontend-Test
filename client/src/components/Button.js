import React from "react";

import "./button.css";

const Button = ({ handler, isButtonActive }) => {
  const buttonStyles = isButtonActive
    ? "myButton myButtonOn"
    : "myButton myButtonOff";

  const text = isButtonActive ? "ON" : "OFF";

  return (
    <button className={buttonStyles} onClick={handler}>
      <div className="buttonText">{text}</div>
    </button>
  );
};

export default Button;
