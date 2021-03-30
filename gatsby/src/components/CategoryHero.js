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
  line-height: 1.5;
  display: grid;
  grid-template-columns: repeat(9, minmax(0, 1fr));
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
  overflow: hidden;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.card};
  box-shadow: ${({ theme }) => theme.lineShadow};
  h1 {
    font-size: 32px;
  }
`;

const StyledContent = styled.div`
  grid-column: span 7 / span 7;
  padding: 2rem;
  p {
    white-space: pre-line;
  }
`;

const CategoryBg = styled.div`
  grid-column: span 2 / span 2;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.invertedText};
  font-size: 5rem;
  text-align: center;
  height: 100%;
  /* background: linear-gradient(to bottom, #3398fe, #663399); */
  &.js {
    background: ${({ theme }) => theme.jsGradient};
  }
  &.react {
    background: ${({ theme }) => theme.reactGradient};
  }
  &.vue {
    background: ${({ theme }) => theme.vueGradient};
  }
  &.gatsby {
    background: ${({ theme }) => theme.gatsbyGradient};
  }
  &.css {
    background: ${({ theme }) => theme.cssGradient};
  }
  &.sass {
    background: ${({ theme }) => theme.sassGradient};
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
