import React from 'react';
import {Route, Outlet, Routes as RRRoutes} from 'react-router-dom';
import Home from './scenes/Home';
import SampleWidget from './scenes/SampleWidget';
import FooterWidget from './scenes/Footer';
export default function Routes(){

    return(
        <>
            <RRRoutes>
                <Route path={'/'} element={<Outlet />}>
                    <Route index element={<SampleWidget/>}/>
                    <Route path={'footer-widget'} element={<FooterWidget/>}/>
                </Route>
            </RRRoutes>
        </>
    )
}