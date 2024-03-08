import { defineDocumentType, makeSource } from "contentlayer/source-files";

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
  },
}

const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: "*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    tags: { type: 'list', of: { type: 'string' } },
    description: { type: "string", required: true },
    draft: { type: "boolean", default: true },
    date: { type: "date", required: true },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: "src/data/blogs",
  documentTypes: [Blog],
});