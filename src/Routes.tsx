import React from 'react';
import { Route, Outlet, Routes as RRRoutes } from 'react-router-dom';
import Home from './scenes/Home';
import SCFooterScene from './scenes/SCFooter';

export default function Routes() {

    return (
        <>
            <RRRoutes>
                <Route path={'/'} element={<Outlet />}>
                    <Route index element={<Home />} />
                    <Route path={'/components'} element={<Outlet />}>
                        <Route path={'footer'} element={<SCFooterScene />} />
                    </Route>
                </Route>
            </RRRoutes>
        </>
    )
}