export const siteConfig = {
  name: "yoursite.com",
  shortName: "yoursite",
  description: "A description of your site",
  url: "https://www/yoursite.com",
  ogImage: "https://www/yoursite.com/opengraph.png",
  links: {
    twitter: "https://twitter.com/yoursite",
  },
};

export const siteLimits = {
  MAX_CONTACT_MESSAGE_LENGTH: 1000,
};

export type SiteConfig = typeof siteConfig;
