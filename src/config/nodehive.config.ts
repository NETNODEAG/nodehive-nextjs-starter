export const NodeHiveConfig = {
  entities: {
    'node-page': {
      addFilter: [['status', '1']],
      addFields: [
        'title',
        'field_paragraphs',
        'field_paragraphs.field_image.field_media_image',
      ],
      addInclude: [
        'field_paragraphs',
        'field_paragraphs.field_image.field_media_image',
      ],
    },
    'node-article': {
      addFields: ['title', 'field_image', 'field_tags'],
      addInclude: ['field_image', 'field_tags'],
    },
  },
};
