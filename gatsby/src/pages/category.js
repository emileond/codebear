import React from 'react';
import { graphql } from 'gatsby';
import PostList from '../components/PostLists';

export default function CSSPage({ data }) {
  const posts = data.allSanityPost.nodes;
  const pageCategory = posts[0].category.title;
  return (
    <>
      <h1>{pageCategory} Posts</h1>
      <PostList id={posts.id} posts={posts} />
    </>
  );
}

export const query = graphql`
  query cssQuery($category: String) {
    allSanityPost(filter: { category: { title: { eq: $category } } }) {
      nodes {
        title
        id
        slug {
          current
        }
        category {
          title
        }
        image {
          asset {
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
        author {
          name
        }
      }
    }
  }
`;
