import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
 } from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import Appliedjobs from './components/AppliedJobs/Appliedjobs';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Jobdetails from './components/Jobdetails/Jobdetails';

 const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
      element: <Home></Home>
      },
      {
        path: '/applied',
        element: <Appliedjobs></Appliedjobs>
      },
      {
        path: '/job/:id',
        element:<Jobdetails></Jobdetails>
      }

    ]
      }
    ]
  
 )


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
