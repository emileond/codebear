export default {
  name: 'post',
  type: 'document',
  title: 'Blog Post',
  icon: () => '🗒️',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Titles should be catchy, descriptive, and not too long',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'slug',
      description:
        'Some frontends will require a slug to be set to be able to show the post',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'image',
      type: 'image',
      title: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published at',
      description: 'This can be used to schedule post for publishing',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: {
        type: 'category',
      },
    },
    {
      name: 'body',
      type: 'bodyPortableText',
      title: 'Body',
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {
        type: 'author',
      },
    },
  ],
  preview: {
    select: {
      name: 'title',
      media: 'image',
    },
    prepare: ({ name, media }) => ({
      title: name,
      media,
    }),
  },
};
