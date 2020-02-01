import React from "react";

export default function Circle({ circleProps }) {
  const { bgColor, text, width, fontSize } = circleProps;

  return (
    <div
      className="circle"
      style={{
        backgroundColor: bgColor,
        width: width,
        height: width,
        color: "#fff",
        borderRadius: "50%",
        textAlign: "center",
        fontSize: fontSize
      }}
    >
      {text}
    </div>
  );
}
