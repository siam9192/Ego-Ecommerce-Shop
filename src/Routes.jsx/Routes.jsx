import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Router from '../Router/Router';
import Register from '../Pages/Register/Register';
import SignIn from '../Pages/SignIn/SignIn';
import Shop from '../Pages/Shop/Shop';

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
