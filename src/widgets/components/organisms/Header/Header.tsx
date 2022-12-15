
    import React from 'react';
    import {Col, Row} from 'react-bootstrap';
    import styles from './Header.module.scss';

    interface Props{

    };

    export default function Header({}: Props){

        return(
            <>
                <div className={styles.compContainer}>
                    <Col>
                        <Row>
                            <Col>
                                <div className={'d-flex flex-column justify-content-center align-items-center'} style={{fontSize: '5rem', height: '75vh'}}>
                                    <i className="fa-solid fa-screwdriver-wrench text-muted"></i>
                                    <h2 className={'pt-2 text-muted'}>Create a new Widget</h2>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </div>
            </>
        )
    }
