import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import { IoLogoVue } from 'react-icons/io5';
import {
  SiJavascript,
  SiReact,
  SiGatsby,
  SiCsswizardry,
  SiSass,
} from 'react-icons/si';
import Hero from '../components/Hero';
import PostList from '../components/PostLists';

const H2 = styled.h2`
  text-align: center;
  .link-logo {
    margin-right: 0.5rem;
    &.js {
      color: #ffd03a;
    }
    &.react {
      color: #5fdcfb;
    }
    &.vue {
      color: #3fb280;
    }
    &.gatsby {
      color: #684290;
    }
    &.css {
      color: #04a7e1;
    }
    &.sass {
      color: #c66394;
    }
  }
`;

const HomePage = ({ data }) => {
  const posts = data.allSanityPost.nodes;
  const jsPosts = posts.filter((post) => post.category.title === 'JS');
  const reactPosts = posts.filter((post) => post.category.title === 'React');
  const vuePosts = posts.filter((post) => post.category.title === 'Vue');
  const gatsbyPosts = posts.filter((post) => post.category.title === 'Gatsby');
  const sassPosts = posts.filter((post) => post.category.title === 'SASS');
  const cssPosts = posts.filter((post) => post.category.title === 'CSS');

  return (
    <>
      <Hero
        h1="Front-End Web Development"
        p="Javascript, React, Vue, CSS, SASS, Gatsby y más... Explicados para humanos."
      />
      <H2>
        <SiJavascript className="link-logo js" />
        Javascript Posts
      </H2>
      <PostList id={jsPosts.id} posts={jsPosts} />
      {/* <Link to={`/${jsPosts[0].category.title.toLowerCase()}`}>
        Ver todo sobre JS
      </Link> */}
      <H2>
        <SiReact className="link-logo react" />
        React Posts
      </H2>
      <PostList id={reactPosts.id} posts={reactPosts} />
      {/* <Link to={`/${reactPosts[0].category.title.toLowerCase()}`}>
        Ver todo sobre React
      </Link> */}
      <H2>
        <IoLogoVue className="link-logo vue" />
        Vue Posts
      </H2>
      <PostList id={vuePosts.id} posts={vuePosts} />
      {/* <Link to={`/${vuePosts[0].category.title.toLowerCase()}`}>
        Ver todo sobre Vue
      </Link> */}
      <H2>
        <SiGatsby className="link-logo gatsby" />
        Gatsby Posts
      </H2>
      <PostList id={gatsbyPosts.id} posts={gatsbyPosts} />
      {/* <Link to={`/${gatsbyPosts[0].category.title.toLowerCase()}`}>
        Ver todo sobre Gatsby
      </Link> */}
      <H2>
        <SiSass className="link-logo sass" />
        SASS Posts
      </H2>
      <PostList id={sassPosts.id} posts={sassPosts} />
      {/* <Link to={`/${sassPosts[0].category.title.toLowerCase()}`}>
        Ver todo sobre SASS
      </Link> */}
      <H2>
        <SiCsswizardry className="link-logo css" />
        CSS Posts
      </H2>
      <PostList id={cssPosts.id} posts={cssPosts} />
      {/* <Link to={`/${cssPosts[0].category.title.toLowerCase()}`}>
        Ver todo sobre CSS
      </Link> */}
    </>
  );
};

export default HomePage;

export const query = graphql`
  query {
    allSanityPost(limit: 60) {
      nodes {
        title
        id
        category {
          title
        }
        slug {
          current
        }
      }
    }
  }
`;