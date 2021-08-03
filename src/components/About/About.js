import React from "react"

const About = ({ description }) => {

    return (
        <>
            {description ?
                <>
                {description}
                </> 
                :
                <>
                No Information to display
                </>
            }
        </>
    )
}

export default About