import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './routes/Router';

const App = () => (
  <div>
    <RouterProvider router={router} />
  </div>
);

export default App;
