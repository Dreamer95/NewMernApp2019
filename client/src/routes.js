import React from 'react';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';
import ColorPickerPage from './pages/ColorPickers/index';
import ProductListPage from './pages/ShoppingList/ProductListPage';
import ProductActionPage from './pages/ShoppingList/ProductActionPage';

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
        path : '/mycolor',
        exact : true,
        main : () => <ColorPickerPage />
    },
    {
        path : '/product-list',
        exact : false,
        main : () => <ProductListPage />
    },
    {
        path : '/product/add',
        exact : false,
        main : ({history}) => <ProductActionPage history={history} />
    },
    {
        path : '/product/:id/edit',
        exact : false,
        main : ({history,match}) => <ProductActionPage history={history} match={match}/>
    },
    {
        path : '',
        exact : false,
        main : () => <NotFoundPage/>
    },

];

export default routes;