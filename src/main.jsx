import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter, useParams } from 'react-router-dom';
import Root from './root/Root.jsx';
import ErrorPage from './error/ErrorPage.jsx';
import Home from './home/Home.jsx';
import AddProduct from './Pages/AddProduct.jsx';
import MyCart from './Pages/MyCart.jsx';
import Contact from './Pages/Contact';
import Login from './login/Login';
import Register from './login/Register';
import AuthProvider from './provider/AuthProvider';
import PrivateRoute from './privateRoute\'/PrivateRoute';
import ProductCollection from './Products/ProductCollection';
import ProductDetails from './Products/ProductDetails';
import Update from './update/Update';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
       path:"/",
       element: <Home></Home>,
       loader :()=>fetch('/brand.json')
      },
      {  
      path:"/addproduct",
      element :<PrivateRoute>
        <AddProduct></AddProduct>
        </PrivateRoute>,
        
      },
      {
        path:"/myCart",
        element: <PrivateRoute>
          <MyCart></MyCart>
        </PrivateRoute>,
        loader:()=>fetch("http://localhost:5001/details")
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
       {
        path: "/product/:brand",
        element:<PrivateRoute>
         <ProductCollection></ProductCollection>
         </PrivateRoute>,
       loader:({params})=>{
        console.log(params);

        return fetch(`http://localhost:5001/product/${params.brand}`)
      }
    },
      {
        path: "/products/:id",
        element:<PrivateRoute>
         <ProductDetails></ProductDetails>
         </PrivateRoute>,
       loader:({params})=>{
     

        return fetch(`http://localhost:5001/products/${params.id}`)
      }
        
       
        
      
     },
     {
      path:"/update/:id",
      element:<PrivateRoute>
     <Update></Update>
      </PrivateRoute>,
     
    
    
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
