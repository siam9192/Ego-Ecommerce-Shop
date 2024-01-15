import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routes from './Routes.jsx/Routes.jsx'
import AuthProvider from './Authentication/AuthProvider/AuthProvider.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const query = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <QueryClientProvider client={query}>
 <AuthProvider>
 <RouterProvider router={Routes}>
   
   </RouterProvider>
 </AuthProvider>
 </QueryClientProvider>
  </React.StrictMode>,
 
)
