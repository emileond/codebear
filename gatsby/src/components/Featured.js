import React from 'react';
import styled from 'styled-components';
import Grid from './Grid';
import { Link } from 'gatsby';

const FeaturedPost = styled((props) => <Link {...props} />)`
  grid-column: span 2 / span 2;
  padding: 1rem;
  border-radius: 1rem;
  text-align: left;
  display: flex;
  flex-flow: column;
  align-items: left;
  justify-content: center;
  min-height: 120px;
  box-shadow: ${({ theme }) => theme.lineShadow};
  transition: ${({ theme }) => theme.transition};
  span {
    margin-right: 1rem;
  }
  &.js {
    background: linear-gradient(
      to bottom,
      #ffcf39 5px,
      ${({ theme }) => theme.card} 0
    );
  }
  &.react {
    background: linear-gradient(
      to bottom,
      #61dafb 4px,
      ${({ theme }) => theme.card} 0
    );
    }
  }
  &.vue {
    background: linear-gradient(
      to bottom,
      #41b882 5px,
      ${({ theme }) => theme.card} 0
    );
  }
  &.gatsby {
    background: linear-gradient(
      to bottom,
      #6b4495 5px,
      ${({ theme }) => theme.card} 0
    );
  }
  &.css {
    background: linear-gradient(
      to bottom,
      #3398fe 5px,
      ${({ theme }) => theme.card} 0
    );
  }
  &.sass {
    background: linear-gradient(
      to bottom,
      #cd6a9e 5px,
      ${({ theme }) => theme.card} 0
    );
  }
  .post-title {
    font-weight: 700;
  }
  .category {
    color: ${({ theme }) => theme.secondaryText};
    text-transform: uppercase;
    font-weight: 600;
    margin-bottom: 0.25rem;
  }
  .caption {
    color: ${({ theme }) => theme.secondaryText};
    margin-top: 0.25rem;
    color: rgba(75, 85, 99, 1);
  }
  &:hover {
    box-shadow: ${({ theme }) => theme.shadow};
    transition: ${({ theme }) => theme.transition};
  }
`;

const Swag = styled.div`
  background: ${({ theme }) => theme.secondaryCard};
`;

export default function Featured({ post }) {
  const postCategory = 'react'
  return (
    <Grid>
      {/* <Swag>DOS</Swag> */}
      <FeaturedPost
      to={`/${postCategory}/`} className="react"
      >
        <div className="category">
          <span className="text-xs">React</span>
        </div>
        <h3 className="post-title">Post destacado.</h3>
        <div className="caption">
          <span className="text-xs">
          </span>
        </div>
      </FeaturedPost>
      <Swag>DOS</Swag>
    </Grid>
  )
}
