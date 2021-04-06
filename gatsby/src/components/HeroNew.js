import React from 'react';
import styled from 'styled-components';
import HeroImg from '../assets/images/hero-img.png';
import Tilt from 'react-tilt';

const StyledTilt = styled((props) => <Tilt {...props} />)`
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;

`
const HeroCardTop = styled.div`
    z-index: 1000;
    top: 200px;
    bottom: 0px;
    left: 0px;
    right: 0px;
`

const HeroCard = styled.div`
    background: white url(${HeroImg}) 50% 50%;
    background-size: 100%;
`

export default function HeroNew({}) {

    return (
        <StyledTilt className="Tilt" ptions={{ max : 5, perspective: 1000, scale: 1, reverse: true }}>
            <HeroCardTop>
                <HeroCard>
                <h1>This is a new hero</h1>
                <p>This is a paragraph :)</p>
                </HeroCard>
            </HeroCardTop>
        </StyledTilt>
    );
}