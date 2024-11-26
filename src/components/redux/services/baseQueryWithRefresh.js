import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = "https://papacasa.caansoft.com/api/"

const baseQueryWithRefresh = async (args, api, extraOptions) => {
  const baseQuery = fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      const tokenData = JSON.parse(localStorage.getItem('token'));
      if (tokenData?.access) {
        headers.set('Authorization', `Bearer ${tokenData.access}`);
      }
      return headers;
    },
  });

  // Refresh the token before every API call
  const tokenData = JSON.parse(localStorage.getItem('token'));
  const refreshToken = tokenData?.refresh;

  if (refreshToken) {
    // Check if token is expired (optional: add logic to check expiration)
    const refreshResult = await baseQuery(
      {
        url: `${BASE_URL}/token/refresh/`, // Refresh token endpoint
        method: 'POST',
        body: { refresh: refreshToken },
      },
      api,
      extraOptions
    );
    
    if (refreshResult?.data) {
      // Save the new token and proceed with the original request
      localStorage.setItem(
        'token',
        JSON.stringify({
          access: refreshResult.data.access,
          refresh: refreshToken,
        })
      );
    } else {
      // Refresh token expired or invalid, navigate to login
      localStorage.removeItem('token');
      window.location.href = '/login';
      return { error: { status: 401, data: 'Unauthorized' } };
    }
  }
  // Proceed with the actual API call
  return baseQuery(args, api, extraOptions);
};

export default baseQueryWithRefresh;