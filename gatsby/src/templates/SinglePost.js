import { graphql } from 'gatsby';
import React from 'react';
import BasePortableText from '@sanity/block-content-to-react';
import styled from 'styled-components';
import Code from '../components/Code';
import Figure from '../components/Figure';

const StyledPost = styled.div`
  background: ${({ theme }) => theme.card};
  padding: 2rem;
  margin: 0 auto 2rem auto;
  border-radius: 0.5rem;
  /* border: 1px solid ${({ theme }) => theme.border}; */
  box-shadow: ${({ theme }) => theme.lineShadow};
  max-width: 48rem;
  p,
  ul,
  ol {
    font-size: 1.23rem;
    margin-bottom: 1.25rem;
    line-height: 1.8;
    font-family: 'Lora', serif;
  }
  .caption {
    color: ${({ theme }) => theme.secondaryText};
  }
`;

const serializers = {
  types: {
    code: Code,
    mainImage: Figure,
  },
};

export default function singlePostPage({ data }) {
  const post = data.sanityPost;
  return (
    <StyledPost>
      <h1>{post.title}</h1>
      <p className="caption">
        {post.publishedAt} - {post.author.name}
      </p>
      <BasePortableText blocks={post._rawBody} serializers={serializers} />
      <p>By: {post.author.name}</p>
    </StyledPost>
  );
}
export const query = graphql`
  query($slug: String!) {
    sanityPost(slug: { current: { eq: $slug } }) {
      id
      title
      publishedAt
      image {
        asset {
          fluid(maxWidth: 900) {
            ...GatsbySanityImageFluid
          }
        }
      }
      author {
        name
      }
      category {
        title
      }
      _rawBody
    }
  }
`;
