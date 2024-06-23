import type SiteConfig from '@/types/siteconfig';

const config: SiteConfig = {
  title: 'AcidOP | Developer',
  description:
    'I love to create things and make them work. I am a developer with a taste for the web and a passion for the cloud.',
  name: 'AcidOP',
  timezone: 'Asia/Kolkata',
  socials: [
    // Download https://simpleicons.org/ and put in @/components/icons
    {
      name: 'github',
      url: 'https://github.com/AcidOP',
    },
    {
      name: 'twitter',
      url: 'https://twitter.com/whynotacid',
    },
    {
      name: 'instagram',
      url: 'https://instagram.com/acidop.codes',
    },
  ],
  newsletter: {
    provider: 'emailoctopus', // available: buttondown, mailchimp, emailoctopus
  },
  calendlyUrl: 'https://calendly.com/acidop/30min',
};

export default config;
