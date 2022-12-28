import React from 'react';
import CompBuilder from '../../components/templates/CompBuilder';
import Footer from "./ExportComp";
import { props } from './ExportComp/props';

//css styles and namespaces
/* eslint import/no-webpack-loader-syntax: off */
import rawCssString from '!!raw-loader!sass-loader!postcss-loader!./ExportComp/Footer.module.scss';
import cssNameSpaces from './ExportComp/Footer.module.scss';

export default function Scene() {

    return (
        <>
            <CompBuilder
                compProps={props}
                rawCssString={rawCssString}
                cssNameSpaces={cssNameSpaces}
                CompToStaticHTML={Footer}
            >
                <Footer {...props} />
            </CompBuilder>
        </>
    )
};