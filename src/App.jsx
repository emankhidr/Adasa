import { useState } from 'react'

import './App.css'
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom'
import AboutUs from './components/AboutUs'
import Blog from './components/Blog'
import Home from './components/Home'
import Layout from './components/Layout';
import BlogDetails from './components/BlogDetails'

function App() {

  const routes = createHashRouter(
    [
      {
        path: '/',
        element: <Layout />,
        children: [
          {
            index: true,
            element: <Home />

          },
          {
            path: '/home',
            element: <Home />

          },
          {
            path: '/blog',
            element: <Blog />

          },
          {
            path: '/about',
            element: <AboutUs />

          },
          {
            path: '/blog-details/:id',
            element: <BlogDetails />
          }

        ]

      }
    ]
  )

  return (
    <>
      <RouterProvider router={routes}>

      </RouterProvider>
    </>
  )
}

export default App
