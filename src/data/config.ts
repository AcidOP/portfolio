const config = {
  title: 'AcidOP | Developer',
  description:
    'I love to create things and make them work. I am a developer with a taste for the web and a passion for the cloud.',
  name: 'AcidOP',
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
  analytics: {},
  newsletter: {
    provider: 'emailoctopus', // available: buttondown, mailchimp, emailoctopus
    api_key: process.env.EMAIL_OCTOPUS_API_KEY,
    list_id: process.env.EMAILOCTOPUS_LIST_ID,
  },
};

export default config;
