import React, { useState, useContext, useEffect } from "react"
import { getChannel } from "../../network"
import SearchForm from "../../components/SearchForm/SearchForm"
import { useHistory } from "react-router-dom"
import SearchResult from "../../components/SearchResult/SearchResult"
import { channelsContext } from "../../Context/ContextIndex"
import "./Home.css"

const Home = () => {
    const history = useHistory()
    const [search, setSearch] = useState("")
    const { channels, setChannels, setShowSearch } = useContext(channelsContext)

    const handleSearchChange = (e) => {
        e.preventDefault()
        setSearch(e.target.value)
    }
    const searchChannel = async (e) => {
        e.preventDefault()
        !search ? alert("Please enter Channel Name") :
            setChannels(await getChannel(search));
    }
    const handleChannelClick = (channelId) => {
        history.push(`/${channelId}`)
    }

    useEffect(() => {
        setShowSearch("none")
    }, [])

    return (
        <div className="home-content">
            <div className="home-search-form">
            <SearchForm
                handleSearchChange={handleSearchChange}
                searchChannel={searchChannel}
            />
            </div>
            <div className="search-results">
            <SearchResult
                channels={channels}
                handleChannelClick={handleChannelClick}
            />
            </div>
        </div>
    )
}

export default Home