import React from "react";

function Title({ onClick, title }) {
  return (
    <button onClick={onClick}>
      <h2>{title}</h2>
    </button>
  );
}

export default Title;
