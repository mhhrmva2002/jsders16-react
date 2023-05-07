import React, { useState } from "react";
function ColorToggle() {
  const [bgColor, setBgColor] = useState("gray");

  const toggleColor = () => {
    const newColor = bgColor === "gray" ? "yellow" : "gray";
    setBgColor(newColor);
  };
  return (
    <>
      <div style={{width: "100px",height: "100px",backgroundColor: bgColor}}></div>
      <button onClick={toggleColor}>click</button>
    </>
  );
}

export default ColorToggle;
