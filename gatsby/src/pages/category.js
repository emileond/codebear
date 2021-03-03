import React from 'react';
import { graphql } from 'gatsby';
import PostList from '../components/PostLists';
import SEO from '../components/SEO';
import CategoryHero from '../components/CategoryHero';

export default function CSSPage({ data }) {
  const posts = data.allSanityPost.nodes;
  const pageCategory = posts[0].category.title;
  const pageDesc = posts[0].category.description;
  console.log(pageDesc[pageDesc.indexOf('.')]);
  return (
    <>
      <SEO title={pageCategory} />
      <CategoryHero
        h1={pageCategory === 'JS' ? 'Javascript' : pageCategory}
        p={pageDesc}
        category={pageCategory.toLowerCase()}
      />
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
          description
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
        body {
          children {
            text
          }
        }
      }
    }
  }
`;
