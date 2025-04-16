import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { formarPhoneNumber } from './utils'
import { Navbar } from './components/Navbar'
import { TaskInput } from './components/TaskInput'
import { TaskList } from './components/TaskList'
import { Footer } from './components/Footer'
import { fetchTasks } from './utils'
import { set } from 'lodash'


function App() {
  const [myTasks, setMyTasks] = useState([])
  const [newTask, setNewTask] = useState("");
  const [taskTime, setTaskTime] = useState("");

  // create a function that will load tasks from the localstorage
  useEffect(() => {
    let tasks = fetchTasks()
    console.log(tasks)
    if (tasks.length === 0) {
      console.log("No tasks found in local storage");
    } else {
      console.log("Tasks found in local storage");
      setMyTasks(tasks)
    }
  }, [])

  const handleTaskSubmission = () => {
    let taskPayload = {
      id: JSON.parse(window.localStorage.getItem('tasks').length + 1),
      time: taskTime,
      title: newTask,
      status: "pending",
    };

    let tasks = JSON.parse(window.localStorage.getItem('tasks'));
    tasks.push(taskPayload)
    window.localStorage.setItem('tasks', JSON.stringify(tasks))
    setNewTask('')
    console.log("Task added successfully");
    console.log('we need to fetch the tasks again');
    
    let tasks2 = fetchTasks()
    setMyTasks(tasks2)
    console.log(tasks2)
    console.log("Tasks being fetched", tasks2)
  };

  return (
    <>
      <Navbar />
      <TaskInput submitTask={handleTaskSubmission} setNewTask={setNewTask} setTaskTime={setTaskTime} />
      <TaskList tasks={myTasks} headingText={'My Tasks For Today'}/>
      <Footer />
    </>
  )
}

export default App
