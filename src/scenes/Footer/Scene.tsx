import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import BreakpointBtnGRoup from '../../components/atoms/BreakpointBtnGroup';
import Footer from "./ExportComp";
import DesignViewFrame from '../../components/atoms/DesignViewFrame';
import CodeOutput from '../../components/organisms/CodeOutput';
import { footerProps } from './footer-props';

//css styles and namespaces
/* eslint import/no-webpack-loader-syntax: off */
import rawCssString from '!!raw-loader!sass-loader!postcss-loader!./ExportComp/Footer.module.scss';
import cssNameSpaces from './ExportComp/Footer.module.scss';

export default function Scene() {

    const [screenSize, setScreenSize] = React.useState('auto');

    return (
        <>

            <div className='d-flex justify-content-between w-100 pb-3'>
                <div></div>
                {/* <BreakpointBtnGRoup onChange={(size) => setScreenSize(size)} /> */}
                <CodeOutput
                    compProps={footerProps}
                    rawCssString={rawCssString}
                    cssNameSpaces={cssNameSpaces}
                    CompToStaticHTML={Footer}
                />
            </div>

            {/* Design View */}
            <DesignViewFrame maxWidth={screenSize}>
                <Footer {...footerProps} />
            </DesignViewFrame>
        </>
    )
};