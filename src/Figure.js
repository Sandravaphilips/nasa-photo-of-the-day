import React from "react";

function Figure(props) {
    const {src, alt} = props;

    return (
        <figure>
            <img src={src} alt = {alt} />
        </figure>
    )
}

export default Figure