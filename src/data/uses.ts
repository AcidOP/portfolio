export interface UseItem {
  title?: string;
  product: string;
  img: string;
  link?: string;
}

export interface Uses {
  [category: string]: UseItem[];
}

const uses: Uses = {
  Hardware: [
    {
      title: 'Laptop',
      product: 'ASUS TUF F15',
      img: '/uses/hardware/laptop.jpg',
    },
    {
      title: 'External Monitor',
      product: 'Acer Nitro VG240YB',
      link: 'https://www.amzn.com/B0C7WGTKJZ',
      img: '/uses/hardware/monitor.jpg',
    },
    {
      title: 'Microphone',
      product: 'FIFINE A6T',
      link: 'https://www.amzn.com/B09Q2ZZGH2',
      img: '/uses/hardware/fifine-a6t.jpg',
    },
    {
      title: 'Mouse',
      product: 'Razer DeathAdder Essential',
      link: 'https://www.amzn.com/B094PS5RZQ/',
      img: '/uses/hardware/mouse.jpg',
    },
    {
      title: 'Webcam',
      product: 'EMEET 1080P Webcam',
      link: 'https://www.amzn.com/B07M6Y7355/',
      img: '/uses/hardware/webcam.jpg',
    },
  ],

  Software: [
    {
      title: 'Editor',
      product: 'VS Code',
      img: '/uses/software/vscode.jpg',
    },
    {
      title: 'Font',
      product: 'Cascadia Code',
      link: 'https://github.com/microsoft/cascadia-code',
      img: '/uses/software/font.jpg',
    },
    {
      title: 'Node.js',
      product: 'JavaScript runtime',
      link: 'https://nodejs.org/en/',
      img: '/uses/software/javascript.jpg',
    },
    {
      title: 'nvm',
      product: 'Nodejs version manager',
      link: 'https://github.com/nvm-sh/nvm',
      img: '/uses/software/nvm.jpg',
    },
    {
      title: 'VLC',
      product: 'Media Player',
      link: 'https://www.videolan.org/vlc/index.html',
      img: '/uses/software/vlc.jpg',
    },
    {
      title: 'Note Taking',
      product: 'Obsidian',
      link: 'https://obsidian.md',
      img: '/uses/software/obsidian.jpg',
    },
  ],
  'VS Code PLugins': [
    {
      title: 'Theme',
      product: 'Doki Theme',
      link: 'https://github.com/doki-theme/doki-theme-vscode',
      img: '/uses/software/doki.jpg',
    },
    {
      title: 'Version Control',
      product: 'GitLens - Git Supercharged',
      img: '/uses/software/gitlens.jpg',
    },
    {
      title: 'Code Sorter',
      product: 'Prettier',
      link: 'https://prettier.io',
      img: '/uses/software/prettier.jpg',
    },
  ],
  'Technologies and Frameworks': [
    {
      title: 'React.js',
      product: 'Because react',
      link: 'https://reactjs.org',
      img: '/uses/software/react.jpg',
    },
    {
      title: 'Next.js',
      product: 'Because nextjs',
      link: 'https://nextjs.org',
      img: '/uses/software/nextjs.jpg',
    },
    {
      title: 'Css',
      product: 'Tailwindcss',
      link: 'https://tailwindcss.com/',
      img: '/uses/software/tailwindcss.jpg',
    },
    {
      product: 'Markdown',
      link: '/blogs/markdown-cheatsheet',
      img: '/uses/software/markdown.jpg',
    },
    // {
    //   product: '',
    //   link: '',
    //   img: '',
    // },
  ],
};

export default uses;
