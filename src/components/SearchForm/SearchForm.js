import React from "react";
import { Form, FormControl, Button } from 'react-bootstrap'

const SearchForm = ({ handleSearchChange, searchChannel }) => {

    return (
        <Form className="d-flex">
            <FormControl
                type="search"
                placeholder="Search Channels"
                className="mr-2"
                aria-label="Search"
                onChange={handleSearchChange}
            />
            <Button variant="outline-primary" type="submit" onClick={searchChannel}>Search</Button>
        </Form>
    )
}

export default SearchForm