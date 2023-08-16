import type { EndpointBuilder } from "@/api";

const basePath = '/newsletter'

export const newsletterEndpoints = (builder: EndpointBuilder) => ({
  postNewsletterSubscription: builder.mutation<void, string>({
    query: emailAddress => ({
      url: `${basePath}/subscription/${emailAddress}`,
      method: 'POST',
      headers: {
        'content-type': undefined,
      },
    }),
  }),
});
