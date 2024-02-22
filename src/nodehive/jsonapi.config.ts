export const NodeHiveConfig = {
  entities: {
    'node-page': {
      addFilter: [['status', '1']],
      addFields: ['title', 'field_paragraphs'],
      addInclude: ['field_paragraphs'],
    },
    'node-article': {
      addFields: ['title', 'field_tags'],
      addInclude: ['field_tags'],
    },

    'nodehive_fragment--space_logo': {
      addFilter: [['status', '1']],
      addFields: ['title', 'field_logo'],
      addInclude: ['field_logo'],
    },
  },
};
