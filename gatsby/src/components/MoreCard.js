import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { BiRightArrowAlt } from 'react-icons/bi';
import { IoLogoVue } from 'react-icons/io5';
import {
  SiJavascript,
  SiReact,
  SiGatsby,
  SiCsswizardry,
  SiSass,
} from 'react-icons/si';

const StyledMoreCard = styled((props) => <Link {...props} />)`
  color: ${({ theme }) => theme.secondaryText};
  padding: 1rem;
  border-radius: 1rem;
  display: grid;
  grid-template-rows: 1fr 1fr;
  background: ${({ theme }) => theme.secondaryBody};
  box-shadow: ${({ theme }) => theme.lineShadow};
  transition: ${({ theme }) => theme.transition};
  p {
    text-align: end;
    margin-bottom: 0;
    align-self: end;
    svg {
      vertical-align: middle;
    }
  }
  &:hover {
    box-shadow: ${({ theme }) => theme.shadow};
    transition: ${({ theme }) => theme.transition};
    &.js {
      background: ${({ theme }) => theme.jsGradient};
      color: ${({ theme }) => theme.primaryText};
      h3 {
        color: ${({ theme }) => theme.primaryText};
      }
    }
    &.react {
      background: ${({ theme }) => theme.reactGradient};
      color: ${({ theme }) => theme.invertedText};
    }
    &.vue {
      background: ${({ theme }) => theme.vueGradient};
      color: ${({ theme }) => theme.invertedText};
    }
    &.gatsby {
      background: ${({ theme }) => theme.gatsbyGradient};
      color: ${({ theme }) => theme.invertedText};
    }
    &.css {
      background: ${({ theme }) => theme.cssGradient};
      color: ${({ theme }) => theme.invertedText};
    }
    &.sass {
      color: ${({ theme }) => theme.invertedText};
      background: ${({ theme }) => theme.sassGradient};
    }
    .icon {
      font-size: 58px;
      color: rgba(255, 255, 255, 0.5);
    }
    .arrow-icon {
      font-size: 1.5rem;
      transition: font-size 100ms cubic-bezier(0.5, 0, 0.2, 0);
    }
  }
`;

const Title = styled.div`
  font-weight: 700;
  h3 {
    display: inline-block;
    margin-left: 0.5rem;
  }
  .icon {
    font-size: 42px;
    vertical-align: middle;
    color: ${({ theme }) => theme.secondaryHover};
    transition: ${({ theme }) => theme.transition};
  }
`;

export default function MoreCard({ title, link, category }) {
  let icon;
  if (category === 'js') {
    icon = <SiJavascript className="icon" />;
  } else if (category === 'react') {
    icon = <SiReact className="icon" />;
  } else if (category === 'vue') {
    icon = <IoLogoVue className="icon" />;
  } else if (category === 'gatsby') {
    icon = <SiGatsby className="icon" />;
  } else if (category === 'css') {
    icon = <SiCsswizardry className="icon" />;
  } else if (category === 'sass') {
    icon = <SiSass className="icon" />;
  }
  return (
    <StyledMoreCard className={category} to={`/${link}`}>
      <Title>
        {icon}
        <h3>{title}</h3>
      </Title>
      <p>
        Ver todo <BiRightArrowAlt className="arrow-icon" />
      </p>
    </StyledMoreCard>
  );
}
