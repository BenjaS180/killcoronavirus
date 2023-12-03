import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Link, Route, Routes } from "react-router-dom";
import './App.css'
import Navbar from './components/navbar';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Welcome to KillCoronavirus</h1>
      <Link to={`/dashboard`}>Go to Dashboard</Link>
    </>
  )
}

export default App;
