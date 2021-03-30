/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import ReadTime from './ReadTime';

const StyledPostCard = styled((props) => <Link {...props} />)`
  /* border: 0.5px solid ${({ theme }) => theme.border}; */
  padding: 1rem;
  border-radius: 1rem;
  text-align: center;
  display: flex;
  flex-flow: column;
  align-items: center;
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
  }
  &:hover {
    box-shadow: ${({ theme }) => theme.shadow};
    transition: ${({ theme }) => theme.transition};
  }
`;

const PostCard = ({ post }) => {
  const postCategory = post.category.title.toLowerCase();
  let plainText = '0';

  if (post.body) {
    plainText = post.body
      .filter((block) => block.children)
      .map((el) => el.children.map((child) => child.text).join(''))
      .join('\n\n')
      .replace(/(^\s*)|(\s*$)/gi, '')
      .replace(/[ ]{2,}/gi, ' ')
      .replace(/\n /, '\n');
  }

  const wordCount = plainText.split(' ').length;

  return (
    <StyledPostCard
      to={`/${postCategory}/${post.slug.current}`}
      className={postCategory}
    >
      <div className="category">
        <span className="text-xs">{postCategory}</span>
      </div>
      <h3 className="post-title">{post.title}</h3>
      <div className="caption">
        <span className="text-xs">
          <ReadTime words={wordCount} />
        </span>
      </div>
      {/* {post.image ? (
          <Img fluid={post.image.asset.fluid} alt={post.title} />
        ) : null} */}
    </StyledPostCard>
  );
};

export default PostCard;
