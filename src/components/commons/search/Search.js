import React from "react";
import "./Search.css";

export default function Search({ placeholder, borderBottom }) {
  return (
    <div className="search" style={{ borderBottom }}>
      <img
        src={"./assets/icons/search.svg"}
        alt="search icon"
        style={{ width: 25 }}
      />{" "}
      <input type="text" placeholder={placeholder} />
    </div>
  );
}
