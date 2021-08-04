import React from "react"
import NumberFormat from "../NumberFormat/NumerFormat"
import "./About.css"

const About = ({ description, followers }) => {

    return (
        <div>
            {description ?
                <p className="about-followers">
                    <NumberFormat
                        valueToFormat={followers} /> followers
                    <br></br>
                    <br></br>
                    {description}
                </p>
                :
                <p>
                    No Information to display
                </p>
            }
        </div>
    )
}

export default About