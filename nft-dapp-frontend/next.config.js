module.exports = {
  exportTrailingSlash: true,
  disableStaticImages: true,
  exportPathMap: function() {
    return {
      '/': {page: '/'}
    };
  }
};