import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import "./index.css";
import { Analytics } from '@vercel/analytics/react';
import OurTeams from './components/OurTeams/OurTeams';
import Home from './Pages/Home/Home';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path : '/',
        element: <Home/>
      },
      {
        path: '/about-Us',
        element: <OurTeams/>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
 <div className=" max-w-screen-2xl  mx-auto overflow-x-hidden">
 <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  <Analytics/>
   </div>
)
