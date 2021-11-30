/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
require('dotenv').config()
// const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

// module.exports = (phase, { defaultConfig }) => {
//   if (phase === PHASE_DEVELOPMENT_SERVER) {
//     return {
//       /* development only config options here */
//     };
//   }

//   return {
//     /* config options for all phases except development here */
//   };
// };

module.exports = {
  poweredByHeader: false,
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'fr', 'ar', 'ru'],
    defaultLocale: 'en',
    localeDetection: false,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'shared/styles')],
  },
  env: {
    customKey: 'my-value',
    USER_NAME: process.env.NEXT_PUBLIC_USER_NAME,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: false,
  },
}
