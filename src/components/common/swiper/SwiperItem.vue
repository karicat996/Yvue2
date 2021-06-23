<template>
    <div class="slide">
      <slot></slot>
    </div>
</template>

<script>
	export default {
		name: "SwiperItem"
	}
</script>

<style scoped>
  .slide {
    width: 320px;
    flex-shrink: 0;
  }
  .slide img {
    width: 320px;
    height: 166px;
  }
</style>