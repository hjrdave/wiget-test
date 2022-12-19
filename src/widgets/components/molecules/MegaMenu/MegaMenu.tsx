import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import styles from './MegaMenu.module.scss';

interface Props {

};

export default function MegaMenu({ }: Props) {

    return (
        <>
            <div className={styles.compContainer}>
                <Container fluid>
                    <Row>
                        <Col className={'p-2'}>
                            <h6 className={'text-uppercase'}>Trip Insurance</h6>
                            <p>
                                Coverage for nonrefundable trip expenses due to cancellation, delay, and interruption; baggage delay/loss;
                                medical expenses and medical
                                evacuation.
                            </p>
                            <p><strong>RoundTrip Travel Protection</strong></p>
                            <p>Our most popular coverage for U.S. residents' trips within the U.S. and abroad. Offers optional Cancel for Any Reason to expand your coverage</p>
                            <p><strong>Get Away USA</strong></p>
                            <p><strong>Customizable</strong> coverage for U.S. residents' trips within the U.S.</p>
                            <p><strong>Group Insurance</strong></p>
                            <p>Compare plans for groups of 10 or more</p>
                        </Col>
                        <Col className={'p-2'}>
                            <h6 className={'text-uppercase'}>Travel Medical Insurance</h6>
                            <p><strong>Seven Corners Travel Medical</strong></p>
                            <p>High limits of comprehensive medical protection for travel outside your home country with optional COVID-19 coverage on our Plus plan.</p>

                            <h6>Liaison Student</h6>
                            <p>Specialized health insurance for students, faculty, scholars, and their families with optional COVID-19 coverage on our Plus plan.</p>

                            <h6>Wander Frequent Traveler Plus</h6>
                            <p>Cover multiple international trips with our annual plan. Includes COVID-19 coverage.</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}