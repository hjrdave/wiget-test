import React from 'react';
import {Route, Outlet, Routes as RRRoutes} from 'react-router-dom';
import Home from './scenes/Home';
import SampleWidget from './scenes/SampleWidget';
export default function Routes(){

    return(
        <>
            <RRRoutes>
                <Route path={'/'} element={<Outlet />}>
                    <Route index element={<SampleWidget/>}/>
                    {/* <Route index path={'sample-widget'} element={<SampleWidget/>}/> */}
                </Route>
            </RRRoutes>
        </>
    )
}