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
import Offerings from './Pages/Offerings/Offerings';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import Contact from './Pages/ContactUs/ContactUs';
import MainHome from './Pages/MainHome/MainHome';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage/>,
    children:[
      {
        path : '/',
        element: <MainHome/>
      },
      {
        path : '/home',
        element: <Home/>
      },
      {
        path: '/about-Us',
        element: <AboutUs/>
      },
      {
        path: '/offerings',
        element: <Offerings/>
      },
      {
        path: '/contact-us',
        element: <Contact/>
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