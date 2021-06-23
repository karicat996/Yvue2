<template>
<div class="recommend">
   <div v-for="item in recommends">
       <a :href="item.link">
           <img :src="item.image" alt="">
       </a>
       <div>{{item.title}}</div>
    </div>
    </div>
</template>
<script>
export default{
    name:'HomeRecommend',
    props:{
         recommends:{
        type:Array,
        default(){
            return []
           
        }

    }
}

}
</script>

<style scoped>
.recommend{
  display: flex;
  text-align: center;
  font-size: 12px;
  padding: 1px 1px;
  border-bottom: 1px solid red;
  width: 100%;
}
.recommend-item{
  flex: 1;
}
.recommend-item img{
  width: 70px;
  height: 670px;
  margin-bottom: 10px;
}
</style>
