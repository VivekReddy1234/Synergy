import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'

import Home from './Pages/Home'
import ExpensePage from './Pages/ExpensePage'


import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,   // 👈 Sidebar stays here
    children: [
      { path: "/", element: <Home /> },
      { path: "/expenses", element: <ExpensePage /> },
      // { path: "/habits", element: <Habits /> },
    ],
  },
]);


function App() {


  return <RouterProvider router={router} />;
}

export default App
