import React from 'react';
import {Nav, ListGroupItem} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import styles from './SideNav.module.scss';

interface Props{
    items: {
        text: string;
        path: string;
    }[]
}
export default function SideNav({items}: Props){

    return(
        <>
            <div className={`${styles.compContainer}`} >
                <Nav className={`flex-column`}>
                    <div className={'p-3'}>
                        <ListGroupItem className={'pb-2'}><Link to={'/'}>Home</Link></ListGroupItem>
                        {
                            items.map((item, index) => (
                                <React.Fragment key={index}>
                                    <ListGroupItem className={'pb-2'}>
                                        <Link to={item.path}>
                                            {item.text}
                                        </Link>
                                    </ListGroupItem>
                                </React.Fragment>
                            ))
                        }
                    </div>
                </Nav>
            </div> 
        </>
    )
}