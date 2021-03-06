// check this out https://github.com/zeit/next.js/issues/9753#issue-538009953
const repoNameURIPrefix = process.env.NODE_ENV === 'production' ? '/curated-resource-list' : '';

module.exports = {
  assetPrefix: repoNameURIPrefix,
  env: {
    linkPrefix: repoNameURIPrefix,
  },
  generateBuildId: async () => 'current',
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: 'empty'
      }
    }
    return config
  }
};
