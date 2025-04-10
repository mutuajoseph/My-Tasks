import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { formarPhoneNumber } from './utils'
import { Navbar } from './components/Navbar'
import { TaskInput } from './components/TaskInput'
import { TaskList } from './components/TaskList'
import { Footer } from './components/Footer'


function App() {

  return (
    <>
      <Navbar />
      <TaskInput />
      <TaskList />
      <Footer />
    </>
  )
}

export default App
