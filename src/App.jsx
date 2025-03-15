import React from "react";
import Card from "./components/Card";
import ImageSlider from "./components/ImageSlider";
import "./App.css";

function App() {
  return (
    <div>
      <Card title="Title one" text="First card note" />
      <Card title="Title two" text="Second card note" />
      <Card title="Title three" text="Third card note" />
      <Card title="Title four" text="Fourth card note" />
      <ImageSlider />
    </div>
  );
}

export default App;
