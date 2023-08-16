import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/query';
import { EndpointBuilder as _EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions';

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

export type EndpointBuilder = _EndpointBuilder<
  BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta>,
  never,
  'api'
>;

// todo: mutation error response type guard
