import React from 'react';
import { NavDropdown, Nav } from 'react-bootstrap';
import MegaMenu from '../MegaMenu';

interface Props {
    icon?: JSX.Element;
    text?: string;
    path?: string;
    type?: 'megaMenu'
    subItems?: {
        text?: string;
        path?: string;
    }[];
    className?: string;
}

export default function NavItem({ text, path, subItems, className, icon, type }: Props) {

    return (
        <>
            {
                (subItems) ?
                    <NavDropdown title={<>{icon}{text}</>} className={className}>
                        {
                            (type === 'megaMenu') ?
                                <>
                                    <MegaMenu />
                                </>
                                :
                                subItems?.map((item, index) => (
                                    <React.Fragment key={index}>
                                        <NavDropdown.Item href={item?.path} >
                                            {item?.text}
                                        </NavDropdown.Item>
                                    </React.Fragment>
                                ))
                        }
                    </NavDropdown> :
                    <Nav.Link href={path} className={className}>
                        {text}
                    </Nav.Link>
            }
        </>
    )
}