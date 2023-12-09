import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import "./index.css";
import { Analytics } from '@vercel/analytics/react';
import Home from './Pages/Home/Home';
import AboutUs from './Pages/AboutUs/AboutUs';


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
        element: <AboutUs/>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
 <div className="overflow-x-hidden">
 <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,

  <Analytics/>
   </div>
)