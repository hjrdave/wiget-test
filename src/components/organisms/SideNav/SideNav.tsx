import React from 'react';
import { Nav, ListGroupItem } from 'react-bootstrap';
import Sticky from 'react-stickynode';
import { Link } from 'react-router-dom';
import styles from './SideNav.module.scss';

interface Props {

}
export default function SideNav({ }: Props) {

    return (
        <>
            <Sticky enabled={true} innerZ={3} top={50} className={styles.stickyContainer}>
                <div className={`${styles.compContainer}`}>
                    <Nav className={`flex-column ${styles.navContainer}`}>
                        <div className={'p-3'}>
                            <ListGroupItem className={'pb-2'}><Link to={'/'}>Home</Link></ListGroupItem>
                            {/* <ListGroupItem className={'pb-2'}><Link to={'/components/header'}>Header</Link></ListGroupItem> */}
                            <ListGroupItem className={'pb-2'}><Link to={'/components/footer'}>Footer</Link></ListGroupItem>
                            <ListGroupItem className={'pb-2'}><Link to={'/components/header'}>Header</Link></ListGroupItem>
                            <ListGroupItem className={'pb-2'}><Link to={'/components/test'}>Test</Link></ListGroupItem>
                            <ListGroupItem className={'pb-2'}><Link to={'/object-mapper'}>Object Mapper</Link></ListGroupItem>
                            <ListGroupItem className={'pb-2'}><Link to={'/array-formatter'}>Array Formatter</Link></ListGroupItem>
                        </div>
                    </Nav>
                </div>
            </Sticky>

        </>
    )
}