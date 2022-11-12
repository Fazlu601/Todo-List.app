import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import TodoPage from './pages/TodoPage'

function App() {


  return (
      <main className="container">
      <Routes>
          <Route path='/' element={<TodoPage/>} />
      </Routes>
      </main>
  )
}

export default App;
