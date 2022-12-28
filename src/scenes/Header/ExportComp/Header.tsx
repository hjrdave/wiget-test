import React from 'react';
import { Col, Container, Navbar, Nav, Form, InputGroup, Button } from 'react-bootstrap';
import Link from '../../../components/atoms/Link';
import NavItem from '../../../components/molecules/NavItem';
import NavSearch from '../../../components/molecules/NavSearch';
import Image from '../../../components/atoms/Image';
import styles from './Header.module.scss';

export interface Props {
    logoPath: string;
    logoAlt: string;
    navItems?: {
        text?: string;
        path?: string;
        subItems?: {
            text?: string;
            path?: string;
        }[]
    }[];
}

export default function Header({ navItems, logoPath, logoAlt }: Props) {

    const toggleID = "basic-navbar-nav";

    return (
        <>
            <Navbar variant={'dark'} expand="lg" className={`py-sm-0 py-md-3 ${styles.compContainer}`}>
                <Container>
                    <Navbar.Brand href={logoPath}>
                        <Image path={logoPath} className={`p-sm-4 p-md-0 ${styles.logo}`} alt={logoAlt} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls={toggleID} />
                    <Navbar.Collapse id={toggleID}>
                        <Nav className={'p-2 p-lg-0'} style={{ width: '100%' }}>
                            <Col className={'d-lg-flex'}>
                                {
                                    navItems?.map((item, index) => (
                                        <React.Fragment key={index}>
                                            {
                                                (item.subItems) ?
                                                    <div className="nav-item dropdown">
                                                        <button className="btn dropdown-toggle text-white" data-bs-toggle="dropdown" aria-expanded="false">
                                                            {item.text}
                                                        </button>
                                                        <ul className="dropdown-menu">
                                                            {
                                                                item.subItems?.map((item, index) => (
                                                                    <React.Fragment key={index}>
                                                                        <li><a className="dropdown-item" href={item.path}>{item.text}</a></li>
                                                                    </React.Fragment>
                                                                ))
                                                            }
                                                        </ul>
                                                    </div> :
                                                    <li className="nav-item">
                                                        <a className="nav-link" href={item.path}>{item.text}</a>
                                                    </li>
                                            }
                                        </React.Fragment>
                                    ))
                                }
                            </Col>
                            <Col className={'d-lg-flex justify-content-end align-items-center'}>
                                {
                                    (!true) ?
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
                                {/* <NavSearch
                                    active={isSearchActive}
                                    onClick={() => setIsSearchActive(true)}
                                    onFocusOut={() => setIsSearchActive(false)}
                                    className={styles.navLink}
                                /> */}
                                <InputGroup size="sm" onBlur={() => null}>
                                    <Form.Control
                                        // {...bind}
                                        placeholder="Type to Search"
                                        aria-label="Type to Search"
                                        aria-describedby="basic-addon1"
                                        autoFocus
                                        onKeyDown={(e) => {
                                            if (e.code === 'Enter' && null) {
                                                window.location.href = '';
                                            }
                                        }}
                                    />
                                    <Button
                                        className={styles.searchBtn}
                                        id="button-addon1"
                                    //onMouseEnter={() => setIsFocusOutDisabled(true)}
                                    //onMouseLeave={() => setIsFocusOutDisabled(false)}
                                    >
                                        <Link
                                            path={''}
                                        >
                                            <i className="fa-solid fa-magnifying-glass text-white"></i>
                                        </Link>
                                    </Button>
                                </InputGroup>
                            </Col>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}