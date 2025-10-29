// Middleware temporarily disabled - translations work without routing changes
// import createMiddleware from 'next-intl/middleware';

// export default createMiddleware({
//   locales: ['en', 'fr', 'es', 'yo'],
//   defaultLocale: 'en',
//   localePrefix: 'as-needed',
//   localeDetection: false
// });

// export const config = {
//   matcher: ['/(fr|es|yo)/:path*']
// };

export { default } from 'next-intl/middleware';

export const config = {
  // Matcher that will never match - effectively disabling the middleware
  matcher: ['/this-route-does-not-exist']
};
