<template>
<div>
    <div class="nav-bar">
    <div class='left'>
         <slot name="left"></slot>
      </div>   

        <div class="center">
            <slot name="center">购物街</slot>
       </div>
    <div class="right">
        <slot name="right"></slot>
        </div>
        </div>
        </div>
</template>
<script>
export default {
    name:'NavBar'
}
</script>
<style scoped>
.nav-bar{
    /* display: flex;
width:100%;
height: 44px;
text-align: center;
box-shadow: wheat; */
width:100%;
display:flex;
line-height:44px;
height:44px;
text-align:center;
background-color: pink;
}

.center{
flex:1;
    
}
.left .right {
  width:60px;

}
</style>