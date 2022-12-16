import React from 'react';
import { Nav, InputGroup, Form, Button } from 'react-bootstrap';
import useInput from '../../../hooks/use-input';
import Link from '../../atoms/Link';
import styles from './NavSearch.module.scss';

interface Props {
    active?: boolean;
    onClick?: () => void;
    onFocusOut?: () => void;
    className?: string;
};

export default function NavSearch({ active, onClick, onFocusOut, className }: Props) {

    const { value, bind } = useInput('')
    const [isFocusOutDisabled, setIsFocusOutDisabled] = React.useState(false);
    const onBlur = (isFocusOutDisabled) ? () => null : onFocusOut;
    const searchPath = `https://www.sevencorners.com/resources/general-search-results?indexCatalogue=general&wordsMode=AllWords&searchQuery=${value}`;

    return (
        <>
            {
                (active) ?
                    <InputGroup size="sm" onBlur={onBlur}>
                        <Form.Control
                            {...bind}
                            placeholder="Type to Search"
                            aria-label="Type to Search"
                            aria-describedby="basic-addon1"
                            autoFocus
                            onKeyDown={(e) => {
                                if (e.code === 'Enter' && onClick) {
                                    window.location.href = searchPath;
                                }
                            }}
                        />
                        <Button
                            className={styles.searchBtn}
                            id="button-addon1"
                            onMouseEnter={() => setIsFocusOutDisabled(true)}
                            onMouseLeave={() => setIsFocusOutDisabled(false)}
                        >
                            <Link
                                path={searchPath}
                            >
                                <i className="fa-solid fa-magnifying-glass text-white"></i>
                            </Link>
                        </Button>
                    </InputGroup> :
                    <Nav.Link className={`text-white ${className}`} onClick={onClick}>
                        <i className="fa-solid fa-magnifying-glass pe-2" style={{ color: '#F5852B' }}></i>
                        Search
                    </Nav.Link>
            }
        </>
    )
}