import { cn } from '@/utils/cn';

import {
  FaFacebookSquare,
  FaLinkedin,
  FaReddit,
  FaTwitter,
} from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';

interface IProps {
  title: string;
  url: string;
  className?: string;
}

export default function SharePost({ title, url, className }: IProps) {
  const links = [
    {
      site: 'X',
      url: `https://x.com/share?text=${title}&url=${url}`,
      icon: FaTwitter,
    },
    {
      site: 'Reddit',
      url: `https://www.reddit.com/submit?title=${title}&url=${url}`,
      icon: FaReddit,
    },
    {
      site: 'LinkedIn',
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      icon: FaLinkedin,
    },
    {
      site: 'Facebook',
      url: `https://www.facebook.com/sharer/sharer.php?t=${title}&u=${url}`,
      icon: FaFacebookSquare,
    },
    {
      site: 'WhatsApp',
      url: `whatsapp://send?text=${title}%0A${url}`,
      icon: IoLogoWhatsapp,
    },
    {
      site: 'Email',
      url: `mailto:?subject=${title}&body=Hi there,%0Ahere is an interesting article: %0A%0A${url}%0A%0AEnjoy reading!`,
      icon: MdEmail,
    },
  ];

  return (
    <div
      className={cn(
        'sticky top-32 flex h-min items-center justify-between gap-3 rounded border-2 border-black bg-white px-4 py-3 lg:flex-col lg:px-2 lg:py-4 shadow-xl',
        className,
      )}
    >
      {links.map(link => {
        const Icon = link.icon;
        return (
          <a
            key={link.site}
            target='_blank'
            rel='noopener noreferrer'
            href={link.url}
            aria-label={`Share on ${link.site}`}
          >
            <Icon
              size={30}
              className='transform text-gray-600 duration-150 hover:scale-125 hover:text-violet-700'
            />
          </a>
        );
      })}
    </div>
  );
}
