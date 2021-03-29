import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { HiMenu, HiSun, HiMenuAlt3 } from 'react-icons/hi';
import { IoLogoVue } from 'react-icons/io5';
import {
  SiJavascript,
  SiReact,
  SiGatsby,
  SiCsswizardry,
  SiSass,
} from 'react-icons/si';

import Logo from '../assets/svg/logo.svg';

const StyledNav = styled.nav`
  background: #2b2f36;
  margin-bottom: 0.7rem;
  padding: 2vh 5vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 100;

  .logo {
    display: inline-block;
    vertical-align: middle;
    width: 23vh;
  }
`;

const Toggle = styled.div`
  line-height: 0;
  color: white;
  display: ${(props) => (props.menu ? 'none' : 'inline-block')};
  font-size: 1.5rem;
  height: 100%;
  cursor: pointer;

  @media (max-width: 768px) {
    display: inline-block;
    padding: 0 0 0 2rem;
  }
`;
const Navbox = styled.div`
  box-sizing: border-box;
  display: inline-block;
  height: 100%;
  align-items: center;
  margin-left: 2rem;

  @media (max-width: 768px) {
    margin: 0;
    display: ${(props) => (props.open ? 'grid' : 'none')};
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: minmax(min-content, max-content);
    gap: 1rem;
    padding: 1rem 0.5rem;
    position: fixed;
    left: 0;
    top: 8vh;
    width: 100%;
    background-color: ${({ theme }) => theme.secondaryBody};
    transition: all 0.3s ease-in;
  }
`;

const NavLink = styled((props) => <Link {...props} />)`
  color: white;
  font-size: 0.9rem;
  font-weight: 400;
  border-radius: 1rem;
  padding: 0.5rem 1rem;
  margin-right: 2vw;
  transition: ${({ theme }) => theme.transition};
  &:hover {
      background: rgba(250, 250, 250, 0.05);
    }
    &[aria-current='page'] {
      color: ${({ theme }) => theme.body};
      background: rgba(250, 250, 250, 0.05);
    }
  @media (max-width: 768px) {
    color: ${({ theme }) => theme.primaryText};
    font-size: 1.2rem;
    font-weight: 500;
    background: ${({ theme }) => theme.card};
    margin: 0;
    padding: 1rem;
    border-radius: 8px;
    text-align: center;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    box-shadow: ${({ theme }) => theme.lineShadow};
      &:hover {
        color: ${({ theme }) => theme.link};
        background: ${({ theme }) => theme.card};
        box-shadow: ${({ theme }) => theme.shadow};
      }
      &[aria-current='page'] {
        color: ${({ theme }) => theme.secondaryText};
        background: ${({ theme }) => theme.card};
        box-shadow: ${({ theme }) => theme.shadow};
      }
    }
    .link-logo {
      font-size: 3rem;
      margin-bottom: 0.8rem;
      &.js {
        color: #ffd03a;
      }
      &.react {
        color: #5fdcfb;
      }
      &.vue {
        color: #3fb280;
      }
      &.gatsby {
        color: #684290;
      }
      &.css {
        color: #04a7e1;
      }
      &.sass {
        color: #c66394;
      }
    }
  }
`;

export default function Nav() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const html = document.querySelector('html')

  useEffect(() => {
    navbarOpen ? (html.style.overflow = 'hidden') : (html.style.overflow = 'visible')
  }, [navbarOpen]);

  return (
    <StyledNav>
      <div>
        <Link to="/">
          <Logo className="logo" />
        </Link>
        {navbarOpen ? (
          <Navbox open>
            <NavLink to="/js" onClick={() => setNavbarOpen(!navbarOpen)}>
              <SiJavascript className="link-logo js" />
              Javascript
            </NavLink>
            <NavLink to="/react" onClick={() => setNavbarOpen(!navbarOpen)}>
              <SiReact className="link-logo react" />
              React
            </NavLink>
            <NavLink to="/vue" onClick={() => setNavbarOpen(!navbarOpen)}>
              <IoLogoVue className="link-logo vue" />
              Vue
            </NavLink>
            <NavLink to="/gatsby" onClick={() => setNavbarOpen(!navbarOpen)}>
              <SiGatsby className="link-logo gatsby" />
              Gatsby
            </NavLink>
            <NavLink to="/css" onClick={() => setNavbarOpen(!navbarOpen)}>
              <SiCsswizardry className="link-logo css" />
              CSS
            </NavLink>
            <NavLink to="/sass" onClick={() => setNavbarOpen(!navbarOpen)}>
              <SiSass className="link-logo sass" />
              Sass
            </NavLink>
          </Navbox>
        ) : (
          <Navbox>
            <NavLink to="/js">Javascript</NavLink>
            <NavLink to="/react">React</NavLink>
            <NavLink to="/vue">Vue</NavLink>
            <NavLink to="/gatsby">Gatsby</NavLink>
            <NavLink to="/css">CSS</NavLink>
            <NavLink to="/sass">Sass</NavLink>
          </Navbox>
        )}
      </div>
      <div>
        <Toggle>
          <HiSun />
        </Toggle>
        <Toggle
          menu
          navbarOpen={navbarOpen}
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          {navbarOpen ? <HiMenuAlt3 /> : <HiMenu />}

        </Toggle>
      </div>
    </StyledNav>
  );
}
