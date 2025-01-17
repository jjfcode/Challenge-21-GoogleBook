import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { StrictMode, startTransition } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App.jsx'
import SearchBooks from './pages/SearchBooks'
import SavedBooks from './pages/SavedBooks'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      errorElement: <h1 className='display-2'>Wrong page!</h1>,
      children: [
        {
          index: true,
          element: <SearchBooks />
        }, 
        {
          path: '/saved',
          element: <SavedBooks />
        }
      ]
    }
  ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
      v7_normalizeFormMethod: true,
      v7_prependBasename: true
    }
  }
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <RouterProvider router={router} future={{ 
      v7_startTransition: true,
      v7_relativeSplatPath: true
    }} />
  </StrictMode>
);
