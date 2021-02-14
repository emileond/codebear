export default {
  name: 'category',
  type: 'document',
  title: 'Category',
  icon: () => '📁',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
  ],
};
