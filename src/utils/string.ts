import { isValidElement } from 'react';

import type { ReactNode } from 'react';

export const convertToString = (node: ReactNode): string => {
  if (typeof node === 'string') {
    return node;
  } else if (Array.isArray(node)) {
    return node.map(convertToString).join('');
  } else if (isValidElement(node)) {
    return convertToString(node.props.children);
  }
  return '';
};

export const generateSlug = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric characters with hyphens
    .replace(/(^-|-$)+/g, ''); // Remove leading or trailing hyphens
};
