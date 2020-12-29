module.exports = {
  publicPath: '/my-first-project/',
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = "Popular films";
        return args;
      })
  }
}
