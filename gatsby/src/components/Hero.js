import React from 'react';
import styled from 'styled-components';
import HeroImg from '../assets/images/hero-img.png'

const StyledHero = styled.div`
  color: ${({ theme }) => theme.invertedText};
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  width: 100%;
  height: 45vh;
  margin-bottom: 2rem;
  overflow: hidden;
  border-radius: 1rem;
  background-image: url(${HeroImg});
  background-size: cover;
  background-color: rgba(33, 37, 41, .2);
  background-blend-mode: overlay;
  box-shadow: ${({ theme }) => theme.lineShadow};
  h1 {
    margin-bottom: 2rem;
    /* text-shadow: 2px 2px 1rem #2b2f36; */
  }
  p {
    font-size: 1.2rem;
    max-width: 680px;
    line-height: 24px;
    /* text-shadow: 2px 2px .5rem #2b2f36; */
  }
`;

export default function Hero({ h1, p }) {
  return (
    <StyledHero>
      <h1>{h1}</h1>
      <p>{p}</p>
    </StyledHero>
  );
}
