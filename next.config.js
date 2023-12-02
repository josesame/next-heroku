debugger

const withBuilderDevTools = require("@builder.io/dev-tools/next")();

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
};


// const nextConfig = withBuilderDevTools({
//   reactStrictMode: true,
//   compiler: {
//     // Enables the styled-components SWC transform
//     styledComponents: true,
//   },
// });

module.exports = nextConfig;
