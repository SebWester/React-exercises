import React from "react";
import Card from "./components/Card";
import ImageSlider from "./components/ImageSlider";
import ToDo from "./components/ToDo";
import "./App.css";

function App() {
  return (
    <div>
      <Card title="Title one" text="First card note" />
      <Card title="Title two" text="Second card note" />
      <Card title="Title three" text="Third card note" />
      <Card title="Title four" text="Fourth card note" />
      <ImageSlider />

      <div>
        <ToDo task="Task One" />
        <ToDo task="Task Two" />
        <ToDo task="Task Three" />
      </div>
    </div>
  );
}

export default App;
