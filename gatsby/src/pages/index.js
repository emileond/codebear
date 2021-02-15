import React from 'react';
import { graphql, Link } from 'gatsby';
import Hero from '../components/Hero';
import PostList from '../components/PostLists';

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
      <h2>Javascript Posts</h2>
      <PostList id={jsPosts.id} posts={jsPosts} />
      <Link to={`/${jsPosts[0].category.title.toLowerCase()}`}>
        Ver todo sobre JS
      </Link>
      <h2>React Posts</h2>
      <PostList id={reactPosts.id} posts={reactPosts} />
      <Link to={`/${reactPosts[0].category.title.toLowerCase()}`}>
        Ver todo sobre React
      </Link>
      <h2>Vue Posts</h2>
      <PostList id={vuePosts.id} posts={vuePosts} />
      <Link to={`/${vuePosts[0].category.title.toLowerCase()}`}>
        Ver todo sobre Vue
      </Link>
      <h2>Gatsby Posts</h2>
      <PostList id={gatsbyPosts.id} posts={gatsbyPosts} />
      <Link to={`/${gatsbyPosts[0].category.title.toLowerCase()}`}>
        Ver todo sobre Gatsby
      </Link>
      <h2>SASS Posts</h2>
      <PostList id={sassPosts.id} posts={sassPosts} />
      <Link to={`/${sassPosts[0].category.title.toLowerCase()}`}>
        Ver todo sobre SASS
      </Link>
      <h2>CSS Posts</h2>
      <PostList id={cssPosts.id} posts={cssPosts} />
      <Link to={`/${cssPosts[0].category.title.toLowerCase()}`}>
        Ver todo sobre CSS
      </Link>
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
