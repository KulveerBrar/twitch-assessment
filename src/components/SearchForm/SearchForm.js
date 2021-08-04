import React from "react";
import { Form, FormControl, Button } from "react-bootstrap"
import "./SearchForm.css"

const SearchForm = ({ handleSearchChange, searchChannel }) => {

    return (
        <Form className="d-flex">
            <FormControl
                type="search"
                placeholder="Search Channels"
                className="search-input"
                aria-label="Search"
                onChange={handleSearchChange}
            />
            <Button variant="outline-primary" type="submit" onClick={searchChannel}>Search</Button>
        </Form>
    )
}

export default SearchForm