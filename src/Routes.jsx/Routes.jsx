import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Router from '../Router/Router';
import Register from '../Pages/Register/Register';
import SignIn from '../Pages/SignIn/SignIn';
import Shop from '../Pages/Shop/Shop';
import ProductDetails from '../Pages/ProductDetails/ProductDetails';
import ShoppingCart from '../Pages/ShoppingCart/ShoppingCart';
import About from '../Pages/About/About';
import AddProduct from '../Pages/AddProduct/AddProduct';

const Routes = createBrowserRouter([
    {
        path:'/',
        element: <Router></Router>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/ego/shop',
                element:<Shop></Shop>
            },
            {
                path:'/ego/product/:id/details',
                element:<ProductDetails></ProductDetails>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/add-product',
                element:<AddProduct></AddProduct>
            },
            {
                path:'/ego/my-cart',
                element:<ShoppingCart></ShoppingCart>
            },
            {
                path:'/ego/account/register',
                element:<Register></Register>
            },
            {
                path:'/ego/account/sign-in',
                element:<SignIn></SignIn>
            }
        ]
    }
  ])

export default Routes;
