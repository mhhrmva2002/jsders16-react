import React, { useState } from "react";
import Button from '@mui/material/Button';
function ColorToggle() {
  const [bgColor, setBgColor] = useState("gray");

  const toggleColor = () => {
    const newColor = bgColor === "gray" ? "yellow" : "gray";
    setBgColor(newColor);
  };
  return (
    <>
      <div style={{width: "100px",height: "100px",backgroundColor: bgColor}}></div>
      <Button variant="contained" onClick={toggleColor}>click</Button>
    </>
  );
}

export default ColorToggle;
