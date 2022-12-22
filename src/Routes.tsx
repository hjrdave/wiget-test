import React from 'react';
import { Route, Outlet, Routes as RRRoutes } from 'react-router-dom';
import Home from './scenes/Home';
import SCHeaderScene from './scenes/SCHeader';
import FooterScene from './scenes/Footer';
import TestScene from './scenes/Test';

export default function Routes() {

    return (
        <>
            <RRRoutes>
                <Route path={'/'} element={<Outlet />}>
                    <Route index element={<Home />} />
                    <Route path={'/components'} element={<Outlet />}>
                        {/* <Route path={'header'} element={<FooterScene />} /> */}
                        <Route path={'footer'} element={<FooterScene />} />
                        <Route path={'test'} element={<TestScene />} />
                    </Route>
                </Route>
            </RRRoutes>
        </>
    )
}