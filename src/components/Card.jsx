import React, { useState } from "react";
import Title from "./Title";
import Note from "./Note";
import "./Card.css";

function Card({ title, text }) {
  const [display, setDisplay] = useState(false);

  function toggleDisplay() {
    setDisplay((prevDisplay) => !prevDisplay);
  }

  return (
    <div className="card">
      <Title onClick={toggleDisplay} title={title} />
      <Note showText={display} text={text} />
    </div>
  );
}

export default Card;
