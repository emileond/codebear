export default {
  widgets: [
    {
      name: 'document-list',
      options: {
        title: 'Last edited documents',
        order: '_updatedAt desc',
        limit: 6,
      },
      layout: {
        width: 'auto',
      },
    },
    {
      name: 'document-list',
      options: {
        title: 'Last edited posts',
        order: '_updatedAt desc',
        limit: 6,
        types: ['post'],
      },
    },
    {
      name: 'project-users',
    },
    {
      name: 'project-info',
    },
    {
      name: 'netlify',
      options: {
        title: 'Netlify deploys',
        sites: [
          {
            title: 'Gatsby',
            apiId: '42eea432-9b18-4550-80c7-cfc035998c18',
            buildHookId:
              'https://api.netlify.com/build_hooks/6029ad9318d0d21d61c23190',
            name: 'boring-kepler-506c89',
          },
        ],
      },
      layout: {
        width: 'small',
      },
    },
    {
      name: 'document-chart',
      options: { types: ['post', 'author', 'category'] },
      layout: { width: 'auto' },
    },
  ],
};
