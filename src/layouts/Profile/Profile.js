import React, { useState, useEffect, useContext } from "react"
import { useParams } from "react-router-dom"
import { getChannelInfo, getChannelVideos, getFollowers } from "../../network"
import { Tabs, Tab } from "react-bootstrap"
import "../Profile/Profile.css"
import About from "../../components/About/About"
import TwitchVideos from "../../components/TwitchVideos/TwitchVideos"
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer"
import { channelsContext } from "../../Context/ContextIndex"

const Profile = () => {
    const [profile, setProfile] = useState("")
    const [videos, setVideos] = useState([])
    const [videoUrl, setVideoUrl] = useState("")
    const [followers, setFollowers] = useState("")

    //---------------------------- To access channelId from URL parameters  ------------------------------------//
    let { channelId } = useParams()

    //------------------------------ To access setShowSearch from Context --------------------------------------//
    const { setShowSearch } = useContext(channelsContext)
   
    //------------------- To Play selected video, store selected video url in "videoUrl" ------------------------//
    const onVideoCardClicked = (e) => {
        setVideoUrl(e)
    }

    //----------------------------- Call APIs to get Channel Info when page loads -------------------------------//
    useEffect(() => {
        (async () => {
            const result = await getChannelInfo(channelId)
            setProfile(result[0])
            const videoResult = await getChannelVideos(channelId)
            setVideos(videoResult)
            setVideoUrl(videoResult[0] && videoResult[0].url)
            const followersResult = await getFollowers(channelId)
            setFollowers(followersResult)
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
                        followers={followers && followers.total}
                    />
                    <div className="tabs-container">
                        <Tabs defaultActiveKey="videos" className="tabs-content">
                            <Tab eventKey="about" title="About">
                                <About
                                    description={profile.description}
                                    followers={followers && followers.total}
                                />
                            </Tab>
                            <Tab eventKey="videos" title="Videos">
                                <TwitchVideos
                                    videos={videos[0] && videos}
                                    onVideoCardClicked={onVideoCardClicked}
                                />
                            </Tab>
                        </Tabs>
                    </div>
                </>
            }
        </>
    )
}

export default Profile