import React from 'react';
import useNonInitialEffect from '../../../hooks/use-non-initial-effect';
import { InputGroup, Form, DropdownButton, Dropdown, Button } from 'react-bootstrap';

interface Props {
    mapFromValue: string;
    mapToList: string[];
    selectedMapToItems: { [key: string]: string };
    onChange: (mapedObj: { [key: string]: string }) => void;
};

export default function MapToItem({ mapFromValue, mapToList, onChange, selectedMapToItems }: Props) {

    const [selectedMapTo, setSelectedMapTo] = React.useState('');

    useNonInitialEffect(() => {
        if (selectedMapTo) {
            onChange({ [selectedMapTo]: mapFromValue })
        }
    }, [selectedMapTo]);

    return (
        <>
            <InputGroup className="mb-3">
                <Form.Control disabled value={mapFromValue} onChange={() => null} />
                {
                    (selectedMapTo.length === 0) ? null :
                        <>
                            <Button variant={'secondary'}>
                                <i className="fa-solid fa-arrow-right"></i>
                            </Button>
                            <Form.Control disabled value={selectedMapTo} onChange={() => null} />
                        </>
                }
                <DropdownButton
                    variant="outline-secondary"
                    title={'Map To'}
                    align="end"
                >
                    <div style={{ maxHeight: '300px', overflowX: 'scroll' }}>
                        {
                            mapToList.map((item, index) => (
                                <React.Fragment key={index}>
                                    <Dropdown.Item disabled={(Object.hasOwn(selectedMapToItems, item)) ? true : false} onClick={() => setSelectedMapTo(item)}>{item}</Dropdown.Item>
                                </React.Fragment>
                            ))
                        }
                    </div>
                </DropdownButton>

            </InputGroup>
        </>
    )
}