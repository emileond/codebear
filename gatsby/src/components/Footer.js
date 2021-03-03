import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  border-top: 1px solid ${({ theme }) => theme.border};
  background: ${({ theme }) => theme.secondaryBody};
  padding: 1rem 0;
  text-align: center;
`;

const Footer = () => (
  <StyledFooter>
    <p>
      {' '}
      ©{new Date().getFullYear()} -{' '}
      <a href="https://emiliosanchez.dev" rel="noreferrer" target="_blank">
        Emilio Sanchez
      </a>
    </p>
  </StyledFooter>
);

export default Footer;
