import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/dist/query';
import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions';

type Builder = EndpointBuilder<
  BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta>,
  never,
  'api'
>;

export const newsletterEndpoints = (builder: Builder) => ({
  postNewsletterSubscription: builder.mutation<void, string>({
    query: emailAddress => ({
      url: `/newsletter/subscription/${emailAddress}`,
      method: 'POST',
      headers: {
        'content-type': undefined,
      },
    }),
  }),
});
