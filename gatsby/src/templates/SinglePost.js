import { graphql } from 'gatsby';
import React from 'react';
import BasePortableText from '@sanity/block-content-to-react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import Code from '../components/Code';
import Figure from '../components/Figure';
import SEO from '../components/SEO';

const StyledPost = styled.div`
  padding: 1rem;
  margin: 0 auto 2rem auto;
  /* border-radius: 1rem; */
  /* border: 1px solid ${({ theme }) => theme.border}; */
  /* box-shadow: ${({ theme }) => theme.lineShadow}; */
  max-width: 43rem;
  a {
    color: ${({ theme }) => theme.link};
    border-bottom: 2px solid;
    &:hover {
      color: ${({ theme }) => theme.linkHover};
    }
  }
  h1 {
    margin-top: 2.4rem;
    font-weight: 700;
  }
  h2 {
    margin-top: 3.2rem;
  }
  h3 {
    margin-top: 2.4rem;
  }
  p,
  ul,
  ol {
    font-size: 1.23rem;
    margin-bottom: 1.25rem;
    line-height: 1.7;
    font-family: 'Lora', serif;
  }
  img {
    border-radius: 0.5rem;
  }
  .caption {
    color: ${({ theme }) => theme.secondaryText};
  }
  code {
    color: ${({ theme }) => theme.code};
    font-size: 1.1rem;
    background: ${({ theme }) => theme.codeBg};
    border-radius: .5rem;
    padding: .1rem .5rem;
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
  const plainText = post.body
    .filter((block) => block.children)
    .map((el) => el.children.map((child) => child.text).join(''))
    .join('\n\n')
    .replace(/(^\s*)|(\s*$)/gi, '')
    .replace(/[ ]{2,}/gi, ' ')
    .replace(/\n /, '\n');
  const wordCount = plainText.split(' ').length;
  return (
    <>
      <SEO title={post.title} image={post.image?.asset?.fluid?.src} />
      <StyledPost>
        <h1>{post.title}</h1>
        <p className="caption">
          {post.publishedAt} - {post.author.name}
        </p>
        {post.image && <Img fluid={post.image.asset.fluid} />}
        <BasePortableText blocks={post._rawBody} serializers={serializers} />
        <p>By: {post.author.name}</p>
      </StyledPost>
    </>
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
      body {
        children {
          text
        }
      }
      _rawBody
    }
  }
`;
