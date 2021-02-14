import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Logo from '../assets/images/logo.svg';

const StyledNav = styled.nav`
  background: #309f6b;
  margin-bottom: 2rem;
  padding: 2vh 10vw;

  display: flex;
  align-items: center;
  justify-content: space-between;
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    vertical-align: middle;
  }
  li {
    display: inline-block;
    margin-right: 2rem;
  }
  a {
    font-size: 1rem;
    color: white;
    border-radius: 1rem;
    font-weight: 400;
    padding: 0.65rem 1rem;

    &:hover {
      background: rgba(250, 250, 250, 0.1);
    }
    &[aria-current='page'] {
      color: ${({ theme }) => theme.body};
      background: rgba(250, 250, 250, 0.1);
    }
  }
  .logo {
    display: inline-block;
    vertical-align: middle;
    width: 23vh;
  }
`;

const Nav = () => (
  <StyledNav>
    <ul>
      <li>
        <Link to="/">
          <Logo className="logo" />
        </Link>
      </li>
      <li>
        <Link to="/js">Javascript</Link>
      </li>
      <li>
        <Link to="/react">React</Link>
      </li>
      <li>
        <Link to="/gatsby">Gatsby</Link>
      </li>
      <li>
        <Link to="/css">CSS</Link>
      </li>
      <li>
        <Link to="/sass">Sass</Link>
      </li>
    </ul>
    <ul>
      <li>
        <Link to="/nothing">Theme</Link>
      </li>
      <li>
        <Link to="/notmuch">Social</Link>
      </li>
    </ul>
  </StyledNav>
);

export default Nav;
