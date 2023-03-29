import React from 'react';
import './App.scss';
import CreatePage from './components/create-page/CreatePage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DynamicPageWrapper from './components/DynamicPage/DynamicPageWrapper';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import LoginPage from './components/login-page/LoginPage';
import EditPage from './components/edit-page/EditPage';
import { create } from 'zustand'
import { IHotelPageSettings } from './model/HotelPageComponent';

interface IHotelPageSettingsState {
  settings: IHotelPageSettings
  changeHeaderColor: (color: string) => void
}

export const useSettingsStore = create<IHotelPageSettingsState>()((set) => ({
  settings: {},
  changeHeaderColor: (color) => set((state) => ({ settings : {headerColor: color }})),
}))

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
  }, {
    path: "/edit-page",
    element: <EditPage />
  }
]);

function App() {
  return (

    <div className="app-container">
      <Header />

      <div  className="body-container">
        <RouterProvider router={router} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
