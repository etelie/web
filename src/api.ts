import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/query';
import { EndpointBuilder as _EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions';

import { newsletterEndpoints } from '@/common/newsletter/endpoints';

const server = {
  protocol: import.meta.env.PROD ? 'https' : 'http',
  host: import.meta.env.PROD ? 'etelie.com' : 'localhost',
  port: import.meta.env.PROD ? 443 : 402,
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

export const mockApiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: '',
    credentials: 'same-origin',
    headers: {
      'content-type': 'application/json',
    },
    prepareHeaders: headers => {},
  }),
  endpoints: builder => ({}),
});

export type EndpointBuilder = _EndpointBuilder<
  BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta>,
  never,
  'api'
>;
