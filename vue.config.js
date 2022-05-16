module.exports = {
  runtimeCompiler:true,
  publicPath:"/",
  devServer:{},
  configureWebpack:{
    relove:{
      alias:{
        'assets':'@/assets',
        'components':'@/components',
        'api':'@/api',
        'utils':'@/utils'
      }
    }
  }
}
