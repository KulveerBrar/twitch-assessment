import React, { useState, useEffect, useContext } from "react"
import { Navbar } from "react-bootstrap"
import SearchForm from "../../components/SearchForm/SearchForm"
import { useHistory } from "react-router-dom"
import { getChannel } from "../../network"
import { channelsContext } from "../../Context/ContextIndex"

const Header = () => {
    const history = useHistory()

    const [search, setSearch] = useState("")

    const { setChannels, showSearch, setShowSearch } = useContext(channelsContext)
    const handleSearchChangeHeader = (e) => {
        setSearch(e.target.value);
    }

    const searchChannelHeader = async () => {
        !search ? alert("Please enter Channel Name") :
            setChannels(await getChannel(search));
        history.push("/")
    }


    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#">Channels</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <div className={`d-${showSearch} mx-auto`}>
                    <SearchForm
                        handleSearchChange={handleSearchChangeHeader}
                        searchChannel={searchChannelHeader} />
                </div>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header
