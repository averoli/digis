import React, { useState } from 'react';

import {Button, InputGroup, FormControl} from "react-bootstrap";

import s from './style.module.css'

const Index = ({ onSearch }) => {
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleClick = () => {
        onSearch && onSearch(value);
    }

    return (
        <InputGroup className={s.root}>
            <FormControl
                type="text"
                name="city"
                placeholder="City"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                value={value}
                onChange={handleChange}
            />
            <Button variant="outline-secondary" id="button-addon2" onClick={handleClick}>
                Search
            </Button>
        </InputGroup>
    )
}

export default Index
