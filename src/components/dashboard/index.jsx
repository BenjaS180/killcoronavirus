import { useState } from 'react'
import { Link } from "react-router-dom";

function Dashboard() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
        </a>
      </div>
      <h1>Welcome to Dashboard</h1>
      <Link to={`/`}>Go Back!</Link>
    </>
  )
}

export default Dashboard