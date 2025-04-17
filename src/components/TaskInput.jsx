import React from "react";

export const TaskInput = ({submitTask, setNewTask, setTaskTime}) => {

  const handleTaskInput = (e) => {
    setNewTask(e.target.value)
  }

  const handleTaskTimeInput = (e) => {
    setTaskTime(e.target.value)
  }

  return (
    <div className="task--input">
      <input
        className="input--control"
        type="text"
        placeholder="Add a new task"
        onChange={handleTaskInput}
      />
      <input className="time-input" type="time" onChange={handleTaskTimeInput} />
      <button onClick={submitTask}>+</button>
    </div>
  );
};
