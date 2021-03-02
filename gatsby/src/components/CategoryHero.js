import React from 'react';
import styled from 'styled-components';
import { IoLogoVue } from 'react-icons/io5';
import {
  SiJavascript,
  SiReact,
  SiGatsby,
  SiCsswizardry,
  SiSass,
} from 'react-icons/si';

const StyledHero = styled.div`
  color: ${({ theme }) => theme.primaryText};
  display: grid;
  grid-template-columns: repeat(9, minmax(0, 1fr));
  align-items: center;
  width: 100%;
  margin-bottom: 2rem;
  overflow: hidden;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.card};
  /* background: linear-gradient(
    180deg,
    rgba(33, 37, 41, 1) 0%,
    rgba(35, 73, 108, 1) 100%
  ); */
  box-shadow: ${({ theme }) => theme.lineShadow};
  h1 {
    font-size: 32px;
  }
`;

const StyledContent = styled.div`
  grid-column: span 7 / span 7;
  padding: 2rem;
`;

const CategoryBg = styled.div`
  grid-column: span 2 / span 2;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.card};
  font-size: 5rem;
  text-align: center;
  height: 100%;
  /* background: linear-gradient(to bottom, #3398fe, #663399); */
  &.js {
    background: linear-gradient(to bottom, #ffcf39, #ffa505);
  }
  &.react {
    background: linear-gradient(to bottom, #61dafb, #2c8cd2);
  }
  &.vue {
    background: linear-gradient(to bottom, #41b882, #10456d);
  }
  &.gatsby {
    background: linear-gradient(to bottom, #6b4495, #400a68);
  }
  &.css {
    background: linear-gradient(to bottom, #3398fe, #0486d4);
  }
  &.sass {
    background: linear-gradient(to bottom, #cd6a9e, #912f60);
  }
`;

export default function CategoryHero({ h1, p, category }) {
  let icon;
  if (category === 'js') {
    icon = <SiJavascript />;
  } else if (category === 'react') {
    icon = <SiReact />;
  } else if (category === 'vue') {
    icon = <IoLogoVue />;
  } else if (category === 'gatsby') {
    icon = <SiGatsby />;
  } else if (category === 'css') {
    icon = <SiCsswizardry />;
  } else if (category === 'sass') {
    icon = <SiSass />;
  }
  return (
    <StyledHero>
      <CategoryBg className={category}>{icon}</CategoryBg>
      <StyledContent>
        <h1>{h1}</h1>
        <p>{p}</p>
      </StyledContent>
    </StyledHero>
  );
}
