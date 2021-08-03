import React from "react"
import ReactPlayer from "react-player"
import { Container, Row, Col, Card, Image } from "react-bootstrap"
import "./VideoPlayer.css"

const VideoPlayer = ({ displayName, profileImageUrl, videoUrl }) => {

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
                        <div className="channel-name">{displayName}</div>
                    </Col>
                </Row>
            </Container>
            <Card>
                <ReactPlayer
                    controls
                    url={videoUrl}
                    className="twitch-video"
                />
            </Card>

        </>
    )
}

export default VideoPlayer