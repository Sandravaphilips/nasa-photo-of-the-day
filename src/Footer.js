import React from "react";

function Footer(props) {
    const {copyright} = props;

    return (
        <footer>
            <p>{copyright}</p>
        </footer>
    )
}

export default Footer