import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  border-top: 1px solid ${({ theme }) => theme.border};
  background: ${({ theme }) => theme.secondaryBody};
  padding: 1rem 0;
`;

const Footer = () => (
  <StyledFooter>
    <p> 👋 Made by me - {new Date().getFullYear()}</p>
  </StyledFooter>
);

export default Footer;
