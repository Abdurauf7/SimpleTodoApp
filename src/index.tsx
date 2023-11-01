import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider,createBrowserRouter } from 'react-router-dom'

import { routersList } from './routes'

import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const routers = createBrowserRouter(routersList)


root.render(
  <React.StrictMode>
      <RouterProvider router={routers}/>

  </React.StrictMode>
);


