import React from 'react';
import ReactDOMServer from "react-dom/server";
import { Button, Col, Row, Modal } from "react-bootstrap"
import SCFooter from "../../components/organisms/SCFooter";
import CodeEditor from "../../components/organisms/CodeEditor";
import useCSS from '../../hooks/use-css';
import { propData } from './propData';

//css styles and namespaces
/* eslint import/no-webpack-loader-syntax: off */
import rawCssString from '!!raw-loader!sass-loader!postcss-loader!../../components/organisms/SCFooter/SCFooter.module.scss';
import cssNameSpaces from '../../components/organisms/SCFooter/SCFooter.module.scss';

export default function Scene() {

    const css = useCSS();

    return (
        <>
            {/* <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal> */}
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

            <SCFooter {...propData} />
        </>
    )
};