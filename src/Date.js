import React from "react";
import styled from 'styled-components';

const DateStyle = styled.p`
    margin-left: 75%;
    font-family: Arial, Helvetica, sans-serif;
`

function Date({date}) {
    return (
        <DateStyle>{date}</DateStyle>
    )
}

export default Date