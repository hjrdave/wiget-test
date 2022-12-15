
import React from 'react';
import { Col, Row, Container, Navbar, NavDropdown, Nav } from 'react-bootstrap';
import Image from '../../atoms/Image';
import SCLogoWhite from '../../../images/seven-corners-logo.svg';
import styles from './Header.module.scss';

interface Props {
    logoPath?: string;
};

export default function Header({ logoPath }: Props) {

    return (
        <>
                <Navbar variant={'dark'} expand="lg" className={styles.compContainer}>
                    <Container>
                        <Navbar.Brand href="#home"><Image path={(logoPath) ? logoPath : SCLogoWhite} className={'p-sm-4 p-md-0'} width={'150px'}/></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav style={{width: '100%'}}>
                                <Col className={'d-flex'}>
                                    <NavDropdown title="Products" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">
                                            Products
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">
                                            Customer Service
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title="Customer Service" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">
                                            Another action
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">
                                            Blog
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                    <Nav.Link href="#home">Home</Nav.Link>
                                </Col>
                                <Col className={'d-flex justify-content-end align-items-start'}>
                                    <Navbar.Text className={'px-2'}>Contact</Navbar.Text>
                                    <Navbar.Text className={'px-2'}>Login</Navbar.Text>
                                    <Navbar.Text className={'px-2'}>Search</Navbar.Text>
                                </Col>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
        </>
    )
}
