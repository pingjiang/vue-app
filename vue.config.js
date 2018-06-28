// --mode development,production,test
// process.env.VUE_APP_*
// process.env.BASE_URL
// const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  baseUrl: '/app',
  runtimeCompiler: true,
  // transpileDependencies: [],
  devServer: {
    proxy: {
      '/api': {
        target: 'https://jsonplaceholder.typicode.com',
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
};
