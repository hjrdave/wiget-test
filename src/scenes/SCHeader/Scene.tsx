import React from 'react';
import ReactDOMServer from "react-dom/server";
import { Button, Col, Row, Modal } from "react-bootstrap"
import SCHeader from "../../components/organisms/SCHeader";
import CodeEditor from "../../components/organisms/CodeEditor";
import useCSS from '../../hooks/use-css';
import { propData } from './propData';

//css styles and namespaces
/* eslint import/no-webpack-loader-syntax: off */
import rawCssString from '!!raw-loader!sass-loader!postcss-loader!../../components/organisms/SCHeader/SCHeader.module.scss';
import cssNameSpaces from '../../components/organisms/SCFooter/SCHeader.module.scss';

export default function Scene() {

    const css = useCSS();

    return (
        <>
            <div className={'py-4'} style={{ width: '100%' }}>
                <Col>
                    <Row>
                        <Col sm={'8'}>
                            <CodeEditor type={'html'} value={ReactDOMServer.renderToString(<SCFooter {...propData} />)} />
                        </Col>
                        <Col sm={'4'}>
                            <CodeEditor type={'css'} value={css.nameSpaceClasses(rawCssString, cssNameSpaces)} />
                        </Col>
                    </Row>
                </Col>
            </div>

            <SCHeader {...propData} />
        </>
    )
};