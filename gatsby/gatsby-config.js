import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
  siteMetadata: {
    title: 'CodeBear.dev',
    siteUrl: 'https://codebear.dev',
    description: 'Blog sobre frontend en español',
    twitter: '@codebear',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'mlpnylp0',
        dataset: 'production',
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /svg/, // See below to configure properly
        },
      },
    },
  ],
};
