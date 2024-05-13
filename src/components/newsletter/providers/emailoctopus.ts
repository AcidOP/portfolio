'use server';

const emailoctopus = async (email: string) => {
  const API_KEY = process.env.EMAILOCTOPUS_API_KEY;
  const LIST_ID = process.env.EMAILOCTOPUS_LIST_ID;

  const API_URL = 'https://emailoctopus.com/api/1.6/';
  const ENDPOINT = `lists/${LIST_ID}/contacts`;

  const API_ROUTE = API_URL + ENDPOINT;

  const data = { email_address: email, api_key: API_KEY };

  const response = await fetch(API_ROUTE, {
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  });

  return response.json();
};

export default emailoctopus;
