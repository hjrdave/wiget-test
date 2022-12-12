import {Nav, ListGroupItem} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import styles from './SideNav.module.scss';

export default function SideNav(){

    return(
        <>
            <div className={`${styles.compContainer}`} >
                <Nav className={`flex-column`}>
                    <div className={'p-3'}>
                        <ListGroupItem className={'pb-2'}><Link to={'/'}>Home</Link></ListGroupItem>
                        <ListGroupItem><Link to={'/footer-widget'}>Footer</Link></ListGroupItem>
                    </div>
                </Nav>
            </div> 
        </>
    )
}