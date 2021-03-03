import React from 'react';
import styled from 'styled-components';
import PostCard from './PostCard';
import MoreCard from './MoreCard';

const StyledList = styled.div`
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
`;

const PostList = ({ posts }) => (
  <StyledList>
    {posts.map((post) => (
      <PostCard key={post.id} post={post} />
    ))}
    <MoreCard
      link={posts[0].category.title.toLowerCase()}
      category={posts[0].category.title.toLowerCase()}
      title={
        posts[0].category.title === 'JS'
          ? 'Javascript'
          : posts[0].category.title
      }
    />
  </StyledList>
);

export default PostList;
