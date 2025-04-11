import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { formarPhoneNumber } from './utils'
import { Navbar } from './components/Navbar'
import { TaskInput } from './components/TaskInput'
import { TaskList } from './components/TaskList'
import { Footer } from './components/Footer'
import { tasks } from './constants/tasks'


function App() {

  window.localStorage.setItem('tasks', JSON.stringify(tasks))

  return (
    <>
      <Navbar />
      <TaskInput />
      <TaskList tasks={JSON.parse(window.localStorage.getItem('tasks'))} headingText={'My Tasks For Today'}/>
      <Footer />
    </>
  )
}

export default App
