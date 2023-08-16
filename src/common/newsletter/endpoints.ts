import type { EndpointBuilder } from "@/api";

export const newsletterEndpoints = (builder: EndpointBuilder) => ({
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
