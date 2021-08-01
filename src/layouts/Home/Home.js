import React, { useState } from "react";
import { getChannel } from "../../network";
import { Form, FormControl, Button } from 'react-bootstrap'

const Home = () => {

    const [search, setSearch] = useState("");
    const [channels, setChannels] = useState([])

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    const searchChannel = async () => {
        const result = await getChannel(search)
        setChannels(result)
    }
    return (
        <>
        <Form className="d-flex">
            <FormControl
                type="search"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
                onChange={handleSearchChange}
            />
            <Button variant="outline-primary" onClick={searchChannel}>Search</Button>
        </Form>

        {channels.map((a, index) => (<p key={index}>{a.display_name}</p>))}
        </>
    )
}

export default Home