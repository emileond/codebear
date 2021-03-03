import React from 'react';
import styled from 'styled-components';

const StyledHero = styled.div`
  color: ${({ theme }) => theme.invertedText};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  width: 100%;
  height: 45vh;
  margin-bottom: 2rem;
  overflow: hidden;
  border-radius: 1rem;
  background: rgb(33, 37, 41);
  background: linear-gradient(
    180deg,
    rgba(33, 37, 41, 1) 0%,
    rgba(35, 73, 108, 1) 100%
  );
  box-shadow: ${({ theme }) => theme.lineShadow};
  h1 {
    margin-bottom: 2rem;
  }
  p {
    font-size: 1.1rem;
    max-width: 680px;
    line-height: 24px;
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
