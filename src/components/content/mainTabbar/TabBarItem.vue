<template>
    <div id="tab-bar-item" class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot  name="item-icon" ></slot></div>
        <div v-else><slot name="item-icon-active"></slot></div>
        <div :style="activeStyle">
            <slot name="item-text"></slot>
        </div>
        </div>

</template>
<script>
export default {
    name:"TabBarItem",
    activeColor:{
type: String,
default: 'blue'
    },
    props:{
        path:String
    },
    data(){
        return{
           // isActive: true,
           

        }
    },
    computed:{
        isActive(){
            return this.$route.path.indexOf(this.path) !== -1
        },
        activeStyle(){
            return this.isActive?{color: this.activeColor="red"}:{}

        }

    },
    methods:{
        itemClick(){

     this.$router.replace(this.path).catch(err => {
    console.log(err)
})
       }


   }
 
}
</script>
<style scoped>

.tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 15px;
}
.tab-bar-item img{
  width: 20px;
  height:20px;
  margin-top:3px;
  vertical-align: middle;
  margin-bottom: 2px;


}
  

</style>