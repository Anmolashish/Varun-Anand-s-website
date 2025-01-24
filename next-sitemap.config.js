/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.varunanand.in", // Replace with your domain
  generateRobotsTxt: true, // Generate robots.txt
  exclude: [
    "/dashboard", // Exclude main dashboard
    "/dashboard/*", // Exclude all sub-routes under dashboard
    "/login",
  ],
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" }, // Allow everything else
      { userAgent: "*", disallow: ["/dashboard", "/dashboard/*", "/login"] }, // Disallow dashboard routes
    ],
  },
};
