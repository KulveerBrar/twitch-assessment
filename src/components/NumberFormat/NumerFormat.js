import React from "react";

const NumberFormat = ({ viewCount }) => {

    const views = () => {
        if (viewCount > 999 && viewCount < 1000000) {
            return (viewCount / 1000).toFixed(1) + "K"
        } else if (viewCount > 1000000) {
            return (viewCount / 1000000).toFixed(1) + "M"
        } else {
            return viewCount;
        }
    }

    return (
        <>{views()}</>
    )
}

export default NumberFormat