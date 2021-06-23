<template>
    <div id="home">
        <nav-bar><div slot="center">购物街</div>
        </nav-bar>
        <router-view/>
        <swiper>
            <swiper-item v-for="item in banners" >
                <a :href="item.link">
                    <img :src="item.img" alt="">
                    </a>
            </swiper-item>
            </swiper>
      <home-recommend></home-recommend>
        <feature-view></feature-view>
      
        </div>
</template>
<script>
 import NavBar from '../../components/common/navbar/NavBar'
 import HomeSwiper from './childcomps/HomeSwiper.vue'
 import {getHomeMultidata} from '../../network/home'
import { Swiper , SwiperItem} from '../../components/common/swiper'
import HomeRecommend from './childcomps/HomeRecommend.vue'
import FeatureView from './childcomps/FeatureView.vue'
export default {
    name:'Home',
    components:{
        NavBar,
        HomeSwiper,
        Swiper,
        SwiperItem,
        HomeRecommend,
        FeatureView
      
     
    },data(){
        return{
            banners:[],
            recommends:[]

        }

    },
    // computed:{

    // },
    created(){
        getHomeMultidata().then(res=>{
            console.log(res);
            this.banners=res.data.banner;
                this.recommends=res.data.recommend;
        })
    },
    methods:{
        getHomeMultidata(){
            getHomeMultidata().then(res=>{
                console.log(res)
                // this.banners=res.data.banner.list;
                // this.recommends=res.data.recommend.list;
               
            })
         
        },






    }
    
}
</script>
<style scoped>
#home{
    padding-top: 1px;
}
.home-nav{
    background-color: darksalmon;
    width: 100px;
    text-align: center;
}

/* .content {
  height: calc(100% - 50px);
  
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
} */
</style>