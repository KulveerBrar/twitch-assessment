import React, { useState, useContext } from "react"
import { Navbar } from "react-bootstrap"
import SearchForm from "../../components/SearchForm/SearchForm"
import { useHistory } from "react-router-dom"
import { getChannel } from "../../network"
import { channelsContext } from "../../Context/ContextIndex"
import "./Header.css"

const Header = () => {
    const history = useHistory()
    const [search, setSearch] = useState("")

    //----------------------- To access "setChannels", "showSearch" from Context -------------------------------//
    const { setChannels, showSearch } = useContext(channelsContext)

    //------------------------ To Store value entered in search form in "search" -------------------------------//
    const handleSearchChangeHeader = (e) => {
        setSearch(e.target.value);
    }

    //----------- Call API and store array of channels in "channels" and send user to home page ---------------//
    const searchChannelHeader = async (e) => {
        e.preventDefault();
        !search ? alert("Please enter Channel Name") :
            setChannels(await getChannel(search));
        history.push("/")
    }

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/" className="brand-name">Twitch Channels</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <div className={`header-search-form d-${showSearch}`}>
                    <SearchForm
                        handleSearchChange={handleSearchChangeHeader}
                        searchChannel={searchChannelHeader} />
                </div>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header
