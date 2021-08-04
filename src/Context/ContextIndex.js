import React, { useState, useEffect } from 'react';
import { useLocation} from "react-router-dom"

export const channelsContext = React.createContext()

const ContextIndex = (props) => {
    const location = useLocation();
    const [channels, setChannels] = useState([])
    const [showSearch, setShowSearch] = useState("none")

    useEffect(() => {
        location.pathname === "/" ? setShowSearch("none") : setShowSearch("flex")
    }, [])

    return (
        <channelsContext.Provider
            value={{
                channels,
                setChannels,
                showSearch, 
                setShowSearch
            }}>
            {props.children}
        </channelsContext.Provider>
    );
};

export default ContextIndex;
