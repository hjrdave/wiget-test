import React from 'react';
import ReactDOMServer from "react-dom/server";
import { Col, Row } from "react-bootstrap"
import Footer from "./ExportComp";
import CodeEditor from "../../components/organisms/CodeEditor";
import useCSS from '../../hooks/use-css';
import { footerProps } from './footer-props';

//css styles and namespaces
/* eslint import/no-webpack-loader-syntax: off */
import rawCssString from '!!raw-loader!sass-loader!postcss-loader!./ExportComp/Footer.module.scss';
import cssNameSpaces from './ExportComp/Footer.module.scss';

export default function Scene() {

    const css = useCSS();

    return (
        <>
            <div className={'py-4'} style={{ width: '100%' }}>
                <Col>
                    <Row>
                        <Col sm={'8'}>
                            <CodeEditor
                                type={'html'}
                                value={ReactDOMServer.renderToString(<Footer {...footerProps} />)}
                            />
                        </Col>
                        <Col sm={'4'}>
                            <CodeEditor
                                type={'css'}
                                value={css.nameSpaceClasses(rawCssString, cssNameSpaces)}
                            />
                        </Col>
                    </Row>
                </Col>
            </div>
            {/* Design View */}
            <Footer {...footerProps} />
        </>
    )
};