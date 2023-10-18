import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './root/Root.jsx';
import ErrorPage from './error/ErrorPage.jsx';
import Home from './home/Home.jsx';
import AddProduct from './Pages/AddProduct.jsx';
import MyCart from './Pages/MyCart.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
       path:"/",
       element: <Home></Home>
      },
      {
        path:"/addProduct",
        element: <AddProduct></AddProduct>
       },
       {
        path:"/myCart",
        element: <MyCart></MyCart>
       },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
