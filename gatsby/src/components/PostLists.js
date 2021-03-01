import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const StyledList = styled.div`
  padding: 1rem;
  background: ${({ theme }) => theme.body};
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  margin-bottom: 4rem;
  .js {
    background: linear-gradient(
      to bottom,
      #f7df1e 5px,
      ${({ theme }) => theme.card} 0
    );
  }
  .react {
    background: linear-gradient(
      to bottom,
      #61dafb 5px,
      ${({ theme }) => theme.card} 0
    );
  }
  .vue {
    background: linear-gradient(
      to bottom,
      #41b882 5px,
      ${({ theme }) => theme.card} 0
    );
  }
  .gatsby {
    background: linear-gradient(
      to bottom,
      #663399 5px,
      ${({ theme }) => theme.card} 0
    );
  }
  .css {
    background: linear-gradient(
      to bottom,
      #3398fe 5px,
      ${({ theme }) => theme.card} 0
    );
  }
  .sass {
    background: linear-gradient(
      to bottom,
      #cd6a9e 5px,
      ${({ theme }) => theme.card} 0
    );
  }
`;

const StyledPostCard = styled((props) => <Link {...props} />)`
  /* border: 0.5px solid ${({ theme }) => theme.border}; */
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  box-shadow: ${({ theme }) => theme.lineShadow};
  transition: ${({ theme }) => theme.transition};
  span {
    margin-right: 1rem;
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

const SinglePost = ({ post }) => {
  const postCategory = post.category.title.toLowerCase();

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
        <span className="text-xs">10min read</span>
      </div>
      {/* {post.image ? (
        <Img fluid={post.image.asset.fluid} alt={post.title} />
      ) : null} */}
    </StyledPostCard>
  );
};

const PostList = ({ posts }) => (
  <StyledList>
    {posts.map((post) => (
      <SinglePost key={post.id} post={post} />
    ))}
  </StyledList>
);

export default PostList;
