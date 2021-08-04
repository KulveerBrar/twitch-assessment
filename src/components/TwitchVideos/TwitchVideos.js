import React from "react"
import "./TwitchVideos.css"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import NumberFormat from "../NumberFormat/NumerFormat"
import { Link } from "react-scroll"

const TwitchVideos = ({ videos, onVideoCardClicked }) => {

    //---------------------------------- To make carousel responsive -------------------------------------------//
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    }

    //------ Return video's thumbnails, formatted number of views, duration and channel name in Carousel ------//
    //------------------- In case of empty result from api return "No Video Found" ----------------------------//
    return (
        <>
            {videos ?
                <Carousel
                    className="video-carousel"
                    responsive={responsive}
                    ssr={true}
                    infinite={true}
                >
                    {videos.map((a, index) =>
                        <div key={index} className="card video-card">
                            <Link to="twitch-video">
                                <div className="video-thumbnail">
                                    <img className="card-img-top" src={a.thumbnail_url.replace("%{width}", "320").replace("%{height}", "180")} alt="Card cap" width="320"
                                        height="180" onClick={() => { onVideoCardClicked(a.url); }} />
                                    <div className="view-count">
                                        <NumberFormat
                                            valueToFormat={a.view_count} /> Views
                                    </div>
                                    <div className="video-duration">
                                        {a.duration}
                                    </div>
                                </div>
                            </Link>
                            <div className="card-body">
                                <Link to="twitch-video"><h6 className="card-title text-dark" onClick={() => { onVideoCardClicked(a.url); }}>{a.title}</h6></Link>
                                <p className="card-text text-dark">{a.user_name}</p>
                            </div>
                        </div>
                    )}
                </Carousel>
                :
                <div className="about-container">No Videos Found</div>
            }
        </>
    )
}

export default TwitchVideos