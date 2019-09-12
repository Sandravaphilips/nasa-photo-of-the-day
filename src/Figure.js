import React from "react";
import styled from 'styled-components';

const FigureStyle = styled.figure`
    img {
        border-radius: 15px;
    }
`

function Figure(props) {
    const {src, alt} = props;

    return (
        <FigureStyle>
            <img src={src} alt={alt} />
        </FigureStyle>
    )
}

export default Figure