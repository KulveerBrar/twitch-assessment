import React, { useState } from "react"
import { getChannel } from "../../network"
import SearchForm from "../../components/SearchForm/SearchForm"
import { useHistory } from "react-router-dom"
import SearchResult from "../../components/SearchResult/SearchResult"

const Home = () => {
    const history = useHistory()
    const [search, setSearch] = useState("")
    const [channels, setChannels] = useState([])

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };
    const searchChannel = async () => {
        !search ? alert("Please enter Channel Name") :
            setChannels(await getChannel(search))
    }
    const handleChannelClick = (channelId) => {
        history.push(`/${channelId}`)
    }

    return (
        <>
            <SearchForm
                handleSearchChange={handleSearchChange}
                searchChannel={searchChannel}
            />
            <SearchResult
                channels={channels}
                handleChannelClick={handleChannelClick}
            />
        </>
    )
}

export default Home