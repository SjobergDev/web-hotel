import React from 'react';
import logo from './logo.svg';
import './App.scss';
import CreatePage from './components/create-page/CreatePage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DynamicPageWrapper from './components/DynamicPage/DynamicPageWrapper';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

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

    <div className="app-container">
    <Header />

    <div className="container">
      <RouterProvider router={router} />
    </div>
    <Footer />
  </div>
  );
}

export default App;
