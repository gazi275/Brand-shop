import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './root/Root.jsx';
import ErrorPage from './error/ErrorPage.jsx';
import Home from './home/Home.jsx';
import AddProduct from './Pages/AddProduct.jsx';
import MyCart from './Pages/MyCart.jsx';
import Contact from './Pages/Contact';
import Login from './login/Login';
import Register from './login/Register';
import AuthProvider from './provider/AuthProvider';

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
      path:"/addproduct",
      element :<AddProduct></AddProduct>
      },
      {
        path:"/myCart",
        element: <MyCart></MyCart>
       },
       {
        path:"/contact",
        element: <Contact></Contact>
       },
       {
        path:"/login",
        element:<Login></Login>
       },
       {
        path:"/register",
        element:<Register></Register>
       },

    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
