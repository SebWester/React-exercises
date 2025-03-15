import React from "react";

function Note({ showText, text }) {
  // card-note || card-hide
  let toggleClass = showText ? "card-note" : "card-hide";

  return <p className={toggleClass}>{text}</p>;
}

export default Note;
