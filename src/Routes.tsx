import React from 'react';
import { Route, Outlet, Routes as RRRoutes } from 'react-router-dom';
import Home from './scenes/Home';
import SCHeaderScene from './scenes/SCHeader';
import FooterScene from './scenes/Footer';
import HeaderScene from './scenes/Header';
import TestScene from './scenes/Test';
import ObjectMapperScene from './scenes/ObjectMapper';
import ArrayFormatterScene from './scenes/ArrayFormatter';

export default function Routes() {

    return (
        <>
            <RRRoutes>
                <Route path={'/'} element={<Outlet />}>
                    <Route index element={<Home />} />
                    <Route path={'/components'} element={<Outlet />}>
                        {/* <Route path={'header'} element={<FooterScene />} /> */}
                        <Route path={'footer'} element={<FooterScene />} />
                        <Route path={'header'} element={<HeaderScene />} />
                        <Route path={'test'} element={<TestScene />} />
                    </Route>
                    <Route path={'/object-mapper'} element={<ObjectMapperScene />} />
                    <Route path={'/array-formatter'} element={<ArrayFormatterScene />} />
                </Route>
            </RRRoutes>
        </>
    )
}