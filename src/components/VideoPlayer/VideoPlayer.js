import React from "react"
import ReactPlayer from "react-player"
import { Container, Row, Col, Card, Image } from "react-bootstrap"
import "./VideoPlayer.css"
import NumberFormat from "../NumberFormat/NumerFormat"

const VideoPlayer = ({ displayName, profileImageUrl, videoUrl, followers }) => {

    return (
        <>
            <Container>
                <Row>
                    <Col xs={6} className="user-image">
                        <div>
                            <Image src={profileImageUrl} roundedCircle className="logo-image" />
                        </div>
                    </Col>
                    <Col xs={6}>
                        <div className="channel-name">
                            {displayName}
                           
                            </div>
                            <div className="channel-followers">
                            <NumberFormat
                                valueToFormat={followers}
                            /> followers
                        </div>
                    </Col>
                </Row>
            </Container>
            {videoUrl ?
                <Card>
                    <ReactPlayer
                        playing
                        controls
                        url={videoUrl}
                        className="twitch-video"
                    />
                </Card> : ""
            }

        </>
    )
}

export default VideoPlayer