import React from "react";
import "./SearchResult.css"
import { ListGroup, Image } from "react-bootstrap"

const SearchResult = ({ channels, handleChannelClick }) => {

    //--------------------Returns name and profile picture from search results in List --------------------------//
    //--------------------- If result from search is empty returns "No Results Found" ---------------------------//
    return (
        <ListGroup>
            {!channels ?
                <p> No Results Found </p> :
                channels.map((a, index) => (
                    <ListGroup.Item className="result-item" key={index} onClick={() => handleChannelClick(a.id)}>
                        <Image src={a.thumbnail_url} roundedCircle className="logo-image" />
                        <span className="result-name">
                            {a.display_name}
                        </span>
                    </ListGroup.Item>))}
        </ListGroup>
    )
}

export default SearchResult