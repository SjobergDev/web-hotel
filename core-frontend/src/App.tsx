import React from 'react';
import logo from './logo.svg';
import './App.scss';
import CreatePage from './components/create-page/CreatePage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DynamicPageWrapper from './components/DynamicPage/DynamicPageWrapper';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import LoginPage from './components/login-page/LoginPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <CreatePage />,
  },
  {
    path: "/site/:id",
    element: <DynamicPageWrapper />
  },
  {
    path: "/login",
    element: <LoginPage />
  }
]);

function App() {
  return (

    <div className="app-container">
    <Header />

    <div className="">
      <RouterProvider router={router} />
    </div>
    <Footer />
  </div>
  );
}

export default App;
