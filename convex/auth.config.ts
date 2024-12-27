export default {
  providers: [
    {
      domain: process.env.CLERK_DOMAIN,
      applicationID: process.env.CLERK_APPLICATION_ID,
    },
  ],
};
