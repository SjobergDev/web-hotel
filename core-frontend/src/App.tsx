import React from 'react';
import logo from './logo.svg';
import './App.scss';
import CreatePage from './components/create-page/CreatePage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DynamicPageWrapper from './components/DynamicPage/DynamicPageWrapper';

const router = createBrowserRouter([
  {
    path: "/",
    element: <CreatePage />,
  },
  {
    path: "/site/:id",
    element: <DynamicPageWrapper />
  }
]);

function App() {
  return (

    <div className='app-container'>
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
