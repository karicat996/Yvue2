<template>
    <div id="tab-bar">
 <!-- <div class="tab-bar-item">
         <div class="tab-bar-item"> 
          <img src="../../assets/img/TabBar/tabbar/首页.svg" 
          alt="">首页</div>
      <div class="tab-bar-item"> 
         <img src="../../assets/img/TabBar/tabbar/分类 .svg"
         alt="">分类</div>
    <div class="tab-bar-item">
         <img src="../../assets/img/TabBar/tabbar/购物车.svg"
         alt="">购物车</div>
    <div class="tab-bar-item">
         <img src="../../assets/img/TabBar/tabbar/我 的.svg"
         alt="">我的</div>
    </div>-->
   <slot></slot>
    </div>
</template>
<script>

export default {
    name:"TabBar",
    
   
    
}
</script>
<style scoped>
#tab-bar{
    display: flex;
    background-color: #f6f6f6;
    position: fixed;
    left:0;
    right:0;
    bottom: 0;
box-shadow: 0 -2px 1px rgba(100,100,100,0.1);
}

</style>