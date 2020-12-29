module.exports = {
  // publicPath: '/vue_films-app/',
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = "Popular films";
        return args;
      })
  }
}
