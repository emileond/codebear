import React from 'react';
import styled from 'styled-components';
import NotFoundImg from '../assets/images/404.png';
import { Link } from 'gatsby';

const StyledNotFound = styled.div`
margin: 0 auto;
width: 100%;
max-width: 560px;
height: 52.5vw;
max-height: 295px;
background-image: url(${NotFoundImg});
background-size: cover;
`

const StyledLink = styled((props) => <Link {...props} />)`
  color: ${({ theme }) => theme.card};
  padding: 1rem 2rem;
  background-color: ${({theme}) => theme.navBg};
  border-radius: .5rem;
  transition: ${({theme}) => theme.fastTransition};
  &:hover {
    transition: ${({theme}) => theme.fastTransition};
    background-color: ${({theme}) => theme.linkHover};
  }
`

const Styled404 = styled.div`
    margin: 0 auto;
    text-align: center;
    h1 {
      font-size: 2.4rem;
      margin-top: 2.4rem;
      margin-bottom: 3rem;
    }
`

const NotFound = () => (
  <Styled404>
    <StyledNotFound/>
    <h1>Ups! Parece esta página no existe.</h1>
    <StyledLink to="/">
      Regresar a Inicio
    </StyledLink>
  </Styled404>
);

export default NotFound;
