import React, { useState, useEffect, useContext } from "react"
import { useParams } from "react-router-dom"
import { getChannelInfo, getChannelVideos } from "../../network"
import { Tabs, Tab } from "react-bootstrap"
import "../Profile/Profile.css"
import About from "../../components/About/About"
import TwitchVideos from "../../components/TwitchVideos/TwitchVideos"
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer"
import { channelsContext } from "../../Context/ContextIndex"

const Profile = () => {
    let { channelId } = useParams()
    const { setShowSearch } = useContext(channelsContext)
    const [profile, setProfile] = useState("")
    const [videos, setVideos] = useState([])
    const [videoUrl, setVideoUrl] = useState("")

    const onVideoCardClicked = (e) => {
        setVideoUrl(e)
    }

    useEffect(() => {
        (async () => {
            const result = await getChannelInfo(channelId)
            setProfile(result[0])
            const videoResult = await getChannelVideos(channelId)
            setVideos(videoResult)
            setVideoUrl(videoResult[0] && videoResult[0].url)
            setShowSearch("flex")
        })()
    }, [])

    return (
        <>
            {profile &&
                <>
                    <VideoPlayer
                        profileImageUrl={profile.profile_image_url}
                        displayName={profile.display_name}
                        videoUrl={videoUrl && videoUrl}
                    />
                    <Tabs defaultActiveKey="videos">
                        <Tab eventKey="about" title="About">
                            <About
                                description={profile.description}
                            />
                        </Tab>
                        <Tab eventKey="videos" title="Videos">
                            <TwitchVideos
                                videos={videos[0] && videos}
                                onVideoCardClicked={onVideoCardClicked}
                            />
                        </Tab>
                    </Tabs>
                </>
            }
        </>
    )
}

export default Profile