import path from 'path';

async function turnPostsIntoPages({ graphql, actions }) {
  // 1. Get a template for this page
  const postTemplate = path.resolve('./src/templates/SinglePost.js');
  // 2. Queary all posts
  const { data } = await graphql(`
    query {
      allSanityPost {
        nodes {
          title
          id
          slug {
            current
          }
          category {
            title
          }
        }
      }
    }
  `);
  // 3. Loop over each posts and create a page for it
  data.allSanityPost.nodes.forEach((post) => {
    actions.createPage({
      path: `${post.category.title.toLowerCase()}/${post.slug.current}`,
      component: postTemplate,
      context: {
        slug: post.slug.current,
        title: 'hey',
      },
    });
  });
}

async function turnCategoriesIntoPages({ graphql, actions }) {
  const pageTemplate = path.resolve('./src/pages/category.js');

  const { data } = await graphql(`
    query {
      allSanityCategory {
        nodes {
          id
          title
        }
      }
    }
  `);

  data.allSanityCategory.nodes.forEach((cat) => {
    actions.createPage({
      path: `/${cat.title.toLowerCase()}`,
      component: pageTemplate,
      context: {
        category: cat.title,
      },
    });
  });
}

export async function createPages(params) {
  // Create pages dynamically
  // 1. SinglePosts Pages
  await Promise.all([
    turnPostsIntoPages(params),
    turnCategoriesIntoPages(params),
  ]);

  // 2. Section Pages
}
