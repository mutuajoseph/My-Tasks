import { useEffect, useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { TaskInput } from "./components/TaskInput";
import { TaskList } from "./components/TaskList";
import { Footer } from "./components/Footer";
import { fetchTasks, addTask, deleteTask, editTask } from "./api";

function App() {
  const [myTasks, setMyTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [taskTime, setTaskTime] = useState("");

  // create a function that will load tasks from the api
  useEffect(() => {
    fetchTasks().then((res) => {
      if (res.length > 0) {
        setMyTasks(res);
      }
    });
  }, []);

  const handleTaskSubmission = () => {
    let taskPayload = {
      id: myTasks.length + 1,
      time: taskTime,
      title: newTask,
      status: "pending",
    };

    addTask(taskPayload).then((res) => {
      console.log("Task being added", res);
      if (res) {
        setMyTasks((prevTasks) => [...prevTasks, res]);
        setNewTask("");
        setTaskTime("");
      }
    });
  };

  const handleTaskEdit = (task) => {
    
    if (task.id) {
      editTask(task).then((res) => {
        console.log("Task Edit res", res)
      })
    }
  };

  const handleTaskDelete = (task) => {
    // Implement delete task functionality
    if (task.id) {
      deleteTask(task.id).then((res) => {
        console.log("Task being deleted", res)
      }).catch((err) => {
        console.log("Error deleting task", err)
      })
    }
  };

  return (
    <>
      <Navbar />
      <TaskInput
        submitTask={handleTaskSubmission}
        setNewTask={setNewTask}
        setTaskTime={setTaskTime}
      />
      <TaskList
        tasks={myTasks}
        headingText={"My Tasks For Today"}
        handleTaskEdit={handleTaskEdit}
        handleTaskDelete={handleTaskDelete}
      />
      <Footer />
    </>
  );
}

export default App;
