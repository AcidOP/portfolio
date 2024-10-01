import { defineDocumentType } from 'contentlayer2/source-files';

export const PrivacyPolicy = defineDocumentType(() => ({
  name: 'PrivacyPolicy',
  filePathPattern: 'privacy-policy.mdx',
  contentType: 'mdx',
  fields: {
    lastUpdated: { type: 'date', required: true },
  },
}));
