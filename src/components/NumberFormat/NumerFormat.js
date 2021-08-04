import React from "react";

const NumberFormat = ({ valueToFormat }) => {

    //------------------------------------ Function to format numbers ------------------------------------------//
    const views = () => {
        if (valueToFormat > 999 && valueToFormat < 1000000) {
            return (valueToFormat / 1000).toFixed(1) + "K"
        } else if (valueToFormat > 1000000) {
            return (valueToFormat / 1000000).toFixed(1) + "M"
        } else {
            return valueToFormat;
        }
    }

    //------------------ Return formatted number and "0" if there is no value to formatt ----------------------//
    return (
        <>{valueToFormat ? views() : "0"}</>
    )
}

export default NumberFormat