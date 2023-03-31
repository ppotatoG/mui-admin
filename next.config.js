const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  env: {
    BASE_URL: process.env.BASE_URL,
  },

  webpack(conf) {
    conf.resolve.modules.push(__dirname);
    return conf;
  },
});
