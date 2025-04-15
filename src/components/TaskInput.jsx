import React from "react";

export const TaskInput = () => {
  const [newTask, setNewTask] = React.useState("");

  const handleTaskInput = (e) => {
    setNewTask(e.target.value)
  }

  const handleTaskSubmission = () => {
    let taskPayload = {
      id: JSON.parse(window.localStorage.getItem('tasks').length + 1),
      title: newTask,
      status: "pending",
    };

    let tasks = JSON.parse(window.localStorage.getItem('tasks'));
    tasks.push(taskPayload)
    window.localStorage.setItem('tasks', JSON.stringify(tasks))
    setNewTask('')
  };

  return (
    <div className="task--input">
      <input
        className="input--control"
        type="text"
        placeholder="Add a new task"
        onChange={handleTaskInput}
      />
      <button onClick={handleTaskSubmission}>+</button>
    </div>
  );
};
