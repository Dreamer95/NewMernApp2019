import React from 'react';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';
import MotelPage from './pages/Applications/MotelManager';
import MotelUpdatePage from './pages/Applications/MotelUpdatePage';
import ColorPickerPage from './pages/ColorPickers/index';

const routes = [
    {
        path : '/',
        exact : true,
        main : () => <HomePage />
    },
    {
        path : '/about',
        exact : false,
        main : () => <AboutPage />
    },
    {
        path : '/motel',
        exact : true,
        main : () => <MotelPage />
    },
    {
        path : '/color',
        exact : true,
        main : () => <ColorPickerPage />
    },
    {
        path : '/motel/update',
        exact : false,
        main : () => <MotelUpdatePage />
    },
    {
        path : '',
        exact : false,
        main : () => <NotFoundPage/>
    },

];

export default routes;