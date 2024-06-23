type social = {
  url: string;
  name: string;
};

type Config = {
  title: string;
  name: string;
  timezone?: string;
  socials: social[];
  description: string;
  newsletter: {
    provider: 'buttondown' | 'mailchimp' | 'emailoctopus';
  };
  calendlyUrl: string;
};

export default Config;
