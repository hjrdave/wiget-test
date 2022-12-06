import {Container, Row, Col} from 'react-bootstrap';
import styles from './Body.module.scss';

interface Props{
    children?: JSX.Element | JSX.Element[];
}
export default function Body({children}: Props){

    return(
        <>
            <Container fluid className={`${styles.compContainer} p-3`}>
                <Row>
                    <Col>
                        {children}
                    </Col>
                </Row>
            </Container>
        </>
    )
}