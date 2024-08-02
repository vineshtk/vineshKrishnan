import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import HomePage from './Pages/HomePage';
import ServicesPage from './Pages/ServicesPage';
import PortfolioPage from './Pages/PortfolioPage';
import ContactPage from './Pages/ContactPage';

const App = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<MainLayout />}>
                <Route index element={<HomePage />} />
                <Route path='/about' element={<h1>This is my about page</h1>} />
                <Route path='/services' element={<ServicesPage />} />
                <Route path='/portfolio' element={<PortfolioPage />} />
                <Route path='/contact' element={<ContactPage />} />
            </Route>
        )
    )

    return (
        <>
            <RouterProvider router={router} />
        </>

    );
}

export default App;