import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

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
    // todo: localize endpoint definitions to relevant feature
    postNewsletterSubscription: builder.mutation<void, string>({
      query: emailAddress => ({
        url: `/newsletter/subscription/${emailAddress}`,
        method: 'POST',
        headers: {
          'content-type': undefined,
        },
      }),
    }),
  }),
});

export const { usePostNewsletterSubscriptionMutation } = apiSlice;

// todo: mutation error response type guard
