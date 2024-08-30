import React from 'react';
import  ReactDOM  from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import TrackOrder from './components/TrackOrder';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/track/:trackingNumber",
    element: <TrackOrder />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
