import React from "react";
import styled from 'styled-components';

const ParagraphStyle = styled.div`
    font-family: cursive;
    text-align: start;
    margin-top: 30px;
`

function Paragraph({text}) {
    return (
        <ParagraphStyle>{text}</ParagraphStyle>
    )
}

export default Paragraph