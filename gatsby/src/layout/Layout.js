import React, {useState} from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../styles/Theme';
import 'normalize.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import { HiSun, HiMoon } from 'react-icons/hi';
import { ImFontSize } from "react-icons/im";
import ReactTooltip from 'react-tooltip';

const StyledReactTooltip = styled((props) => <ReactTooltip {...props} />)`
  color: ${({ theme }) => theme.primaryText} !important;
  font-size: 1rem !important;
  opacity: .9 !important;
  background: ${({ theme }) => theme.secondaryCard} !important;
    &:after {
      border-left-color: ${({ theme }) => theme.secondaryCard} !important;
    }
`

const ContentStyles = styled.div`
  margin: 0 auto;
  max-width: 70rem;
  min-height: 85vh;
`;
const Toggle = styled.div`
  display: inline-block;
  margin: 0 0 0 2rem;
  line-height: 0;
  color: white;
  font-size: 1.5rem;
  height: 100%;
  cursor: pointer;
`;

const Layout = ({ children }) => {
  const [isDark, setIsDark] = useState("light")
  const [bigText, setBigText] = useState(false)

return (
  <ThemeProvider theme={isDark === "dark" ? darkTheme : lightTheme}>
    <GlobalStyles bigText={bigText}/>
    <Typography />
    <Nav>
    <Toggle data-tip="Toggle large font size"
          onClick={() => setBigText(bigText === false ? true : false)}
        >
          <ImFontSize />
    </Toggle>
    <StyledReactTooltip />
    <Toggle data-tip="Toggle dark mode"
          onClick={() => setIsDark(isDark === "light" ? "dark" : "light")}
        >
          {isDark === "dark" ? <HiSun /> : <HiMoon/>} 
        </Toggle>
        <StyledReactTooltip />

    </Nav>

    <ContentStyles>{children}</ContentStyles>
    <Footer />
  </ThemeProvider>
);
} 

export default Layout;
