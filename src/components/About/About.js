import React from "react"
import NumberFormat from "../NumberFormat/NumerFormat"
import "./About.css"

const About = ({ description, followers }) => {

    //---------------To return Channel's description and number of followers(formatted value)------------------//
    //-------------------- In case of no description return "No Information to display" -----------------------//
    return (
        <div className="about-container">
            {description ?
                <p className="about-content">
                    <span className="about-followers"> <NumberFormat
                        valueToFormat={followers} /> followers </span>
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