import React from 'react';
import {Route, Outlet, Routes as RRRoutes} from 'react-router-dom';
import Home from './scenes/Home';
import SampleWidgetScene from './scenes/SampleWidget';
import HeaderWidgetScene from './scenes/Header';
import FooterWidgetScene from './scenes/Footer';
export default function Routes(){

    return(
        <>
            <RRRoutes>
                <Route path={'/'} element={<Outlet />}>
                    <Route index element={<SampleWidgetScene/>}/>
                    <Route path={'footer-widget'} element={<FooterWidgetScene/>}/>
                    <Route path={'header-widget'} element={<HeaderWidgetScene/>}/>
                </Route>
            </RRRoutes>
        </>
    )
}