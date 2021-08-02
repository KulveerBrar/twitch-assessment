import React from "react";
import { useParams } from "react-router-dom"

const Profile = () => {
    let { channel } = useParams()
    return (
        <>
        {console.log(channel)}
        </>
    )
}

export default Profile