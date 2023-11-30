import { useState } from 'react'
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

function Dashboard() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
        </a>
      </div>
      <h1>Welcome to Dashboard</h1>
      <Link to={`/`}><Button variant="contained">Go Back</Button></Link>
    </>
  )
}

export default Dashboard