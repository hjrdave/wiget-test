import {Col, Row} from 'react-bootstrap';
import styles from './Footer.module.scss';

interface Props{

}

export default function Footer({}){

    return(
        <>
            <div className={styles.compContainer}>
                <Col className='p-3'>
                    <Row>
                        <Col>
                            <h5 className="text-uppercase fw-bold">Seven Corners</h5>
                            <p>303 Congressional Blvd. Carmel , Indiana 46032 USA</p>
                            <ul className={styles.listGroup}>
                                <li>Careers</li>
                                <li>Contact Us</li>
                            </ul>
                        </Col>
                        <Col>
                        <h5 className="text-uppercase fw-bold">Connect</h5>
                            <p>Social Media Icons</p>
                        </Col>
                        <Col>
                        <h5 className="text-uppercase fw-bold">Our Markets</h5>
                            <ul className={styles.listGroup}>
                                <li>Consumer</li>
                                <li>Insurance</li>
                                <li>Government</li>
                                <li>Solutions</li>
                                <li>Agents</li>
                            </ul>
                        </Col>
                        <Col>
                        <h5 className="text-uppercase fw-bold">Products</h5>
                            <ul className={styles.listGroup}>
                                <li>Roundtrip&reg; for U.S. Residents</li>
                                <li>Seven Corners&reg; Travel Medical Plans</li>
                                <li>Seven Corners&reg; Student Plans Get Away USA</li>
                                <li>Wander&reg; Frequent Travelers Plus</li>
                                <li>Inbound&reg; USA Plans</li>
                                <li>Medical Evacuation and Repatriation</li>
                            </ul>
                        </Col>
                        <Col>
                            <h5 className="text-uppercase fw-bold">Resources</h5>
                            <ul className={styles.listGroup}>
                                <li>About Us</li>
                                <li>24 Hour Travel</li>
                                <li>Assistance</li>
                                <li>Services & Discounts</li>
                                <li>Claims</li>
                                <li>F.A.Q</li>
                                <li>Glossary</li>
                                <li>Developer Portal</li>
                                <li>System Status</li>
                                <li>Media Contact</li>
                            </ul>
                        </Col>
                    </Row>
                </Col>
            </div>
        </>
    )
}