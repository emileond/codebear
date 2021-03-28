import React from 'react';
import Grid from './Grid';
import PostCard from './PostCard';
import MoreCard from './MoreCard';

const PostList = ({ children, posts }) => (
  <Grid>
    {posts.reverse().map((post) => (
      <PostCard key={post.id} post={post} />
    ))}
    {children}
  </Grid>
);

export default PostList;
