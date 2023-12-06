import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import "./index.css";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
 <div className=" max-w-screen-2xl mx-auto overflow-x-hidden">
 <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
   </div>
)
