import React from "react";

import {Button, InputGroup, FormControl} from "react-bootstrap";

import s from './style.module.css'


const CitySearch = () => {
    return (
        <InputGroup className={s.root}>
            <FormControl
                placeholder="City"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
            />
            <Button variant="outline-secondary" id="button-addon2">
                Search
            </Button>
        </InputGroup>
    )
}

export default CitySearch