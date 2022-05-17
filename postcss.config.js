module.exports = {
  //配置要使用的相关插件
  plugins: {
    //vue-cli已经在内部默认配置了autoprefixer
    //将px转为rem
    'postcss-pxtorem': {
      //转换的根元素基准值
      //Vant组件库是基于逻辑像素375宽写的
      rootValue: 37.5,
      propList: ['*'],
    },
  },
};
