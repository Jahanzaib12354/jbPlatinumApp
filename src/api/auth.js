const BASE_URL = 'https://xhcqhdxq-8006.inc1.devtunnels.ms';

export const signupApi = async payload => {
  const response = await fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(payload),
  });

  let data = null;
  try {
    data = await response.json();
    
  } catch (e) {
    // response JSON nahi tha
  }

  if (!response.ok) {
    throw new Error(data?.message || data?.error || 'Signup failed');
  }
  return data;
};