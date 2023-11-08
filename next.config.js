module.exports = {
  async redirects() {
    return [
      {
        source: '/next-redirect',
        destination: '/redirect-success',
      },
    ];
  },
};
