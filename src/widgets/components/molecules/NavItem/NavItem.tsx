import React from 'react';
import { NavDropdown, Nav } from 'react-bootstrap';

interface Props {
    icon?: JSX.Element;
    text?: string;
    path?: string;
    subItems?: {
        text?: string;
        path?: string;
    }[];
    className?: string;
}

export default function NavItem({ text, path, subItems, className, icon }: Props) {

    return (
        <>
            {
                (subItems) ?
                    <NavDropdown title={<>{icon}{text}</>} className={className}>
                        {
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