import React, {useState} from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../styles/Theme';
import 'normalize.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import { HiSun, HiMoon } from 'react-icons/hi';

const ContentStyles = styled.div`
  margin: 0 auto;
  max-width: 70rem;
  min-height: 85vh;
`;
const Toggle = styled.div`
  line-height: 0;
  color: white;
  font-size: 1.5rem;
  height: 100%;
  cursor: pointer;

  @media (max-width: 768px) {
    display: inline-block;
    padding: 0 0 0 2rem;
  }
`;

const Layout = ({ children }) => {
  const [isDark, setIsDark] = useState("light")

return (
  <ThemeProvider theme={isDark === "dark" ? darkTheme : lightTheme}>
    <GlobalStyles />
    <Typography />
    <Nav>
    <Toggle
          onClick={() => setIsDark(isDark === "light" ? "dark" : "light")}
        >
          {isDark === "dark" ? <HiSun /> : <HiMoon/>} 
        </Toggle>
    </Nav>

    <ContentStyles>{children}</ContentStyles>
    <Footer />
  </ThemeProvider>
);
} 

export default Layout;
