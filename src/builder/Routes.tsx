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
                    <Route index element={<Home/>}/>
                    <Route path={'/widgets'} element={<Outlet/>}>
                        <Route path={'sample-widget'} element={<SampleWidgetScene/>}/>
                        <Route path={'footer'} element={<FooterWidgetScene/>}/>
                        <Route path={'header'} element={<HeaderWidgetScene/>}/>
                    </Route>
                </Route>
            </RRRoutes>
        </>
    )
}