import React from "react";
import styled from 'styled-components';

const FooterStyle = styled.footer`
    margin-top: 40px;
    border-top: 1px dashed white;

    p {
    padding-top: 15px;
    }
`

function Footer(props) {
    const {copyright} = props;

    return (
        <FooterStyle>
            <p>Copyright {copyright}</p>
        </FooterStyle>
    )
}

export default Footer