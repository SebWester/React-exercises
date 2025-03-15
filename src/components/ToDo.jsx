import React, { useState } from "react";
import "./ToDo.css";

function ToDo({ task }) {
  const [taskDone, setTaskDone] = useState(false);

  function checkTask() {
    setTaskDone((prevVal) => !prevVal);
  }

  let isTaskDone = taskDone ? "task-done" : "task-not-done";

  return (
    <div className="todo-item">
      <input type="checkbox" onChange={checkTask} />
      <p className={isTaskDone}>{task}</p>
    </div>
  );
}

export default ToDo;
