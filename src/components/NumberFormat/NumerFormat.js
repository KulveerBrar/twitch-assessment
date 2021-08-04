import React from "react";

const NumberFormat = ({ valueToFormat }) => {

    const views = () => {
        if (valueToFormat > 999 && valueToFormat < 1000000) {
            return (valueToFormat / 1000).toFixed(1) + "K"
        } else if (valueToFormat > 1000000) {
            return (valueToFormat / 1000000).toFixed(1) + "M"
        } else {
            return valueToFormat;
        }
    }

    return (
        <>{valueToFormat ? views() : "0"}</>
    )
}

export default NumberFormat