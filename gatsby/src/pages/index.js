import React from "react";
import { graphql, Link } from "gatsby";
import styled from "styled-components";
import Hero from "../components/Hero";
import PostList from "../components/PostLists";
import MoreCard from "../components/MoreCard";
import Featured from "../components/Featured";
import SEO from "../components/SEO";
import HeroNew from "../components/HeroNew";

const H2 = styled.h2`
  text-align: left;
  .link-logo {
    margin-right: 0.5rem;
    &.js {
      color: #ffd03a;
    }
    &.react {
      color: #5fdcfb;
    }
    &.vue 
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
  const categories = data.allSanityCategory.nodes.sort((a, b) =>
    a.title.localeCompare(b.title)
  );

  return (
    <>
      <SEO title="Front-end explicado en español" />
      <Hero
        h1="Front-end fácilmente explicado."
        p="Notas prácticas, concisas y entendibles que te ayudarán a mejorar tus conocimientos de javascript, react, vue, css y más."
      />
      {categories.map((el) => {
        let cat = el.title;
        let catLink = el.title.replace(".", "").toLowerCase();
        let catPosts = posts.filter((post) => post.category.title === cat);
        return (
          <section key={Math.random().toString(36).substr(2, 9)}>
            <H2 key={catPosts.id}>{el.title}</H2>
            <PostList id={catPosts.id} posts={catPosts}>
              <MoreCard link={catLink} category={cat} title={cat} />
            </PostList>
          </section>
        );
      })}
      {/* <H2>Destacado</H2>
      <Featured /> */}
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
        body {
          children {
            text
          }
        }
        slug {
          current
        }
      }
    }
    allSanityCategory {
      nodes {
        title
      }
    }
  }
`;
