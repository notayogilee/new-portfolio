export default {
  name: 'education',
  title: 'Education',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Course or Subject Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'school',
      title: 'School Name',
      type: 'string'
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
    },
    {
      name: 'isOnline',
      title: 'Online Course?',
      type: 'boolean'
    },
    {
      name: 'isCompleted',
      title: 'Is This Course Completed?',
      type: 'boolean'
    },
    {
      name: 'fromDate',
      title: 'Start Date',
      type: 'datetime',
    },
    {
      name: 'toDate',
      title: 'Date Completed',
      type: 'datetime',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'blockContent',
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url'
    }
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
  },
}
