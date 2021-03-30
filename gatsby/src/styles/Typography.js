import { createGlobalStyle } from 'styled-components';
import loraFont from '../assets/fonts/lora-variable.woff2';

const Typography = createGlobalStyle`

@font-face {
	font-family: 'Lora';
	src: url(${loraFont}) format('woff2');
}

  html {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: ${({ theme }) => theme.text};;
  }
  p, li {
    letter-spacing: 0.5px;
  }
  h1,h2,h3,h4,h5,h6 {
    margin: 0;
  }
  h1 {
    font-size: 2.8rem;
    line-height: 1.25;
    overflow-wrap: break-word;
    font-weight: 600;
    margin-bottom: 0.5rem;
    @media (max-width: 768px) {
      font-size: 2.4rem;
  }

  }
  h2 {
    font-size: 1.7rem;
    line-height: 1.2;
    font-weight: 600;
    margin-bottom: 1rem;
  }
  a {
    color: var(--black);
    text-decoration: none;
  }
  mark, .mark {
    background: var(--yellow);
    padding: 0 2px 2px 2px;
    margin: 0;
    display: inline;
    line-height: 1;
  }
  .center {
    text-align: center;
  }
  .tilt {
    transform: rotate(-2deg);
  }
  .text-xs {
    font-size: .75rem;
    line-height: 1rem;
  }
`;

export default Typography;
