import { Col, Row, Container } from 'react-bootstrap';
import Image from '../../atoms/Image';
import Link from '../../atoms/Link';
import SCLogoWhite from '../../../images/seven-corners-logo.svg';
import styles from './Footer.module.scss';

interface Props {
    copyrightPath?: string,
    logoPath?: string;
    address?: {
        street?: string;
        city?: string;
        state?: string;
        zip?: string;
        country?: string;
    }
    connect?: {
        twitter?: string;
        facebook?: string;
        linkedin?: string;
        pinterest?: string;
        youtube?: string;
        instagram?: string;
    }
    markets?: {
        text?: string;
        path?: string;
    }[];
    products?: {
        text?: string;
        path?: string;
    }[];
    resources?: {
        text?: string;
        path?: string;
    }[];
    legal?: {
        text?: string;
        path?: string;
    }[]
}

export default function Footer({ address, connect, markets, products, resources, legal, logoPath }: Props) {

    const date = new Date();

    return (
        <>
            <div className={`${styles.compContainer} text-white`}>
                <Container>
                    <Row className={'px-3'}>
                        <Col sm={12} md={6} lg={2} className={'px-3 pt-4'}>
                            <Image path={(logoPath) ? logoPath : SCLogoWhite} className={'p-sm-4 p-md-0'} />
                            <p className={`pt-2 mb-0 text-sm-center text-md-start ${styles.address}`}>{address?.street}</p>
                            <p className={`mb-0 text-sm-center text-md-start ${styles.address}`}>{address?.city}, {address?.state} {address?.zip}</p>
                        </Col>
                        <Col className={'d-flex justify-content-start justify-content-md-center pt-4'}>
                            <div>
                                <h6 className="text-uppercase fw-bold">Connect</h6>
                                <div className={"pt-2"} style={{ width: '125px' }}>
                                    <div className='d-flex justify-content-between'>
                                        <Link path={connect?.twitter} target={'_blank'}><i className={`fa-brands fa-twitter fs-4 ${styles.icon}`}></i></Link>
                                        <Link path={connect?.facebook} target={'_blank'}><i className={`fa-brands fa-facebook fs-4 ${styles.icon}`}></i></Link>
                                        <Link path={connect?.linkedin} target={'_blank'}><i className={`fa-brands fa-linkedin fs-4 ${styles.icon}`}></i></Link>
                                    </div>
                                    <div className='d-flex justify-content-between pt-3'>
                                        <Link path={connect?.pinterest} target={'_blank'}><i className={`fa-brands fa-pinterest fs-4 ${styles.icon}`}></i></Link>
                                        <Link path={connect?.youtube} target={'_blank'}><i className={`fa-brands fa-youtube fs-4 ${styles.icon}`}></i></Link>
                                        <Link path={connect?.instagram} target={'_blank'}><i className={`fa-brands fa-instagram fs-4 ${styles.icon}`}></i></Link>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col className={'d-flex justify-content-start justify-content-md-center pt-4'}>
                            <div>
                                <h6 className="text-uppercase fw-bold">Our Markets</h6>
                                <ul className={`ps-0 ${styles.listGroup}`}>
                                    {
                                        markets?.map((item) => (
                                            <Link path={item.path} target={'_blank'}>
                                                <li>{item.text}</li>
                                            </Link>
                                        ))
                                    }
                                </ul>
                            </div>
                        </Col>
                        <Col sm={6} md={6} lg={3} className={'d-flex justify-content-start justify-content-md-center pt-4'}>
                            <div>
                                <h6 className="text-uppercase fw-bold">Products</h6>
                                <ul className={`ps-0 ${styles.listGroup}`}>
                                    {
                                        products?.map((item) => (
                                            <Link path={item.path} target={'_blank'}>
                                            <li>{item.text}</li>
                                        </Link>
                                        ))
                                    }
                                </ul>
                            </div>
                        </Col>
                        <Col sm={6} md={3} className={'d-flex justify-content-start justify-content-md-center pt-4'}>
                            <div>
                                <h6 className="text-uppercase fw-bold">Resources</h6>
                                <ul className={`ps-0 ${styles.listGroup}`}>
                                    {
                                        resources?.map((item) => (
                                            <Link path={item.path} target={'_blank'}>
                                            <li>{item.text}</li>
                                        </Link>
                                        ))
                                    }
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Container fluid>
                    <Row>
                        <Col className={`py-2 ${styles.copyright}`}>
                            <p className={'mb-0 text-center'}><small>Copyright &copy; {date.getFullYear()} Seven Corners Inc. All rights reserved.</small></p>
                            <p className={'mb-0 pt-1 text-center'}>
                                <small>
                                    {
                                        legal?.map((item, index) => (
                                            <>
                                                 <Link path={item.path} target={'_blank'}>{item?.text}</Link>
                                                {
                                                    (legal.length !== (index + 1)) ? <>&nbsp; | &nbsp;</> : ''
                                                }
                                            </>
                                        ))
                                    }
                                </small>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}