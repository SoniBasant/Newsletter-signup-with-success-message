import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./App"
import ThankYouPage from './component/thankyou';
import './index.css'

import {createBrowserRouter, RouterProvider} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/', element: <App/>
  },
  {
    path: '/thankyou', element: <ThankYouPage/>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
