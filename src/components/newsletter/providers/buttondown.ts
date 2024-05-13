'use server';

// https://docs.buttondown.email/api-subscribers-create

const buttondown = async (email: string) => {
  const API_KEY = process.env.BUTTONDOWN_API_KEY;

  if (!API_KEY) {
    throw new Error('Buttondown API key is not set');
  }

  const BASE_URL = 'https://api.buttondown.email/v1';
  const ENDPOINT = '/subscribers';
  const API_ROUTE = BASE_URL + ENDPOINT;

  const response = await fetch(API_ROUTE, {
    body: JSON.stringify({ email }),
    headers: {
      Authorization: `Token ${API_KEY}`,
      'Content-Type': 'application/json',
    },
    method: 'POST',
  });
  return response;
};

export default buttondown;
