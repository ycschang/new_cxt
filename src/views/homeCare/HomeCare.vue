<template>
	<div>
		<Navbar></Navbar>
		<div class="homeCare">
			<img :src="require('@/assets/homeCare/1.jpg')" class="img">
			<img :src="require('@/assets/homeCare/2.jpg')" class="img">
			<img :src="require('@/assets/homeCare/3.jpg')" class="img">
			<img :src="require('@/assets/homeCare/4.jpg')" class="img">
			<img :src="require('@/assets/homeCare/5.jpg')" class="img">
			<img :src="require('@/assets/homeCare/6.jpg')" class="img">
		</div>
		<Bottom></Bottom>
	</div>
</template>

<script>
import Navbar from "@/components/nav/Navbar";
import Bottom from "@/components/nav/Bottom";

export default {
  name: 'HomeCare',
  components: {
    Navbar,
    Bottom
  }
}
</script>

<style scoped>
	.homeCare {
		width: 100%;
		height: auto;
		/*float: left;*/
		padding-bottom: 30px;
	}

	.img {
		width: 100%;
		height: auto;
	}
</style>
