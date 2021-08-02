import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { getChannelInfo } from "../../network";

const Profile = () => {
    let { channel } = useParams()
    const [profile, setProfile] = useState("")

    useEffect(() => {
        (async () => {
            const result = await getChannelInfo(channel)
            setProfile(result)
        })()
    }, [])

    return (
        <>
        {console.log(profile)}
            {/* Name: {profile.broadcaster_name} */}
        </>
    )
}

export default Profile