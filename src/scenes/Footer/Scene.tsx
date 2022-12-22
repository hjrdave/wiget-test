import React from 'react';
import Footer from "./ExportComp";
import CodeOutput from '../../components/organisms/CodeOutput';
import { footerProps } from './footer-props';

//css styles and namespaces
/* eslint import/no-webpack-loader-syntax: off */
import rawCssString from '!!raw-loader!sass-loader!postcss-loader!./ExportComp/Footer.module.scss';
import cssNameSpaces from './ExportComp/Footer.module.scss';

export default function Scene() {

    return (
        <>

            <div className='d-flex justify-content-end w-100 pb-3'>
                <CodeOutput
                    compProps={footerProps}
                    rawCssString={rawCssString}
                    cssNameSpaces={cssNameSpaces}
                    CompToStaticHTML={Footer}
                />
            </div>

            {/* Design View */}
            <Footer {...footerProps} />
        </>
    )
};