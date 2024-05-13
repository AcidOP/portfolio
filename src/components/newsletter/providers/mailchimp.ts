'use server';

// https://mailchimp.com/developer/marketing/guides/quick-start/
import mailchimp from '@mailchimp/mailchimp_marketing';

export const mailchimpSub = async (email: string) => {
  const MAILCHIMP_LIST_ID = process.env.MAILCHIMP_LIST_ID;
  const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
  const MAILCHIMP_SERVER = process.env.MAILCHIMP_SERVER;

  if (!MAILCHIMP_LIST_ID || !MAILCHIMP_API_KEY || !MAILCHIMP_SERVER) {
    throw new Error('Mailchimp environment variables are not set');
  }

  mailchimp.setConfig({
    apiKey: MAILCHIMP_API_KEY,
    server: MAILCHIMP_SERVER,
  });

  const response = await mailchimp.lists.addListMember(MAILCHIMP_LIST_ID, {
    email_address: email,
    status: 'subscribed',
  });

  return response;
};

export default mailchimpSub;
