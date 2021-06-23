<template>
  <div id="app">
    <router-view></router-view>
  <tab-bar>
<tab-bar-item path="/Home" activeColor="red">
  <img slot="item-icon" src="./assets/img/TabBar/首页.svg" alt="">
        <img slot="item-icon-active" src="./assets/img/TabBar/首页 _活跃.svg" alt="">
        <div slot="item-text">首页</div>
</tab-bar-item>
<tab-bar-item path="/cart" activeColor="red" >
  <img slot="item-icon" src="./assets/img/TabBar/分类 .svg" alt="">
    <img slot="item-icon-active" src="./assets/img/TabBar/分类_活跃.svg" alt="">
        <div slot="item-text">分类</div>
</tab-bar-item>
<tab-bar-item path="/category" activeColor="red" >
  <img  slot="item-icon" src="./assets/img/TabBar/购物车.svg" alt="">
    <img slot="item-icon-active" src="./assets/img/TabBar/购物车_活跃.svg" alt="">
        <div slot="item-text">购物车</div>
</tab-bar-item>
<tab-bar-item path="/profile1" activeColor="red" >
  <img  slot="item-icon" src="./assets/img/TabBar/我 的.svg" alt="">
    <img slot="item-icon-active" src="./assets/img/TabBar/我 的 _活跃.svg" alt="">
        <div slot="item-text">我的</div>
</tab-bar-item>
  </tab-bar>
  </div>
</template>
<script>
import TabBar from './components/common/tabbar/TabBar'
import TabBarItem from './components/content/mainTabbar/TabBarItem'
export default{
  name:'App',
  components:{
    TabBar,
    TabBarItem

  }
}
</script>

<style scoped>

@import './assets/css/base.css';

</style>


