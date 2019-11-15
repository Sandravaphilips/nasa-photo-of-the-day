import React from "react";
import styled from 'styled-components';

const NavigationStyle = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid white;
    /* border-top: 1px solid white; */
    height: 40px;
    padding-top: 10px;

    a {
        text-decoration: none;
        border-right: 1px solid white;
        color: white;
        text-align: center;
        width: 100%;

        &:hover {
            color: #0066B3;
        }
    }

    a:last-child {
        border-right: none;
        border-left: 1px solid white;
    }

    /* img {
        width: 100%;
    } */
`

export default  function Navigation(props) {
    const {home, services, about, nasaWebsite} = props;
    return (
        <NavigationStyle>
            {/* <img src={logo} alt={alt}/> */}
            <a href={home}>Home</a>
            <a href={services}>Services</a>
            <a href={about}>About</a>
            <a href={nasaWebsite}>Go to NASA's Website</a>
        </NavigationStyle>
    )
}