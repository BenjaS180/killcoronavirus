import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import Dashboard from './components/dashboard'
import Manage from './components/manage';
import Login from './components/login';
import Info from './components/info';
import Medicamentos from './components/medicamentos';
import Contact from './components/contact';
import './index.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Patient from './components/patient';
import Records from './components/records';
import Ficha from './components/ficha'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/dashboard",
    element: <Dashboard/>,
  },
  {
    path: "/generar-ficha",
    element: <Ficha/>,
  },
  {
    path: "/manage",
    element: <Manage/>,
  },
  {
    path: "/medicamentos",
    element: <Medicamentos/>,
  },
  {
    path: "/patient",
    element: <Patient/>,
  },
  {
    path: "/records",
    element: <Records/>,
  },
  {
    path: "/nosotros",
    element: <Info/>,
  },
  {
    path: "/contacto",
    element: <Contact/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
