<template>
    <div id="cart">
<nav-bar class="cart-nav">
  <div slot="center">购物车({{cartLength}})</div>
</nav-bar>
      <cart-list class="cart-list"></cart-list>
    <cart-bottom-bar class="bottom" ></cart-bottom-bar>
  </div>
</template>
<script>
import NavBar from "../../components/common/navbar/NavBar";
import Scroll from "../../components/common/scroll/Scroll";
import CartList from "../../views/cart/homecart/CartList";
import CartBottomBar from "../../views/cart/homecart/CartBottomBar";
import {mapGetters} from 'vuex'
export default {
    name:'Cart',
    components: {
		  NavBar,
      CartList,
      CartBottomBar,
      Scroll
    },
    computed: {
		 ...mapGetters(['cartLength'])
    },
    methods: {
    }
    
}
</script>
<style scoped>

</style>