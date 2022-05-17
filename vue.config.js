module.exports = {
  runtimeCompiler:true,
  publicPath:"/",
  devServer:{},
  configureWebpack:{
    resolve:{
      alias:{
        'assets':'@/assets',
        'components':'@/components',
        'api':'@/api',
        'utils':'@/utils'
      }
    }
  }
}
