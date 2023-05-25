import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes';
import { context } from '../context';

export default function AppRouter() {
    const user = useContext(context)
    return (
        <Routes>
            {user.isAuth && authRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} Component={Component} exact />
            )}
            {publicRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} Component={Component} exact />
            )}
        </Routes>
    );
};
