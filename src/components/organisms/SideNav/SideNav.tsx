import React from 'react';
import { Nav, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './SideNav.module.scss';

interface Props {

}
export default function SideNav({ }: Props) {

    return (
        <>
            <div className={`${styles.compContainer}`} >
                <Nav className={`flex-column`}>
                    <div className={'p-3'}>
                        <ListGroupItem className={'pb-2'}><Link to={'/'}>Home</Link></ListGroupItem>
                        {/* <ListGroupItem className={'pb-2'}><Link to={'/components/header'}>Header</Link></ListGroupItem> */}
                        <ListGroupItem className={'pb-2'}><Link to={'/components/footer'}>Footer</Link></ListGroupItem>
                        <ListGroupItem className={'pb-2'}><Link to={'/components/test'}>Test</Link></ListGroupItem>
                    </div>
                </Nav>
            </div>
        </>
    )
}