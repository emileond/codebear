import React from 'react';
import styled from 'styled-components';
import 'normalize.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';

const ContentStyles = styled.div`
  margin: 0 auto;
  max-width: 60rem;
  min-height: 85vh;
`;

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <Typography />
    <Nav />
    <ContentStyles>{children}</ContentStyles>
    <Footer />
  </>
);

export default Layout;
