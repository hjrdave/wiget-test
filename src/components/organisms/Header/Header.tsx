import { Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

export default function Header() {

    return (
        <>
            <Navbar variant="dark" className={`${styles.compContainer}`}>
                <Container fluid>
                    <Navbar.Brand>
                        <i className="fa-solid fa-code pe-2"></i>
                        Builder
                    </Navbar.Brand>
                    {/* <a href={'http://localhost:3000/previews/footer-widget.html'}>Preview Mode</a> */}
                </Container>
            </Navbar>
        </>
    )
}