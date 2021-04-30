import React, { useState } from "react";
import Taskcomp from "./taskcomp";

function App() {
  const [task, setTask] = useState("");
  const [taskArray, setTaskArray] = useState([]);

  function handleChange(event) {
    const newTask = event.target.value;

    setTask(newTask);
  }

  function handleSubmit() {
    setTaskArray((prevValue) => {
      return [...prevValue, task];
    });
    setTask("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={task} />

        <button onClick={handleSubmit}>
          <span>Add</span>
        </button>
      </div>

      <div>
        <ul>
          {taskArray.map((taskItem) => (
            <Taskcomp text={taskItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
