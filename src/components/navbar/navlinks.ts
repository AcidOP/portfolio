import type Link from '@/types/NavLink';

const links: Link[] = [
  {
    url: '/',
    text: 'Home',
  },
  {
    url: '/about',
    text: 'About',
  },
  {
    url: '/works',
    text: 'Works',
  },
  {
    url: '/blogs',
    text: 'Blogs',
  },
  {
    url: '/tags',
    text: 'Tags',
    dropdown: true,
  },
  {
    url: '/contact',
    text: 'Contact',
  },
  {
    url: '/uses',
    text: 'Uses',
    dropdown: true,
  },
  {
    url: '/newsletter',
    text: 'Newsletter',
    dropdown: true,
  },
];

export default links;
