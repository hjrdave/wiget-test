
import React from 'react';
import { Col, Row, Container, Navbar, Nav } from 'react-bootstrap';
import Image from '../../atoms/Image';
import SCLogoWhite from '../../../images/seven-corners-logo.svg';
import NavItem from '../../molecules/NavItem';
import NavSearch from '../../molecules/NavSearch';
import styles from './Header.module.scss';
interface Props {
    logoPath?: string;
    navItems?: {
        text?: string;
        path?: string;
        subItems?: {
            text?: string;
            path?: string;
        }[]
    }[];
}
export default function Header({ logoPath, navItems }: Props) {

    const [isSearchActive, setIsSearchActive] = React.useState(false);

    return (
        <>
            <Navbar variant={'dark'} expand="lg" className={`py-sm-0 py-md-3 ${styles.compContainer}`}>
                <Container>
                    <Navbar.Brand href="https://www.sevencorners.com/">
                        <Image path={(logoPath) ? logoPath : SCLogoWhite} className={`p-sm-4 p-md-0 ${styles.logo}`} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className={'p-2 p-lg-0'} style={{ width: '100%' }}>
                            <Col className={'d-lg-flex'}>
                                {
                                    navItems?.map((item, index) => (
                                        <React.Fragment key={index}>
                                            <NavItem
                                                text={item?.text}
                                                path={item?.path}
                                                subItems={item?.subItems}
                                                className={`${styles.navLink} text-white`}
                                            />
                                        </React.Fragment>
                                    ))
                                }
                            </Col>
                            <Col className={'d-lg-flex justify-content-end align-items-center'}>
                                {
                                    (!isSearchActive) ?
                                        <>
                                            <Nav.Link href={'https://www.sevencorners.com/about/contact'} className={`px-lg-4 text-white ${styles.navLink}`}>
                                                <i className="fa-solid fa-phone pe-2" style={{ color: '#F5852B' }}></i>
                                                Contact
                                            </Nav.Link>
                                            <NavItem
                                                icon={<i className="fa-solid fa-right-to-bracket pe-2" style={{ color: '#F5852B' }}></i>}
                                                text={'Login'}
                                                subItems={[
                                                    {
                                                        text: 'Customer Login',
                                                        path: 'https://www.sevencorners.com/login'
                                                    },
                                                    {
                                                        text: 'Agent Login',
                                                        path: 'https://agents.sevencorners.com/'
                                                    }
                                                ]}
                                                className={`pe-2 ${styles.navLink}`}
                                            />
                                        </> : null
                                }
                                <NavSearch
                                    active={isSearchActive}
                                    onClick={() => setIsSearchActive(true)}
                                    onFocusOut={() => setIsSearchActive(false)}
                                    className={styles.navLink}
                                />
                            </Col>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
