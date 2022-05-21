<template>
<div class="layout-container">
  <router-view />
  <van-tabbar v-model="active" >
    <van-tabbar-item icon="home-o"  to="/">首页</van-tabbar-item>
    <van-tabbar-item icon="search"  to="/search">搜索</van-tabbar-item>
    <van-tabbar-item icon="friends-o" to="/qa">标签</van-tabbar-item>
    <van-tabbar-item icon="setting-o"  to="/mine">设置</van-tabbar-item>
  </van-tabbar>
</div>
</template>

<script>
  export default {
    name: "",
    components:{},
    props:{},
    data(){
      return{
        active:0,
      }
    },
    computed:{},
    watch:{},
    created() {},
    mounted() {
    },
    methods:{}
  }
</script>

<style scoped lang="less"></style>
