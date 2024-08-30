import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Goals from '../pages/Supplier/Goals/Goals';


const router = createBrowserRouter([
 
  {
    path: '/goals',
    element: <Goals/>,
  },
  
]);

export default router;
