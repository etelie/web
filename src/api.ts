import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { newsletterEndpoints } from '@/common/newsletter/endpoints';

// todo: set by environment
const server = {
  protocol: 'http',
  host: 'localhost',
  port: 402,
};

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: `${server.protocol}://${server.host}:${server.port}`,
    credentials: 'same-origin',
    headers: {
      'content-type': 'application/json',
    },
    prepareHeaders: headers => {},
  }),
  endpoints: builder => ({
    ...newsletterEndpoints(builder),
  }),
});

// todo: mutation error response type guard
