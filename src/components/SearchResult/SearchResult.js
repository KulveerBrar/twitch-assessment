import React from "react";
import ListGroup from "react-bootstrap/ListGroup"

const SearchResult = ({ channels, handleChannelClick }) => {

    return (
        <ListGroup>
            {!channels ?
                <p> No Results Found </p> :
                channels.map((a, index) => (
                    <ListGroup.Item key={index} onClick={() => handleChannelClick(a.id)}>
                        {a.display_name}
                    </ListGroup.Item>))}
        </ListGroup>
    )
}

export default SearchResult