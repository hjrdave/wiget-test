import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Sticky from 'react-stickynode';
import ListMapper from '../../components/molecules/ListMapper';
import { originalObject, mapList } from './org-to-mapped';
import CodeEditor from '../../components/organisms/CodeEditor';

export default function Scene() {

    const [mapperOutput, setMapperOutput] = React.useState('');

    return (
        <>

            <div className='d-flex justify-content-between w-100 pb-3'>
                {/* Buttons */}
            </div>
            <Col className={'w-100'}>
                <Row>
                    <Col>
                        <ListMapper
                            mapFrom={originalObject}
                            mapToList={mapList}
                            onChange={(mappedObj) => setMapperOutput(mappedObj)}
                        />
                    </Col>
                    <Col>
                        <Sticky enabled={true} innerZ={2} top={75}>
                            <CodeEditor
                                type={'javascript'}
                                onChange={(value) => null}
                                defaultValue={``}
                                height={'90vh'}
                                value={mapperOutput}
                            />
                        </Sticky>

                    </Col>
                </Row>
            </Col>
        </>
    )
};