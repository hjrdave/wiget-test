import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Col, Row, Modal, Button } from 'react-bootstrap';
import CodeEditor from '../CodeEditor';
import useCSS, { TRawCSSImport } from '../../../hooks/use-css';
import styles from './CodeOutput.module.scss';

interface Props {
    compProps: {
        [key: string]: any;
    };
    CompToStaticHTML: (props: any) => JSX.Element;
    rawCssString: TRawCSSImport;
    cssNameSpaces: TRawCSSImport
};

export default function CodeOutput({ compProps, rawCssString, cssNameSpaces, CompToStaticHTML }: Props) {

    const css = useCSS();
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <Modal
                show={modalShow}
                onHide={() => setModalShow(false)}
                //size="lg"
                dialogClassName={styles.dialogSize}
                aria-labelledby="contained-modal-title-vcenter"
            //centered
            >
                <Modal.Header closeButton className={'py-2'}>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <i className="fa-solid fa-code pe-2"></i>Generated Code
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className={''}>
                    {/* <div style={{ width: '100%' }}> */}
                    <Col>
                        <Row>
                            <Col sm={'8'} className={'p-0'}>
                                <CodeEditor
                                    type={'html'}
                                    height={'70vh'}
                                    value={ReactDOMServer.renderToStaticMarkup(<CompToStaticHTML {...compProps} />)}
                                />
                            </Col>
                            <Col sm={'4'} className={'p-0'}>
                                <CodeEditor
                                    type={'css'}
                                    height={'70vh'}
                                    value={css.nameSpaceClasses(rawCssString, cssNameSpaces)}
                                />
                            </Col>
                        </Row>
                    </Col>
                    {/* </div> */}
                </Modal.Body>
            </Modal>
            <Button onClick={() => setModalShow(true)} variant='secondary' size="sm"><i className="fa-solid fa-code pe-2"></i>Code</Button>
        </>
    )
}