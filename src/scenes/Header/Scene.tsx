import React from 'react';
import CompBuilder from '../../components/templates/CompBuilder';
import Header from "./ExportComp";
import { props } from './ExportComp/props';

//css styles and namespaces
/* eslint import/no-webpack-loader-syntax: off */
import rawCssString from '!!raw-loader!sass-loader!postcss-loader!./ExportComp/Header.module.scss';
import cssNameSpaces from './ExportComp/Header.module.scss';

export default function Scene() {

    return (
        <>
            <CompBuilder
                compProps={props}
                rawCssString={rawCssString}
                cssNameSpaces={cssNameSpaces}
                CompToStaticHTML={Header}
            >
                <Header {...props} />
            </CompBuilder>
        </>
    )
};